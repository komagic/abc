const http = require('http')
const url = require('url')
const server = http.createServer((req, res) => {
    console.log('请求进来了');
    let {pathname,query} = url.parse(req.url);

    let arr = []
    req.on('data',(data)=>{
        arr.push(data);
    })
    req.on('end',()=>{
        console.log('end:',Buffer.concat(arr).toString());
    })
});

server.listen(1234,()=>{
    console.log('server is running','');
})

