// DATE objects not global 
// when it will Temporal.Now.instant() will get current data //its just purposal
let mydate=new Date()
console.log(mydate)  //cant understand 
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())   //many more formates are there
console.log(typeof(mydate))
let d=new Date(2023,0,23)
console.log(d.toDateString())   //months start from 0 in java 

let dt=new Date(2023,0,23,5,3)
console.log(dt.toLocaleString())

let ds=new Date("02-01-2024")
console.log(ds.toDateString())
console.log(ds.getTime())   //millisecond 

//*****time stampp************* */

let n= Date.now()
console.log(n)  
console.log(Math.floor(Date.now()/1000))  //secondss

let newdate=new Date()
console.log(newdate)
console.log(newdate.getMonth())
console.log(newdate.getDay())
//***********important***************
newdate.toLocaleString('default',{
  weekday:"long"  
})
