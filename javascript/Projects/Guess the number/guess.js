let randomnumber=parseInt(Math.random()*100+1)
const submit=document.querySelector("#subt")
const userinput =document.querySelector("#guessfeild")
const guessslot=document.querySelector('.guesses')
const last=document.querySelector('.lastresult')
const lowhigh=document.querySelector(".loworhi")
const startover=document.querySelector(".result")
const p=document.createElement("p")
let prevguess=[]
let numguess=1;
let playgame=true
if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userinput.value)
        validateguess(guess);
    })
}
function validateguess(guess){
    if( isNaN(guess) || guess<1 || guess>100){
        alert('Please enter valid number')
    }else{
        prevguess.push(guess)
        if(numguess===10){
            displayguess(guess)
            displaymessage(`Game over, Random number was ${randomnumber}`)
            endgame()
        }else{
            displayguess(guess)
            checkguess(guess)
        }
    }
}
function checkguess(guess){
    if(guess===randomnumber){
        displaymessage(`You guessed it right`)
        endgame()
    }else if(guess<randomnumber){
        displaymessage(`Number is low`)
    }else{
        displaymessage(`number is high`)
    }
}
function displayguess(guess){
    userinput.value=``
    guessslot.innerHTML+=`${guess}, `
    last.innerHTML=`${10-numguess}`
    numguess++
}
function displaymessage(message){
    lowhigh.innerHTML=`<h2>${message}</h2>`
}
function endgame(){
      userinput.value=''           //guess ko empty 
      userinput.setAttribute('disable','')
      p.classList.add('button')
      p.innerHTML=`<h2 id="newgame">Start new game<h2>`
      startover.appendChild(p);
      playgame=false
      newgame()
   
}
function newgame(){
     const newbutton=document.querySelector("#newgame")
     newbutton.addEventListener('click',function(e){
        randomnumber=parseInt(Math.random()*100+1)
        prevguess=[]
        numguess=1
        guessslot.innerHTML=''
        last.innerHTML=`${10-numguess}`
        userinput.removeAttribute('disable')
        startover.removeChild(p)
        playgame=true
     })
}