//Advanced array operations

let testData=[90,45,-12,68,73]
//Filter:Modification can't be done,only for selection
   //get elements greater than 30
   let result=[]

   for(let element of testData){
    if(element>30){
        result.push(element)
    }
   }

   let r=testData.filter((element)=>element>30);//arrow automatically has re
  console.log(r);

  //get element between 40 and 80
  let r1=testData.filter((element)=>element>40 && element<80);
  console.log(r1)

  //map:Modify;don't use for selection; 2nd parameter can be index
  //add 10 for each ele
  let r3=testData.map(element=>element+10)
  console.log(r3)

  //add 10 for the elements >50 and subtract 20 from ele>50
   const r4=testData.map(element=>{
    if(element>50){
      return(element+10)
   }
   else{
    return (element-20)
   }
   })
console.log(r4)

//Reduce 
//find sum of elements  -stores value of 
const sum=testData.reduce((accumulator,element)=>accumulator+element)
//                              90        45            135
//                             135        -12           123
//                             123         68           
//console.log(sum)
//find small ele
const small=testData.reduce((acc,element)=>acc<element?acc:element)
console.log(small)
    
//find big
const big=testData.reduce((accumulator,element)=>accumulator>element?accumulator:element)
console.log(big)

//find
//search 25
let el=testData.find(element=>element===90)
console.log(el)
let el1=testData.findIndex(element=>element===25)
console.log(el1)
//sort
let data=[9,10,8,4] //can't be used for 10,123
let newArray=data.sort((a,b)=>a-b) //b-a
console.log("New array is",newArray)
console.log("Data is",data)
//toSorted
let data1=[9,10,8,4] //can't be used for 10,123
let newArray1=data.toSorted((a,b)=>a-b) //b-a
console.log("New array is",newArray1)
console.log("Data is",data1)

//reverse

