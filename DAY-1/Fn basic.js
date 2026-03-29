//Function Declaration

function findSum(a,b){
    let sum=a+b
    return sum;
}
console.log(findSum(2,123))//125 FN CALL
console.log(findSum(2,"123"))//2123

//Function Expression
           //with a function name
let test=function find(a,b){ //in js a fucntion can be stored in a variable 
    let sum=a+b
    return sum
}
//no function name 
 let t=function (a,b){
    let sum=a+b
     return sum
 }
console.log(test(40,50))
console.log(t(8,17))

//function can be called before declaration/avoid this method;only for fn declarations

//Arrow function is used to simplify the function expression
let Sum=(a,b)=>a+b
console.log(Sum(2,3))

//FUNCTIONS ARE FIRST CLASS OBJECTS
/* A fn can
 *store variable
 *can return another fn
 *can return a fn as arg
 */
let test1=function(){
    return function() //no name (anonymous)
{
    return 100
}}
let result=test1()
console.log(result()) //returns 100

