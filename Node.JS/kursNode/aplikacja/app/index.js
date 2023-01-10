const app = require('./app.js')
const { port } = require('./config')

app.listen(port, () => console.log(`Serwer słucha na porcie: ${port}!`))


