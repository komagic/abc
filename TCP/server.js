const net = require('net');

const server = net.createServer();

const PORT =1234;

const HOST = 'localhost';

server.listen(PORT,HOST);

server.on('listening', ()=>{
    console.log(`server start at ${HOST}:${PORT}`);
})

server.on('connection',(socket)=>{
    socket.on('data',(chunk)=>{
        const msg = chunk.toString();
        console.log('msg~~:',msg);

        socket.write(Buffer.from('hi~'+msg));
    })
})
server.on('close',()=>{
    console.log('server close');
})

server.on('error',(err)=>{
    if(err.code == 'EADDRINUSE'){
        console.log('address is already in use')
    }
    else{
        console.log(err);
    }
})