//****************NUMBERS*************** 
const score=400              //yeh bhi number hai 
console.log(score)
const balance=new Number(299)       //yeh confirm hai ki number hi hai 
console.log(balance)
console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed())
const other=23.55566
console.log(other.toPrecision(2))
const h=100000
console.log(h.toLocaleString('en-IN'))
//***********math**************/
console.log(Math)
console.log(Math.abs(-4)) //ABSOLUTE:positive ho jayega 
console.log(Math.round(4.3))
console.log(Math.ceil(4.3))
console.log(Math.floor(4.3))
console.log(Math.max(4,4,6,7,8,9))
console.log(Math.random()) //0-1 ke bich
console.log(Math.floor(Math.random()*10)+1)
console.log(Math.random()*10+1); //value zero ni ayegi +1 se 
const min=10
const max=20
const x=(Math.random()*(max-min+1))+min
console.log(Math.floor(x))   //values between 10-20