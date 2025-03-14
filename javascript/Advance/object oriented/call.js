function userfunc(name){
    //complex DB calls
   this.name=name;
   console.log("called")
}
function create(username,email,password){
    userfunc.call(this, username)    //functiom create ka this use krega 
    this.email=email
    this.password=password
}
const x=new create("charvy","charvy@gamil",'12345')
console.log(x);   //not callinf userfunc
// so we have use .call syntax 