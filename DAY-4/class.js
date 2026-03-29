  //CLASS:
//methods are not part of obj
//objs have instance variables but not static variables & methods.
//we can create objs without clsess
//obj literals
/*const test={
    a:10,
    getData:function(){

    }
}*/
//let person={} obj
//Create 20 student objs
class Student{
    //properties
    sno;  // # is used to make the variable private
    name;
    email;
//constructor:executes automatically when obj is created;constructor initliazes objs
constructor(sno,name,email) {
  this.sno=sno;
    this.name=name;
    this.email=email;
}
//methods
getStudentName(){
    return this.name;
}
} 

//CREATE Objs

let std1=new Student(10,`khushi`,`khushi@mail.com`);
let std2=new Student(15,`pavan`,`pavan@mail.com`);

console.log(std1.name);
console.log(std2.sno);


class Employee{
    #eno;
    #name;
    static test=100;
    constructor(eno,name){
        this.#eno=eno;
        this.#name=this.#name;
    }
    //instance method
    getData(){
        console.log(`eno is ${this.#eno} and name is ${this.#name}`)
    }
    //static method
    static testMethod(){
           return this.test;
    }
    
}
const emp=new Employee(100,`akhil`)
console.log(emp.eno)

//Student is a Person(inheritance)
//class Person
