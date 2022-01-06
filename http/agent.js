const http = require('http');


let opt = {
    host:'localhost',
    port:1234,
    path:'/?a=1',
    method:'POST',
};


let req = http.request(opt,(res)=>{

})

req.end('lgjy')
```