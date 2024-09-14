//! remember to better organize your comments into blocks

//! ELOQUENT JS CHAPTER 2 



import { JOURNAL } from "./journal.js";



// * HASH CODE
/* for(let number = "#"; number <= "#######"; number= number + "#" ){
  console.log(number);
 }
 


 * FIZZBUZZ CODE 

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


 todo You can represent same code as...
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

! CHAPTER 3 

 *CHESBOARD CODE 
  let board = "";
 let size = 8;
for(let x = 0; x < size; x++){
 for(let y = 0; y < size; y++){
  board += (x % 2) === (y % 2) ? " " : "#";
 }
 board += "\n";
}
console.log(board)
 


* MINIMUM CODE USING SWITCH 
 function min(a, b) {
  switch (true) {
    case (a < b): return a;
    case (a > b): return b;
    default: return "The integers are equal"
  }
}
console.log(min(0, 10));
console.log(min(0,-10)); 

* USING IF STATEMENTS ARE BETTER
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

 

 * RECURSION PROBLEM 
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

* BEAN COUNTING 
 
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
console.log(countChar("kakkerlak","k")); */

/*  
*SUMMARY
This chapter taught you how to write your own functions. The function keyword, when used as an expression, can create a function value. When used as a statement, it can be used to declare a binding and give it a function as its value. Arrow functions are yet another way to create functions.

// Define f to hold a function value
const f = function(a) {
  console.log(a + 2);
};

// Declare g to be a function
function g(a, b) {
  return a * b * 3.5;
}

// A less verbose function value
let h = a => a % 3;
A key part of understanding functions is understanding scopes. Each block creates a new scope. Parameters and bindings declared in a given scope are local and not visible from the outside. Bindings declared with var behave differently—they end up in the nearest function scope or the global scope. 


!CHAPTER 4

//*UNDERSTANDING STRING LITERAL 
/* let firstName = "Kachi";
  console.log('My name is ${firstName}');
 */


//* OBJECTS AND ARRAYS
/* console.log(Object.keys({x:0, y:0, z:2}));
 */

/* let journal = [
  {
    events: [ "work", "touched tree"],squirrel:false
  },
  {
    events:["work","ice cream"], squirrel:true
  }
] 
console.log(journal)*/
//*UPDATE

/* let journal=[];
function addEntry(events,squirrel){
  journal.push({events,squirrel});
}
console.log(journal)
 */







//* ARRAY LOOPS


//? NORMAL FUNCTION LOOP
/*
function tableFor(event, journal) {
 let table = [0, 0, 0, 0];
 for (let i = 0; i < journal.length; i++) {
   let entry = journal[i], index = 0;
   if (entry.events.includes(event)) index += 1;
   if (entry.squirrel) index += 2;
   table[index] += 1;
 }
 return table;
}

console.log(tableFor("pizza", JOURNAL));

*/


//? MODERN ARRAY LOOP

/* function tableFor(event, JOURNAL) {
  let table = [0, 0, 0, 0];
  for (let entry of JOURNAL) {
    let index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;

  }
  return table;
}

console.log(tableFor("pizza", JOURNAL));

 */

// todo COMBINING FUNCTIONS TO BUILD A CORRELATION CALCULATOR FOR JOURNAL



/*
//*DFINED A PHI COEFFICIENT
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
              console.log();
}

* DEFINED A 2 BY TWO TABLE WHOSE VALUES CAN BE CALCULATED

function tableFor(occurence, JOURNAL) {
  let table = [0, 0, 0, 0];
  for (let entry of JOURNAL) {
    let index = 0;
    if (entry.events.includes(occurence)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;

  }
  return table;
}

console.log(tableFor("pizza", JOURNAL));



//* DEFINED A FULL ARRAY OF EVENT OCCURENCE IN JOURNAL


function journalEvents(JOURNAL) {
  let fullEvents = [];
  for (let entry of JOURNAL) {
    for (let occurence of entry.events) {
      if (!fullEvents.includes(occurence)) {
        fullEvents.push(occurence);
      }
    }
  }
  return fullEvents;
}

console.log(journalEvents(JOURNAL));

//* APPLIED PHI CALCULATOR TO TABLES DEFINED BY OCCURENCE OF EVENTS IN JOURNAL AND SELECTED THOSE WITH SIGNIFICANT OUTCOME


for (let occurence of journalEvents(JOURNAL) ){
  let correlation = phi(tableFor(occurence,JOURNAL));
  if (correlation > 0.1 || correlation < -0.1){
console.log(occurence + ":",correlation )
  }
}

todo CALCULATE OCCURENCES DEFINITIVE FOR SQUIRRELIFICATION

for(let entry of JOURNAL){
  if (entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")){
entry.events.push("peanut teeth");
}
}
console.log(phi(tableFor("peanut teeth",JOURNAL)));



! DISPLAY DEFINITIVE CORRELATION FOR SQUIRELLIFICATION
 function showResult(JOURNAL){
  let showResult=[];
  for(let entry of JOURNAL){
    if (entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")){
showResult.push("peanut teeth");
}
    }
    return showResult; 
  }
  console.log(showResult(JOURNAL));
 */



