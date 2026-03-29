//rest parameter

/*function findsum(b,..a){
    console.log(a,b){

    }

}*/
/*function sum(b,...a){
       //return(a,b)
       console.log(a,b)
       return sum=a+b
}
console.log(sum(10,20,30,40))*/

//write a fn that receives any no of args and return thir sum
const findSum=(...numbers)=>{
 return numbers.reduce((sum,ele)=>sum+ele)
}

let r=findSum(10,20,30)
console.log(r)
