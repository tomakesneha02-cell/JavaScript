 //Array 

const my=[1,2,3,4]
const myHeros=["sneha","tomake"];

const myarr2= new Array(1,2,3,4)
console.log(my[1])

//array menthods


my.push(5)
my.push(6)

console.log(my)

my.pop()
console.log(my)
 

//unshift:- adding value in front of the array

my.unshift(0)
console.log("unshift",my);

//shift: adding value in f

my.shift(0)
console.log("shift",my);

console.log("comparison",my.includes(2))

console.log("check index",my.indexOf(1));

const newarr= my.join() 

console.log( typeof newarr)

//
 const op=[1,2,3,4,5,6,7,8,9]
 console.log("Original Array",op)
 console.log("Perform slice with array",op.slice(1,3))
 console.log("with splice",op.splice(1,3)) //output:-- 2,3,4
