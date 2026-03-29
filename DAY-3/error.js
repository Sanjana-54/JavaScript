//Creating New error
const err=new Error("This is new error")
console.log(err.name)
console.log(err.message)
console.log(err.stack)
//Handling errors
/*//try is block
try{

}catch(){

}
finally{// used for final clean-up of prgm

}*/
console.log("first");
try{
    console.log(a);
}catch(err){
    console.log(err.message)
}
console.log("second")
console.log("third")