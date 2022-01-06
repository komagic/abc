function lighting(color="red"){
    return function(){
        return console.log(color)
    };
}

function timeout (count){
  
    return ()=>new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve();
        }, count*1000);
    })
}

const vm = {
    tasks: [],
    use(...rest){
        
        this.tasks.push(...rest);
    },
    run(){
        console.log(' this.taskslength', this.tasks.length);
        this.tasks.reduce((prev,cur)=>{
            return prev.then(()=>cur())
        },Promise.resolve())
    }
}

vm.use(lighting('red'),timeout(2),lighting('green'),timeout(3));
vm.run();