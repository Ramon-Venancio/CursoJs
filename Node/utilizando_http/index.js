const {createServer} = require('http');

let server = createServer((request,response) => {
    response.write(`
        <h1>Hello World!</h1>
        <p>Primeira página com Node.js</p>
    `);
    response.end();
});

server.listen(8000);

console.log("Ouvindo a porta 8000");