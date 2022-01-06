

async function a(){
    console.log('a',);
    let r = await b();
    console.log('end',);
}


async function c(){
    console.log('c',);
}

async function b(){
    console.log('b',);
    let n = await c();
    console.log('d',);
}


a();