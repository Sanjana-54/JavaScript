//Collections(pack of data)
//Array-homogeneous
//Objects

//array-ordered
let marks=[100,95,25]//marks 
//Iterator (for-of loop)
for(let v of marks){
  //  console.log(v)
}
//object-unordered collection
let student={  //student is reference to obj
    sno:100,
    name:`kiran`,
    age:19,
    course:`B.Tech`
}
//console.log(student.name)
//console.log(student.city) //undefined
//iterator for Object(for-in loop)
for(let v in student){
    //console.log(v)
    //console.log(student[v])
   // console.log(v,student[v]) 
}

//Array of objects

let emp=[
    {eno: 1, name: `bhanu`},
    {eno: 2, name: `vikas`},
    {eno: 3, name: `arun`},
];

for(let v of emp){
    console.log(`eno is ${v.eno} and emp name is ${v.name} `)
}

let student1={
    rollNo : 1,
    firstname: `ravi`,
    lastname : `kiran`,
    marks1 : [90,95,75],
    address:{
        city: `hyd`,
        pincode:8888,
    },
    getFullName:function(){
    return this.firstname+this.lastname
},
averagemarks:function(){
    let sum=0
    for(let i=0;i<this.marks1.length;i++){
        sum=sum+this.marks1[i]
    }
    avg=sum/(this.marks1.length)
    return avg

}};

console.log(student1.getFullName())
console.log(student1.averagemarks())

/*Basic Operations on Array
read elements
-->insert new eles


*/
//Dynamic Insertion
    let test=[10,20,30]
               //start
    test.push(40,50,60)
    console.log(test)
             //end
    test.unshift(1)
    console.log(test)
            //in between
    test.splice(2,0,25)
    console.log(test)

//Dynmaic deletion
             //start
    test.removedElement=test.shift()
    console.log(test)
             //end
     test.pop()
     console.log(test)
     //in between(index based)
     test.splice(2,1)
     console.log(test)

//Dynamic Updation
test.splice(2,1,23)
console.log(test)

