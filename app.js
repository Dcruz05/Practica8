/* const http = require("http");

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type": "text/plain"});
    res.end("Hello world\n");
}).listen(1337,() => {
    console.log('Servidor HTTP iniciado en el puerto 1337');
}); */

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
  console.log('Hello World')
})

app.listen(3000)