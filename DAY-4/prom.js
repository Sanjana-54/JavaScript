//Examples of Promises
     //make API request:API cnnects the applications
     //TNDF:
     //JS obj notation 
fetch('https://jsonplaceholder.typicode.com/posts')
//.then(res=>console.log("res is",res))
.then(res=>res.json())
.then(postsData=>console.log(postsData))
.catch(err=>console.log("error is ",err))
    