/* 
 * FURTHER ARRAY METHODS
 let todoList = [];
function remember(task) {
 todoList.push(task);
}
function remove(task){
 todoList.pop(task);
}
function getTask() {
 return todoList.shift();
}
function rememberUrgently(task) {
 todoList.unshift(task);
}
 console.log([1,2,3,2,1].indexof(2));
 console.log([1,2,3,2,1]lastIndexof(2));

 !Others include;

 *slice:returns an array with only elements between them,end is exclusive;
 *concat:appends arrays together to create a new array,
 function remove(array, index) {
 return array.slice(0, index)
   .concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"],



//* STRINGS AND THIER PROPERTIES
?NB:Strings have built in properties by default;
*slice;
*indexOf,
*trim:removes whitespaces,tabs,newlines from the start and end of a string;
*padStart,
*split:seperates occurences of words in a sentence,
*join:does the opposite,
*repeat:repeat...;
*string.lenght;


//* REST PARAMETER which calls all instances of an argument, object or array;

defined by ...
such that,
funtion max(...numbers)}{
let result = -Infinity;
for(let number of numbers){
if (number > result) result = number}
return result;}
console.log(max(4,1,7,0,2,6));
? nb: can be used in square bracket or curly braces 


//* MATH METHODS
math.min ;math.max; math.random; math.floor; math.ceil; math.round;


//* DESTRUCTURING involves reading a property directly from it's object name by enclosing it in a square bracket or curly braces

//* OPTIONAL PROPERTY ACCESS crosschecks whether an object truly exists before defining its properties else it returns undefined;

//* JSON stores objects and arrays as memories of bits defined in quotation marks

//* JSON functions includes JSON.stringify and JSON.parse to convert between strings and values they encode in quotation marks.

!SUMMARY OF OBJECTS AND ARRAYS
Most values in JavaScript have properties, with the exceptions being null and undefined. Properties are accessed using value.prop or value["prop"]. Objects tend to use names for their properties and store more or less a fixed set of them. Arrays, on the other hand, usually contain varying amounts of conceptually identical values and use numbers (starting from 0) as the names of their propertieS.
There are some named properties in arrays, such as length and a number of methods. Methods are functions that live in properties and (usually) act on the value of which they are a property.

You can iterate over arrays using a special kind of for loop: for (let element of array).
*/


/*

*EXERCISES CHAPTER 4


*RANGE FUNCTION 
function range(start, end, step = 1) {
  let result = [];
  if (step > 0 && start <= end) {
    for ( let i = start; i <= end; i += step) {
      result.push(i);
    }
  }
  else if (step < 0 && start < end) {
    for ( let i = start; i >= end; i += end) {
      result.push(i);
    }
  }
  else {
    return "SYNTAX ERROR";
  }

  return result;
}
console.log(range(1,10))

function sum(array){
let total=0;
for ( let value of array  ){
  total+= value;
}
return total;
}
console.log(sum(range(1,10)))

*REVERSING AN ARRAY
function reverseArray(arr){
  let newArray = [];
  for (let i = 0;i < arr.length; i++){
    newArray.unshift(arr[i]);
  }
  return newArray;
}
console.log(reverseArray([1,3,5,7]));
*
function reverseArray(arr){
  let newArray = [];
  for (let i=arr.length-1; i>=0;i--){
    newArray.push(arr[i]);
  }
  return newArray;
}
console.log(reverseArray([1,3,5,7]));


*REVERSED ARRAY PURE FUNCTION
function reversedInPlace(arr){
  let temp;
  for(let i=0;i<Math.floor(arr.length/2);i++){
    temp=arr[i]
    arr[i]= arr[arr.length-1 - i];
    arr[arr.length-1 -i] = temp;
  }
  return arr;
}
console.log(reversedInPlace([1,3,5,7]));
*/

