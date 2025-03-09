//In past, we had libraries to use promises but now javascript already have it in its feature // we had blue bird library in past but performance of promise is better than older libraries 
//a promise is an object that represents the eventual result of an asynchronous operation
// fetch().then().catch().finally()    //content in then, error in catch /this is consumption of promise 
//first create promise 
const pone=new Promise(function(resolve,reject){
    //Do an async tasks
    //DB calls, cryptography, network 
    setTimeout(function(){
        console.log("Asyn task is complete")
        resolve();   //now it is connected with THEN 
    },1000)
})
//second consumption
//jo upar kaam hua ismein uski values return hongi 
pone.then(function(){
    console.log("promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyn task 2")
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})
const prom3=new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve({username:"charvy",email:"charvydhand@gmail.com"})
    },1000)
})
prom3.then(function(user){
    console.log(user);
})

const prom4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"charvy",pass:"123"})
        }else
          reject("error")
    })
})
//second then mein jo value return ki hai woh ayegi 
prom4.then((user)=>{
   console.log(user);
   return user.username;
}).then((username)=>{
   console.log(username);
}).catch(function(error){
    console.log('errror')
}).finally(()=>{
    console.log("promise either rejected or resolved")
})

const prom5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"dhand",pass:"123"})
        }else
          reject("error is there ")
    },1000)
})
//ANOTHER WAY for error 
async function consumePromise5(){
  try{
    const response=await prom5;
    console.log(response)
  }
  catch(error){
     console.log("error")
  }
}
consumePromise5();

async function getalluser(){
   try{ const response=fetch('https://jsonplaceholder.typicode.com/users') //data is in the form of string 
    console.log(response)
   const data= await response.json();
    console.log(data);
   }
   catch(error){
      console.log("error is found ",error)
   }
}
//fetch pehle execute hora kiuki iske liye alag se priorty queuw bnti hai so it gets executed really fast
getalluser();
fetch('https://api.github.com/users/hiteshchoudhary').then((Response)=>{
    return Response.json()
}).then((data)=>{
    console.log(data)
})
.catch((error)=>console.group("error os"))

//***Fetch  */
//before fetch we had XMTHttp but it was difficult to implement 
//we can fetch instead of request 
//fetch is global 
//jab error millega toh resolve mein hi millega 
//reject mein tabhi millega agr woh fetch kr hi ni paya 
//priorit/microtask queue


//FETCH WORKS IN 2 PART
//1. data ke liye space reserve krne ke liye 
//=>onfulfilled[] and => on rejection[]  //response and reject 
//2. one part goes in webbrowser/node 
//then gives network request 
//ager network mein request chli gyi aur agge usmein error aya toh woh response mein reflect hoga 
//otherwise if it will not be able to fetch then error will reflect in reject 


//

