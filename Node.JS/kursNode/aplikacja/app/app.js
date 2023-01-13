const express = require('express');
const path = require('path'); // służy do odnajdywania plików
const ejsLayouts = require('express-ejs-layouts'); // służy do tworzenia layoutów
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { sessionKeySecret } = require('./config');


// inicjalizacjabazy danych init database
require('./db/mongoose');

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
app.use('/', require('./middleware/view-variables')) // pobiera url i wstawia w nazwie strony w zakładce

// Body parser // application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })) // będzie pobierał dane z formularza w którym tworzy się nowe firmy
app.use(cookieParser());


// routes - z foldera db są to wszystkie strony url
app.use(require('./routes/web'));

module.exports = app;