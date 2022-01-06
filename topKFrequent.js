const nums = [1,1,1,2,2,3,8,9,8,8,5,4,2,4,3], k = 2;

let quickSort =(arr)=>arr.length>1?[...quickSort(arr.slice(1).filter(n=>n['count']>=arr[0]['count'])),arr[0],...quickSort(arr.slice(1).filter(n=>n['count']<arr[0]['count']))]:arr

let log = console.log
var topKFrequent = function(nums, k) {

    let cache ={
    
    }
    let index=0;
     nums.forEach(num=>{
         if(!cache[num]){
             cache[num]={count:1,index:num};
             index ++;
         }else{
             cache[num].count++;
         }
     })
     return [...quickSort(Object.values(cache),'count')].slice(0,k).map(item=>item['index']);
    
    };
    log(topKFrequent(nums, k));