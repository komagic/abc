const maxSlideWindow = (nums=[],k)=>{
    let result =[];
    if(!nums.length) return
    

    for(let i=0; i+k<=nums.length; i++){
        result.push( Math.max.apply(null,nums.slice(i,i+k)));
    }

    return result
}

console.log('',maxSlideWindow([1,3,-1,-3,5,3,6,7],3));