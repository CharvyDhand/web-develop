const forms= document.querySelector('form')
//form gets submit(by post type or get type) and url or server gets value of form, we have to stop that default action with a function 
forms.addEventListener('submit',function(e){
    e.preventDefault()
    const h=parseInt(document.querySelector('#height').value)
    const w=parseInt(document.querySelector('#weight').value)   //we cant take input outside the scope then that will give you empty value 
    const result=parseInt(document.querySelector('#result').value) 
    if(h===' '|| h<0 ||isNaN(h)){
        result.innerHTML='please give valid input'
    }
    else if(w===' '|| w<0 ||isNaN(w)){
        result.innerHTML='please give valid input'
    }
    else{
     const r=(w/((h*h)/10000)).toFixed(2)
     result.innerHTML='<span>${bmi}</span>'
    }
})