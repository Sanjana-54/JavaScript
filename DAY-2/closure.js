//fn inside another fn
let createGame=function(name){
    return function(level){//used to craete diff levels for same name
     console.log(`Hello ${name}.You are at level ${level}`)
    }
}    
let createLevel=createGame('ravi')
createLevel(1)

//fn can be sent as arg
//callback fn is a fn that is passed as an arg to another fn
let test=function(a){
    console.log(a())
}
//makePayment called by application
let makePayment=function(amt,paymentType){
    console.log(`payment of ${amt} started`)
    paymentType()

   
}
let UPIPayment=function(){ //call back fn UPIPayment
    console.log(`UPI done`)

}
let CardPayment=function(){
    console.log(`Card done`)

}
makePayment(1500,UPIPayment)
makePayment(1500,CardPayment)

//closure exists when 1 fn returns another fn

let sum=function(x){
    return function(y){
        return x+y
    }
}

let r=sum(10)
console.log(r(20))