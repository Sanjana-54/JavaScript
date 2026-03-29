//DESTRUCTURING(unpacking)
let arr=[1,2,3]
let [a,b,c]=arr
console.log(a,b,c)


let e={
    eid:100,
    comp:"tcs",
    addr:{
        city:"hyd"
    }
}

let{eid,comp,addr:{city}}=e;
console.log(eid,comp,city)