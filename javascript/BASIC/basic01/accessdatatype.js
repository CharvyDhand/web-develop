//DATATYPESSS
//ON THE BASIS OF HOW DATA IS ACCESSED IN MEMORY WE CATAGPRIZE DATATYPE IN TWO TYPES 

//1. PRIMITIVE : CALL BY REFERENCE MEANS WHENEVER WE CALL IT WE GET ITS COPY NOT ORIGINAL DATA AND WE MAKE CHANGES IN COPY 
//STRING,NUMBER,BOOLEAN,NULL,UNDEFINED,SYMBOL(KISI VALUE KO UNIQUE BNANE KE LIYE WE USE IT),BigInt

//2.REFERENCE TYPE/NON-PRIMITIVE: WE DIRECTLY ACCESS IT IN THE MEMORY 
//ARRAY,OBJECTS,FUNCTION
/* *******JAVA SCRIPT IS DYNAMIC LANGUAGE*********** */
const score=100;
const x=100.4;
const b= true
//undefined
let user;
let user2=undefined;
//unique id
const id= Symbol('123')
const uid=Symbol('123')
console.log(id===uid);
console.log(id==uid)

const heros=["aj",'heij'];
let myobj={
    name:"charvy",
    age:19
}
const func=function(){
    console.log('this is my function ');
}
console.log(typeof(func))
console.log(typeof(myobj))
