//truthy and falsy value 
// const useremail='charvy@gmail.com'   //got email
// const useremail=''  //dont have
// // const useremail=[]  //got email
// if(useremail){
//     console.log('get email')
// }else{
//     console.log("dont have")
// }

//FALSY VALUE: false,0,-0, bigint 0n, "", null, undefined, NaN
//others are TRUTHY VALUES 
//like: "0", "false", " ", [], {}, function(){}

let username=[]
if(username.length===0){
    console.log("array is empty ")
}

const emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log("empty object")
}

//Nullish Coalescing Operator(??) -> relies on null and undefined
//used in case DATABASE 
let val1;
let val2;
val1=5??10
val2=null??10     //agar database se value ayi hai toh woh assign krdo nahi toh null
console.log(val1,val2)

let val3=undefined?? 20
console.log(val3)


//TERNARY OPERATOR
//CONDITION?TRUE:FALSE
const teaprice=100
teaprice>50?console.log('expensive'):console.log("not expensive")
