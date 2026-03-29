let o={a:100};

//spread oprator(create copies of arr & objs)
//create copy
/*let orgObj={a:10}
let copyObj={...orgObj}
orgObj.a=123
console*/
//deep copy:when obj has nested objs
let p={
    name:"ram",
    addr:{
        city:"hyd",
        code:200
    }
}
console.log(p)
let copy=structuredClone(p)
//let copy={...p} shallow copy
copy.name='ravi'
copy.addr.city="chennai"
console.log(copy)
//ADD ELEMENTS/PROPERRTIES WHILE COPYING
let a=[1,2,3]
let ca=[...a,10]
//MERGE
let b=[10,20]
let c=[30,40]
let merge=[...b,...c]
console.log(merge)