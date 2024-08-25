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
/* import { JOURNAL } from "./journal.js";
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

/* import { JOURNAL } from "./journal.js";
function tableFor(event, JOURNAL) {
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

/* // todo COMBINING FUNCTIONS TO BUILD A CORRELATION CALCULATOR FOR JOURNAL



import { JOURNAL } from "./journal.js";
//*DFINED A PHI COEFFICIENT
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
              console.log();
}

//? DEFINED A 2 BY TWO TABLE WHOSE VALUES CAN BE CALCULATED

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

//todo CALCULATE OCCURENCES DEFINITIVE FOR SQUIRRELIFICATION

for(let entry of JOURNAL){
  if (entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")){
entry.events.push("peanut teeth");
}
}
console.log(phi(tableFor("peanut teeth",JOURNAL)));



//! DISPLAY DEFINITIVE CORRELATION FOR SQUIRELLIFICATION
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



  // * FURTHER ARRAYOLOGY 