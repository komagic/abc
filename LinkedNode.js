// const arr = []

// console.time('test')

// for (var i = 0; i < 100000; i++) {
// // arr.push(i);
// arr.unshift(i);
// }

// console.timeEnd('test')

class LinkedNode {
    constructor(value){
        this.value = value;
        this.next = null
    }

}

class LinkedList {
    constructor(){
        this.head = null;
        this.count = 0;
    }

    addAtTail(value){
        // create new node
        const node = new LinkedNode(value);
        //tail
        if(0 == this.count){
            this.head = node;
        }else{
           let cur=this.head;
           while(cur.next){
               cur = cur.next;
           }

           cur.next = node;
        }
        this.count++;

    }

   addAtHead(value){
       const node = new LinkedNode(value);
       if(0 == this.count){
        this.head = node;
    }else{
        node.next = this.head;
        this.head = node;
    }
    this.count++;
   }  

   get(index){
       if(0==this.count || index<0||index>=this.count){
           return
       }
       let cur = this.head;
       for (let i = 0; i < index; i++) {
           cur = cur.next;
       }
       return cur;
   }
   addAtIndex(value,index){
    let cur = get(index);
    let node = new LinkedNode(value);
    if(this.count == 0|| index >= this.count){
        return 
    }
    
    if(index<=0){
       return this.addAtHead(value);
    }

    const prev = this.get(index-1);
    const next = prev.next;
    prev.next = node;
    node.next = next;
    this.count++;
   }
}

const l = new LinkedList();

l.addAtTail('a');
l.addAtTail('b')
l.addAtTail('c');



module.exports={list:l};