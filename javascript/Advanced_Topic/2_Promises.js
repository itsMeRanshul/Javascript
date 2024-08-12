/* 
       *****PROMISES*****

       --> PROMISES represent the eventual completion(or failure) of an asynchronous operation .

      -->  line mai lg gya hai pr abhi execute mhi hoga
       
       --> Promises will complete in future . Example -: file read, getting info from the database

      --> There are three states in promises --:

       1. Pending 
       2. Fulfiled 
       3. Rejected 

       --> In maximum operation we only consume the promises .

       ----> Response -- then() -- Resolve() is used to connect the resolve to then() for promise completion
       ----> Error -- catch()
       ----> finally() always runs.

*/

// Creation of Promises
 const promiseone = new Promise(function(resolve,reject){

       // Do an Async task
       // DB related , cryptography , network
      setTimeout(() => {
       console.log('Async Task is completed')
       resolve()// connect the promise to .then() method
      }, 1000);
 })

 promiseone.then(function(){
       console.log('Promise completed')
 })


 // ANOTHER METHOD OF WRITTING THE PROMISES
 new Promise(function(resolve,reject){
       setTimeout(function(){
              console.log('Async Task 2 is completed ')
              resolve()
       },2000)
 }).then(function(){
       console.log('Promise 2 is completed')
 })

 // Data consuption 

new Promise(function(resolve,reject){
       setTimeout(function(){
              resolve({username : 'Ranshul', Email:'ranshulkumarjayant@gmail.com'}) // Can pass any type of data ins resolve lie array, object
       },2000)
}).then(function(user){
       console.log(user)
})

// error handling
new Promise(function(resolve,reject){
       setTimeout(function(){
              let error =false
              if(!error){
                     resolve({username:'Ranshul Kumar Jayant', password:'123456789'})
              }else{
                     reject('ERROR : Something went wrong')
              }
              
       },2000)
}).then(function(user){
       console.log(user)
       return user.username
}).then((username)=>{
       console.log(username)
}).catch(function(error){
       console.log(error)
}).finally(() => console.log('Finally Promise has been completed or rejected'))

//Handling Error using await

const promiseFive=new Promise(function(resolve,reject){
       setTimeout(function(){
              let error=true
       
       if(!error){
              resolve('The task has been executed')
       }else{
              reject('ERROR : SOMETHING ')
       }
       },2000)
})

async function consumePromise(){
       try{
       const ans =await promiseFive
       console.log(ans)
       }
       catch(error){
              console.log(error)
       }
}
consumePromise()

// Fetch data from the api

// async function pro(){
//        try{
//        const resposne= await fetch('https://api.github.com/users/itsMeRanshul')
//        //console.log(resposne)
//        const data= await resposne.json()
//        console.log(data)
//        }
//        catch(error){
//               console.log('E :',error)
//        }
// }

// pro()

fetch('https://api.github.com/users/itsMeRanshul').then((resolve)=>{
       return resolve.json()
}).then((data)=>{
       console.log(data)
       return data.followers
}).then((user)=>{
       console.log(user)
}).catch((error)=>{
       console.log(error)
})