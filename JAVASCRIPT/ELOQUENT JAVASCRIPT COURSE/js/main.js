/* ELOQUENT JS CHAPTER 2 */

//HASH CODE
for(let number = "#"; number <= "#######"; number= number + "#" ){
  console.log(number);
 }
 


/* FIZZBUZZ CODE */

 for (let print = 1; print <= 100; print++){
if( print % 3===0 && print % 5 === 0){
console.log("FizzBuzz");
}
else if( print % 3=== 0){
console.log("Fizz");
}
else if( print % 5=== 0){
console.log("Buzz");
}
else {console.log(print);}
}


 /*NB: You can represent same code as... */
 for (let print = 1; print <= 100; print++) {
  switch (true) {
    case (print % 3 === 0 && print % 5 === 0): 
      console.log("FizzBuzz");
    
      break;
    case (print % 3 === 0): 
      console.log("Fizz");
    
      break;
    case (print % 5 === 0): 
      console.log("Buzz");
    
      break;
    default: console.log(print);
  
  break;
}
} 

/* CHAPTER 3 */

/* CHESBOARD CODE */
  let board = "";
 let size = 8;
for(let x = 0; x < size; x++){
 for(let y = 0; y < size; y++){
  board += (x % 2) === (y % 2) ? " " : "#";
 }
 board += "\n";
}
console.log(board)
 


/* MINIMUM CODE USING SWITCH */
 function min(a, b) {
  switch (true) {
    case (a < b): return a;
    case (a > b): return b;
    default: return "The integers are equal"
  }
}
console.log(min(0, 10));
console.log(min(0,-10)); 

/* USING IF STATEMENTS ARE BETTER */
function min(a, b) {
  if (a < b) {
    return a;
  } else if (a > b) {
    return b;
  } else {
    return "The integers are equal";
  }
}
console.log(min(0, 10));
console.log(min(0,-10));

 

 /* RECURSION PROBLEM */
 function isEven(x) {
  if (x === 0) {
    return "even";
  }
  else if (x === 1) {
    return "odd";
  }
  else if(x<0){
    return isEven(-x)
  }
 else {return isEven(x - 2);}

}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1)); 

/* BEAN COUNTING */
 
 function countChar(string,char){
  let count=0
  for (x=0;x<=string.length;x++){
    if (string[x]===char){
    count++;}
  }
  return count;
}
function countBs(string){
  return countChar(string,"B");
}

console.log(countBs("BOB"));
console.log(countChar("kakkerlak","k"));