// String Methods
 let name="sneha"
 console.log(name.length)
 console.log(name.toUpperCase());
 console.log(name.toLowerCase());

 //Slice-extracting the part of string with strat and end and end always -1

 console.log(name.slice(0,4));
 
 //substring: it also same extracting part of string  with start and end 
console.log("substring :--",name.substring(0,5));

//substr- start ,length

console.log(name.substr(0,1));

 
//concat()-  joining the strings

let Fname="Sneha"
let Lname="Tomake"

console.log("Concate:--",Fname+Lname);

//trim: remove extra space from the memory 

let Trimtest1="               Hello            "
let Trimtest2="                Sneha           "
console.log(Trimtest1);
console.log(Trimtest2);
console.log(Trimtest1.trim());

console.log(Trimtest2.trimStart())
console.log(Trimtest2.trimEnd());

//padstart:-- adding char or we can say value at the end or start 
//sneha
let padTest ="e"
console.log(padTest.padStart(2,"n"));

let number = "5";

console.log(number.padStart(3, "0"));

console.log(number.repeat(3));


//Replace

let replacetest="i learn java"
console.log(replacetest.replace("java","javascript"));


//charAt()

console.log(replacetest.charAt(0));


