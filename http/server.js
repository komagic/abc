const net = require('net');
const server = net.createServer()

const port =1234;
const host = 'localhost';
server.listen(port,()=>{
    console.log('server start','');
})
server.on('connection',(socket)=>{
socket.on('data',(data)=>{
    console.log(data.toString());
})

socket.end("test http request")
})