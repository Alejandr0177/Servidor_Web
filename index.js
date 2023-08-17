const http = require('http');
const port = 5000;

const server = http.createServer((req, res) => {
    res.end('Hola mi amor');
});

server.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
})