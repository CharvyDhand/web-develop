class user{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username is ${this.username}`)
    }
}
class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addcourse(){
        console.log(`a new course added by ${this.username}`)
    }
}
const x= new Teacher("charvy","charvy@gmail.com",'123')
x.addcourse()

const y=new user("charvy")
y.logme() 
console.log(x instanceof Teacher)