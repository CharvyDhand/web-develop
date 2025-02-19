/*******  TYPES OF MEMORY
1. STACK(PRIMITIVE): copy millegi 
2. HEAP(NON-PRIMITIVE) :refernce millegi sidhi 
*/

let n="charvy"
 let another= n  //another ke ander n ki copy aa gyi 
 another="change in copy "
 console.log(n)
 console.log(another)
let u={
      email:"usergoogle"
 }
 let usertwo = u
 usertwo.email="changeinrefernec"
 console.log(u.email);

 //CONCATNATE SYNTAX called STRING interpolation
 let j="charvy"
 console.log(`hello my name is ${j}`)
 //OTHER WAY TO DECLARE STRING WHICH GIVES US DETAILED INFO OF STRING LIKE LENGHT PRIMMITIVE OR NIT PROTOTYPE(STRING )
 const x=new String('hello world') //string is object here 
 console.log(x)
 console.log(x[3])
 console.log(x.__proto__)
 console.log(x.length)
 //we have so many functions like this 
 console.log(x.toUpperCase()) 
 console.log(x.charAt(5))
 console.log(x.indexOf("o"))

console.log(x.substring(0,3))  //no negative indexing 
const an=x.slice(0,4)  //works on negative index also 
console.log(an)
const y='    charvy   '
console.log(y)
console.log(y.trim())

const url="https://hitesh.com//charvy%20dhand" //%20 means space
console.log(url.replace('%20','-'))
console.log(url.includes('charvy'))
console.log(url.split('//'))