//*************ARRAY************* */
const a=[0,2,3,'charvy',true]    //resizable in JS 
//whenever we copy any array it creates shallow copy (means reference is same change in one will reflect in original also )
//deep copy means not having same reference  
 console.log(a[2])
 const hero=[1,2,3,4,5,6]
 //prototype access means related inbuilt function 
 const a1=new Array(17,8,9)
 console.log(a1[0])
//ARRAY METHODS 
a.push(4)    //insert at end (last index)
console.log(a)
a.pop()          //delete at end
console.log(a)
a.unshift(9)      //insert at front (at 0 index)
console.log(a) 
a.shift()
console.log(a)     //delete at index 0 

console.log(a.includes(true))
console.log(a.indexOf(9))
console.log(a.indexOf(3))

const a2=new Array(9,8,7,6)
const a3=a2.join() //convert into string 
console.log(a2)
console.log(a3)
console.log(typeof a3)

//SLICE AND SPLICE 
const ar=new Array(6,7,8,9)
console.log("a",ar)
const a4=ar.slice(1,3)  //on the base of index but it will not remove that part 
console.log(a4)
console.log("a",a2)
const a5=ar.splice(1,3)    //splice will permanently removeee that part 
console.log(a5)
console.log("a",ar)

const arr=[0,2,3,'charvy',true]
const arr1=new Array(17,8,9)
arr.push(arr1)   //array ke andr array  //shallow
console.log(arr)  
console.log(arr[5][1])
const dp=arr.concat(arr1)  //deep copy 
console.log(dp)

const array=[0,2,3,'charvy',true]
const array1=new Array(17,8,9)
const x=[...a,...a1]     // concat more than 2 arrays
console.log(x)

const r=[1,2,3,[5,6,7],9,[1,2,[4,5]]]
const w=r.flat(Infinity)  //depth=1/2/3/4/infinity means kitne array ke ander array hai 
console.log(w)

console.log(Array.isArray("charvy"))
console.log(Array.from("charvy"))
console.log(Array.from({name:"charvy"})) //interesting 
let o=10
let p=20
let q=30
console.log(Array.of(o,p,q))