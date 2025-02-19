/*********OBJECT**********/
// two types: constructor(singleton) & literals(not singleton)
//  literals
const mys=Symbol("key1")    //SYMBOL DAtATYPE 
const juser={
  n:"charvy" ,          //key:value means access using key
  // mys:"mykey",      //we can print it using both methods and its data type will be STRING output will be same but 
[mys]:"mykey1",          //we cannot use juser.mys  and its data type will be SYMBOL 
  [7]:986,
  location:"ludhiana",
  'a1':[1,2,3]     //we cant aqccess it using juser.a1 as we declared it string before the beckend do it 
}      //{} yahi object hai 
//accessing
console.log(juser['n'])   //consider key as string 
console.log(juser.location)
console.log(juser['a1'])
console.log(juser[mys])
console.log(typeof juser[mys])   //no need of double quote 

juser.n='hi'  //override
Object.freeze(juser)          //cannot change after it 
juser.n='after freeze'
console.log(juser)
   
const user={
  x:'hello',
  y:'guys'
}
///FUNCTIONS
user.greeting= function(){
  console.log('this is function,${this.x}')
  console.log(`access variable from object in function usinng back commas,${this.x}`)
}

console.log(user.greeting())        //undefined output along with it why?
console.log(user.greeting)  //unique output


//**********construct************
const singleton=new Object()
const nonsingleton={}
console.log(singleton)
console.log(nonsingleton)

const ob=new Object()
ob.id=123
ob.name='sam'
console.log(ob)
console.log(Object.keys(ob))  //datatype will be array
console.log(Object.values(ob))
console.log(Object.entries(ob))
console.log(ob.hasOwnProperty('rol'))
const reg={
  fullname:{
    user:{
         firstname:'charvy',
         lastname:'dhand'
    }
  }
}
console.log(reg.fullname)
console.log(reg.fullname.user.firstname)

// COMBINE OBJECTS 
const ob1={
  1:"hello",
  2:"b"
}
const ob2={ 3:'combine',4:'performed'}
const ob3={ob1,ob2}
console.log(ob3)
 const ob4=Object.assign({},ob1,ob2)    //({target,source)   {}isse sare objects ob4 mein jayenge but if it is not present then they will all come under ob1 
 console.log(ob4)

 const ob5={...ob1,...ob2}
 console.log(ob5)

//DATABASE MEIN OBJECT USE 
const user=[
  {
    id:1,
    email:"first@gmail.com"
  },
  {
    id:2,
    email:'second@gmain.com'
  }
]
console.log(user[1].email)
//has many more methods related to objects 

 //****DESTRUCTURE */
 const course={
  name:"dsa",
  price:'333',
  instructor:"me"
 }
//  const {name}=course
// console.log(name)
 const {name:n}=course
 console.log(n)

//destructor is also used in react
  
//JASON(FORMATE),API
// {
//   'name':'charvy',
//   ' course':"js"
// }

//learn how url is clicked and fetch the
 

