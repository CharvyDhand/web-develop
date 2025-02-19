//Logical flow
//1. IF
const loggedin= true
if(loggedin){
    console.log("user logged in")
}
else{
    console.log('user not logged in')
}
//=== strict equal means will also consider datatype
const temp=34
if(temp===34){
    console.log('executed')
}
//implicit approach
const cash=1000
if(cash>99) console.log('implicit use'), console.log("not preffered")

//else if else
if(cash<500){
    console.log('less than 500')
}else if(cash<750){
    console.log("less than 750")
}else{
    console.log("more than 750")
}

//Real life
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
