//*********************DATA CONVERSION CONFUSION**************** 
let score=33
console.log(typeof(score))
let convt=String(score)
console.log(typeof(convt))

let u="33abc"
console.log(typeof u)
console.log(u)
let v=Number(u)
console.log(typeof v)
console.log(v)   //NaN - not a number 

let i=true
console.log(typeof i)
console.log(i)
let j=Number(u)
console.log(typeof j)
console.log(j)

let o=null
console.log(typeof o)
console.log(o)
let p=Number(o)
console.log(typeof p)
console.log(p)

let s;
console.log(typeof s)
console.log(s)
let d=Number(s)
console.log(typeof d)
console.log(d) //NaN

// "33"=33
// '33abc'=NaN
// true=1 and false=0

let e=0;
let r=Boolean(e)
console.log(r)
// 1,"anystring"=true
// 0,""=false

