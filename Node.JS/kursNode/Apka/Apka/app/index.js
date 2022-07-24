const app = require('./app.js')
const { port } = require('./config');

app.listen(port, () => {
  console.log(`Serwer uruchomiony na porcie: ${port}`);
}); 

