// for loop 
// while loop
// do-while loop
for(let i=0; i<10; i++){
    console.log(i);
    
}
console.log();


for(let i=20; i<=50  ; i++){
    if(i%7===0){
        console.log(i);
        
    }
    
}
console.log();


let b = 10;
 
while(b<20){
    console.log(b);
    b++
    

}

 console.log();
 
let c = 10;
 
do{
    console.log(c);
    c++
    
}while ( c  > 20);


if (number <= 1) {
    return false;
  }

  console.log(

  );
  

  let n = 17;
// let isPrime = true;

if (n <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
}

 console.log(isPrime ? `${n} is a prime number.` : `${n} is not a prime number.`);
console.log();


let num = 34562
let rev = 0;

while(num>0){
    let d = num%10;

rev = rev * 10 + d;
num = preseInt(num/10);
}

console.log(rev);

