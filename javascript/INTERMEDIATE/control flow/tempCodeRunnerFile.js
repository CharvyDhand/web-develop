const login= true
const debit=true
const useremail=true
const userid= false
if(login && debit){
    console.log("Allow to do shoppping")
}
if(useremail || userid){
    console.log("allow login")
}