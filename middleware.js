class Vm{
    constructor(){
        this.middle=[];
    }
    
    use(fn){
        this.middle.push(fn)
    }

    run(state){
        this.middle.reduce((prev,current)=>prev.then((s)=>current(s)),Promise.resolve(state))
    }
}

const getter = (state) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('getter',state);
        resolve(state);

        },2300)
    })
}

const setter =  (state) => {
    const st = {...state,b:16}
    console.log('setter:',st);

    return st;
}

const vm = new Vm();
vm.use(getter);
vm.use(setter);
vm.run({a:1,b:2})