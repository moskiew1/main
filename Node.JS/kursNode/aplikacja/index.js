const express = require('express');
const port = 3000;

const app = express();


app.get('/', (req, res) => res.send('Hello World!'));
app.get('/kontakt', (req, res) => res.send('kontakt'));







app.listen(port, () => console.log(`Example app listening on port ${port}!`))


