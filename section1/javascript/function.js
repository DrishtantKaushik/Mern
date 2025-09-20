function addNums(a , b){
   var c = a+b;
    console.log(c);
    
}
addNums(45, 456);

// console.log(c);

const getAvg = function (x, y, z=345){
    const avg = (x + y + z) / 3;
    return avg;
}

getAvg(345 , 6732, 234);


const factorial = (n) => {
      let f = 1;
      for(let i = 1; i <= n; i++){
        f = f *i;
      }
      return f;
};
const fact = factorial(5);
console.log(fact);
const retMultiple = () => {
    return[234, 678, 3456]
};
const [one, two, three] = retMultiple();
console.log(two);

const[a, ,c] = [10 , 20 , 30];


 
 

