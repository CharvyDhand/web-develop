//acc=initialvalue
//acc=accu+current
//current++
const mynum=[1,2,3]
const newnum=mynum.reduce(function(acc,cu){
    console.log(acc,cu)
    return acc+cu
},0)
console.log(newnum)
//used in  shopping cards 
const total=mynum.reduce((acc,cu)=>acc+cu,0)
console.log(total)

const shoopingcart=[
    {
        item:'phone',
        price:120000
    },
    {
        item:'heels',
        price:2000
    },
    {
        item:'shoes',
        price:3000
    }
]
const amount=shoopingcart.reduce((acc,cu)=>acc+cu.price,0)
console.log(amount)