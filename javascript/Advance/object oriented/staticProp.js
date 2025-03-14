class user{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username:${this.username}`)
    }
    static createid(){         //not accessible by everyone 
        return '123'
    }
}
const x=new user('charvy')
// console.log(x.createid())
class teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const i=new teacher("charvy","charvu@gmail.com")
i.logme()
//not even child class can access it 