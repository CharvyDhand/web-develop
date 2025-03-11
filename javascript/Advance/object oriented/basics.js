// Java script is prototyoe based language '
//uses prototype to create objects, rather than defining classes
// objects collection of properties and methods

//-constructor function
//-prototypes
//-classes
//-instance(new, this)

// *** 4 pillars
//abstraction
//encapsulation
//inheritence
//polymorohism

const user={
    username:'charvy',
    logincount:4,
    signedin:true,
    getdetails: function(){
        console.log(`username:${this.username}`)     //if this will not be there then it will give error as it does not know which username 
        console.log(this)     //this gives detail of the details present at current moment
        }
}
console.log(user.username)
console.log(user.getdetails())
console.log(this)    //in window console, it will give the details that will be present in window


//**CONSTRUCTOR */
// const promiseone= new Promise()

function func(username,logincount){
    this.username=username;        //left hand side hmara variable and right side jo value paas kr re hai
    this.logincount=logincount
    return this;
}
// const userone= func('charvy',12)
// const usertwo=func('dhand',7)   //we are not printing this but still it will override  ///thats why we use constructor new so that he asigns new instance evertime 
// console.log(userone)
const userone=new func('charvy',12)
const usertwo= new func('dhand',7) 
console.log(userone)
console.log(userone.constructor)
//New keyword steps
//1.create new object
//2. constructor function call hota hai 
//3. assign values
