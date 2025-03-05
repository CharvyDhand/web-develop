const randomcolor= function(){
    const hex='0123456789ABCDEF'
    let color='#'     //start of color code 
    for(let i=0;i<6;i++){
        color+= hex[Math.floor(Math.random()*16)]
    }
    return color;
};
let intt
const startchangingcolor=function(){
    if(!intt){
        intt=setInterval(func,1000);
    }
    function func(){
    document.body.style.backgroundColor=randomcolor();
    }
}
const stopchangingcolor=function(){
    clearInterval(intt)
    intt=null;
}
document.querySelector('#start').addEventListener('click',startchangingcolor);
document.querySelector('#stop').addEventListener('click',stopchangingcolor);

