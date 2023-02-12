const express = require('express');
const path = require('path'); // służy do odnajdywania plików
const ejsLayouts = require('express-ejs-layouts'); // służy do tworzenia layoutów
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { sessionKeySecret } = require('./config');
const helmet = require('helmet');
const rateLimiterMiddleware = require('./middleware/rate-limiter-middleware');


// inicjalizacjabazy danych init database
require('./db/mongoose');

app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'","unsafe-inline", "cdn.jsdelivr.net"],
            styleSrc: ["'self'", "unsafe-inline", "cdn.jsdelivr.net"]
        }
    }
}));
app.use(rateLimiterMiddleware);

// session - sesja użytkownika
app.use(session({
    secret: sessionKeySecret,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 2},
}));

//view engine
app.use(ejsLayouts); // użyj biblioteki do tworzenia layoutów
app.set('layout', './layouts/main') // ustaw jako domyślny layout
//set layout
app.set('view engine', 'ejs'); // set- settings - włącza w expresie szablony ejs.
app.set('views', path.join(__dirname + '/../views')); //  ustawienie folderu z widokami szablonów
//public folder
app.use(express.static('public'));



//middleware wykonuje się pomiędzy startem strony a wywołaniem controlera
app.use('/', require('./middleware/view-variables-middleware')) // pobiera url i wstawia w nazwie strony w zakładce
app.use('/', require('./middleware/user-middleware'));
app.use('/admin', require('./middleware/is-auth-middleware'));

// Body parser // application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })) // będzie pobierał dane z formularza w którym tworzy się nowe firmy
app.use(cookieParser());
app.use(express.json());


// routes - z foldera db są to wszystkie strony url
app.use('/api', require('./routes/api'));
app.use(require('./routes/web'));

module.exports = app;