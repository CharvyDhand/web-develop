// document.getElementById('owl').onclick = function(){
//         alert("owl clicked")
//     }

//older method 
//attachEvent()
//jQuery-on

//event: whenever trigger then only works 
//event type: browser or  environment(kahan click kiya)

//****TOPIS TO STUDY *****//
//type,timestamp, defaultPrevented
//target, toElement, srcElement, currentTarget
//clientX, clientY ,screenX, screenY
//altkey, ctrlkey, shiftkey, keyCode(alphabets)

// document.getElementById("owl").addEventListener('click',function(e){      //e is event object  
//      alert("owl clicked")
//      console.log(e)
// },false)    //writing false is not importatnt because false parameter is present here by default
//need of false: kayi applications esi hoti jo true false ke bina kaam nhi krti 
//****Event propogation 
//it has two context: event bubbling abd capturing  
//event bubbling=false (by default)
//event capturing= true(sometimes needed) 

// document.getElementById("image").addEventListener('click',function(e){      //e is event object  
//      alert("clicked inside ul")
//      console.log(e)
// },false)
// document.getElementById("owl").addEventListener('click',function(e){      //e is event object  
//      alert("owl clicked")
//      console.log(e)
//      e.stopPropagation()   //now event bubble hpkr upar ke element pr nhi jayga 
// },false)
//first owl clicked
//second clicked inside ul
//EVENT PROPAGETION CALLED BUBBLING IN WHICH INSIDE ELEMENT CLICKED THAN UL THAN COMES BODY
 //BUT IN CASE OF CAPTUTING 
 //FIRST: clicked inside ul
 //second: owl clicked 
 
// document.getElementById('google').addEventListener('click',function(e){
//      e.preventDefault()
//      e.stopPropagation()
//      console.log("google clicked")
// })

// document.querySelector('#image').addEventListener('click',function(e){
//      console.log(e.target)    //targets only image 
//      console.log(e.target.parentNode)    //targets whole li tag
//      let removeit=e.target.parentNode
//      // removeit.remove()    //if click on list then everything gets deleted as his parent is ul and delets whole ul 
//      removeit.parentNode.removeChild(removeit)  
// })

document.querySelector('#image').addEventListener('click',function(e){
          console.log(e.target.tagName)    //targets only image 
          console.log(e.target.parentNode)    //targets whole li tag
          if(e.target.tagName==='IMG'){
               let removeit=e.target.parentNode
               removeit.remove()
          } 
     })