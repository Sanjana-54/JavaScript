//Number
let a=10,b=20,c=30;
console.log("a is",a,",b is",b,"and c is",c);//with double quotes and commas,this is similar to printf in c and System.out.println in java 
console.log(`a is ${a}, b is ${b} and c is ${c}`);//syntax with back tick
//string
let username='Sanjana';
console.log(`Username is ${username}`);
//boolean
let status=true;
console.log(status);
//array{Group of elements}
let marks=[20,19.5,'Hello'];// You can use heterogenious elements in the array
console.log(marks);
//object{Group of properties}
let person={
    id:101,//property
    name:'Sanjana'//property
}
console.log(person);

//const y=10
// y=50
//console.log(y)

//dynamicallly typed programming language
let x;
console.log(typeof x);//undefined
x=10;
console.log(typeof x);//number
x='string';
console.log(typeof x);//string
x=true;
console.log(typeof x);//boolean
x=[10,20];
console.log(typeof x);//object
x={
    b:'DS',
    c:3
}
console.log(typeof x);//object
let p=123
let q="123"
console.log(typeof p);//number
console.log(typeof q);//string
console.log(p==q);//true 
console.log(p===q);// === is strict equal which checks data types also 