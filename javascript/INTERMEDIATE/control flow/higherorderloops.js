// FOR OF
//[{},{}]
const arr=[1,2,3,4]
for(const i of arr){              //iteration=i  object=arr (not class wala object)
    console.log(i)
}
const greeting='hello!'
for(const greet of greeting){
    console.log(`each char is ${greet}`)
}

//maps
//maps are object that holds key value pair 
const map= new Map()
map.set('in',"india")
map.set('usa',"united states")
map.set('en',"england")
map.set('en',"england")
console.log(map)

for (const key of map){
   console.log(key)
}
// for (const key in map){   //prints nothing as map is not iteratable
//     console.log(key)
//  }
 
for (const [key,value] of map){
    console.log(key,':-',value)
 }

 //object
const user={
    x:'hello',
    y:'guys'
}
for (const key in user){     //in not of
    console.log(key)
    console.log(user[key])
 }
// for (const [key,value] of user){
//     console.log(key,':-',value)
//  }     //****DOES NOT WORK***********// 

const prog=['js','rb','py','java']
for(const key in prog){
    console.log(key)
}
for(const key of prog){
    console.log(key)
}
//FOR EACH LOOP
const program=['js','rb','py','java']
program.forEach( function name(val) {
    console.log(val)
} )       //foreach() knows ALL details of array like length
program.forEach( (item)=>{
    console.log(item);
})
 function printme(ite,index,arr){
    console.log(ite,index,arr)
 }
 program.forEach(printme)

 const coding=[
    {
        lang:"javascript",
        l:"jv"
    },
    {
        lang:'python',
        l:"py"
    }
 ]
 coding.forEach( (item)=>{
    console.log(item.lang)
 })
