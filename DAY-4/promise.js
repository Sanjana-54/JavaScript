//PROMISE
//call in 5 mins
  //pending
                //fullfiled or rejected
//PROMISE PRODUCER(create promise)

/*console.log("frnd is waiting for a call in 5 secs")
let futureCondition=true;


const promObj=new Promise((fulfilled,rejected)=>{

    setTimeout(()=>{
        if(futureCondition===true){
            fulfilled("promise fulfilled")
        }
        else{
       rejected("busy....call you later")
        }
    },5000);
    );
}
//PROMISE CONSUMER
promObj
.then((msg)=>{console.log("msg in then:",msg)})
.catch((errormsg)=>{console.log})

//I will send 10k tomorrow
//10 secs delay
/*console.log("should send 10k to frnd")
let futureCondition=true;


const promObj=new Promise((fulfilled,rejected)=>{
    setTimeout(()=>{
  if futureCondition===true
},3000);
}*/
       