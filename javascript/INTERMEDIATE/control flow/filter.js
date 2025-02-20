const coding=['js','py','math']
const values=coding.forEach((item) => {
    return item
})
console.log(values)  //output:undefined
//because for each never return values

const mynum=[1,2,3,4,5,6,7,8,9]
const result=mynum.filter( (num)=> num>5)      //filter contains callback function and condition as given
console.log(result)
const result1=mynum.filter((num)=>{ return num>5})   //when {} we have to write return
console.log(result1)

const newnum=[]
mynum.forEach((num)=>{
    if(num>4){
        newnum.push(num)
    }
})
console.log(newnum)

const obj=[
    {title:'ps', genre:'cse'},
    {title:'india', genre:'history'},
    {title:'java', genre:'cse'}
]
const userbook=obj.filter((bs)=>bs.genre==='cse')
console.log(userbook)
