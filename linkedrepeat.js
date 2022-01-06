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

l.addAtTail('1');
l.addAtTail('2')
l.addAtTail('3');
l.addAtTail('4');
l.addAtTail('5');


// let deleteDuplicates = (head)=> {
//     let header =head;
//     let cur = head;
//     let prev = null;
//   let cache = {};
//     while (cur){
//           let next = cur.next;
//           let value = cur.value;
//           if(cache[value] && prev){
//               prev.next = next;
//               cur = next;
//           }else{
//               cache[value] =1;
//               prev = cur;
//               cur = next;
              

//           }
         
//       }
  
//       return head;
  
//   };

// console.log('~w:',deleteDuplicates(l.head));
var removeNthFromEnd = function(head, n) {
    let arr= [];
    let cur =head, prev=null;
    while(cur){
        let next = cur.next;
    
        if(arr.length<n+1){
        }else{
            arr.shift();
        }
        arr.push(cur);


        prev = cur;
        cur = next;
    }
    arr[0].next = arr[2];

    console.log('arr',arr);
    return head;
};

console.log('~w:',removeNthFromEnd(l.head,2))