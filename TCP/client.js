const net = require('net');

const client = net.createConnection({
    port:1234,
    host:'127.0.0.1'
})

client.on('connect',()=>{
    client.write('hello')
})

client.on('data',chunk=>{
    console.log(chunk.toString())
})

client.on('error',err=>{
    console.log(err)
})

client.on('close',err=>{
    console.log('client close connection')
})