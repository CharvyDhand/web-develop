//Prototype: This allows the object to inherit properties and methods from its prototype. When you access a property or method on an object, JavaScript first checks the object itself.
//protype haar nhi manta aur explore krta rehta hai till it reaches null
//everything is object itself like arrays,string,function etc
//function->object->null
function multi(num){
    return num*5;
}
multi.power=2
console.log(multi(5))
console.log(multi.power)
console.log(multi.prototype)

function createuser(username,score){
    this.username=username        //current context set hoga 
    this.score=score
}
createuser.prototype.increment=function(){
    this.score++;     //this means jisne call kiya usse ke bda do score
}
createuser.prototype.printme=function(){
    console.log(`score=${this.score}`)
}
const x=new createuser("charvy",25)
const y=new createuser("riya",50)   //new ke bina kaam nhi krega 
x.printme()
y.printme()

//a new object is created
//a prototype is linked
// the constructor is called
//the new object is returned