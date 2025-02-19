//js EC has two types:1. global EC 2. function EC 
//3. eval EC (in mango) 

//{code file}----the first thing will be global EC formation
//'this'(variable) refers to global EC   
//in browser 'this'=window object (different server have different this value)

//JAVA SCRIPT IS SINGLE THREADED  (like interpreter)
//1* global exectution
//2* memory creation phase 
//3* execution creation phase
 
//*********EXECUTION PHASE*************/
//1. global execution --->this 
//2. memory phase: val1=undefined, val2=undefined, adad=function defination(i.e. it includes all the data included in function{total,return}) 
//rsult1=undefined,result2=undefined
//3. execution phase: val1=10,val2=5, function ka kuch nhi hoga kiuki defination already done in memory phase,
//add creates now new variable environment + execution thread(jitni baar function call hoga utni baar yeh create hoga):FURTHER HAVE TWO PHASES 2,3
//memoryphase for add(val1,val2): val1=undefined,val2=undefined, total=undefined,
//execution phase for add(val1,val2): val1=10,val2=5,total=15
//****now return total to GLOBAL EXECUTION 
//****now DELETE THE PHASE THAT WAS CREATED FOR FUNCTION CALLAND CONTINUES
let val1=10   
let val2=5
function add(num1,num2){
    let total=num1+num2
    return total
}
let resutl1=add(val1,val2)
let result2=add(4,7)
//LEARN CALL STACK