//mañana usaremos frameworks
//para no complicarnos
const { randomStudent } = require('./modules/library.js'); // Se aplico la deconstruccion de objetos
const http = require('http');
const host = '127.0.0.1';
const port = 3000; //Entra y sale información

//request y respuesta
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'Text/Html' });
    res.write('Hi from out first server!!');
    console.log(randomStudent()); //llamas a la funcion para que muestre un alumno random, pude notar que no llama al elemento cero
    res.end();
});

server.listen(port, host, () => {
    console.log(`SERVER LISTEN ${port}`)
});