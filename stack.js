class MinStack{
    constructor(){
        this.stack=[];
        this.min = null;
    }
    push(num){
       return this.stack.push(num);
    }

    top(){
        return this.stack[this.stack.length-1];
    }

    min(){
        return Math.min.apply(null,this.stack);
    }
    pop(){
        this.stack.pop();
    }
}