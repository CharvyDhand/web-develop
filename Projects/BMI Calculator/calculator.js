const forms= document.querySelector('form')
//form gets submit(by post type or get type) and url or server gets value of form, we have to stop that default action with a function 
forms.addEventListener('submit',function(e){
    e.preventDefault()
    const h=parseInt(document.querySelector('#height').value)
    const w=parseInt(document.querySelector('#weight').value)   //we cant take input outside the scope then that will give you empty value 
    console.log(h,w)
    const results=document.querySelector('#result') 
    if(h===' '|| h<0 ||isNaN(h)){
        results.innerHTML='please give valid input'
    }
    else if(w===' '|| w<0 ||isNaN(w)){
        results.innerHTML='please give valid input'
    }
    else{
     const bmi=(w/((h*h)/10000)).toFixed(2)
     results.innerHTML=`<span>${bmi}</span>`
    }
})