// let m='charvy    '
// console.log(m.length)
// console.log(m.truelength)   //undefined

let x=[1,2,3]
let y={
    thor:'hammer',
    spider:'sling',
    getname:function(){
        console.log(`Spidy power:${this.spider}`)
    }
}
//we can add customized property in object
Object.prototype.charvy=function(){
    console.log(`it is present in all objects`)
}
y.charvy()
x.charvy()
Array.prototype.hey=function(){
    console.log("hello")
}
x.hey()

//inheritence
//old
const user={
    name:'charvy'
}
const teacher={
    makevideo:true
}
const tasupport={
    makeassignment:'math'
    // __proto__:teacher 

}
//linking objects
// teacher.__proto__=user
//modern
Object.setPrototypeOf(tasupport,teacher)
let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()