const mynum=[1,2,3,4,5,6,7,8]
const newnum=mynum.map((num)=>num+10)
console.log(newnum)

//***CHAINING
const x=[1,2,3,4]
const result=x.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40)
console.log(result)
