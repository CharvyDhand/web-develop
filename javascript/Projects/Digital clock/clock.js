const elt=document.getElementById('clock')

// console.log(date.toLocaleTimeString());
setInterval(function(){
    let date=new Date()
    elt.innerHTML=date.toLocaleTimeString()
},1000)  //one second ke baad khudse refresh hoga
