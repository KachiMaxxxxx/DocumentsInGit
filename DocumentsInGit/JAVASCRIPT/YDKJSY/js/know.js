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

import { JOURNAL } from "./journal";

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
// → [76, 9, 4, 1]

