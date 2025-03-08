fetch('https://api.github.com/users/hiteshchoudhary').then((Response)=>{
    return Response.json()
}).then((data)=>{
    console.log(data)
})
.catch((error)=>console.group("error os"))