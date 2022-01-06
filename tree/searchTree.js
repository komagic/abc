const isValidBST = (root)=>{
    return helper(root,-Infinity,infinity);
}

const help = (root,lower,upper) => {
    if(!root){
        return true;
    }
    if(root.val >=upper || root.val <=lower){
        return false
    }
    // if have right tree or left tree
    return help(root.left,lower,root.val) && help(root.right,root.val,upper)
}