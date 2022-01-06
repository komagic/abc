
const te =[73,74,75,71,69,72,76,73];
const dailyTemperatures =(temperatures)=>{
   let result = [];
   let len = temperatures.length;
   let stack = [0];
   result = new Array(len).fill(0);
   for (let i=0; i<len; i++) {
       let temp = temperatures[i];
       while(stack.length && temperatures[stack.slice(-1)]<temp){
           let index = stack.pop();
           let num = i-index;
           result[index]=num;
       }

       stack.push(i);
   }
   return result;

}

console.log('daily:',dailyTemperatures(te));