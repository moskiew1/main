const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'hbs')

app.get('/', (req, res) => { res.render('index',{
    pageTitle: 'Node-JS',
    pageBody: 'Pierwsza strona w node'
})
}) // szuka strony Index w folderze views

app.get('/kontakt', (req, res) => res.send('Zakładka kontakt'))  // dostępna jest na localhost:3000/kontakt

app.listen(port, () => console.log(`Example app listening on port ${port}!`))  //wyświetla stronę w przeglądarce pod:git  localhost:3000