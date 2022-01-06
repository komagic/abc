var preorderTraversal = function(root) {
    let arr=[];
   
   let preorder = (root)=>{
        if(!root){
           return null;
       }
       const {val } = root;
       arr.push(val);
     
       preorder(root.left);
       preorder(root.right);
   }
   
   preorder(root);
      
       return arr;
   };