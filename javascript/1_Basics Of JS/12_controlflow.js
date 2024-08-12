/* Control flow defined as controling the flow of execution of program on the conditional basis.
                                     IF || ELSE  
                                     
<,>,<=,>=,==,!=,===(also do the type checking )
*/

if(2==="2"){
    console.log("executed")
}

//scope
const score=200
if(score>100){
    let power =10
    console.log(power)
}
else{
    console.log("Not")
}

const bal=1000
if(bal>500) console.log("test"),console.log("test2");

// NESTING 
const balance =1000
if(bal<500){
    console.log("less")
}else if(bal>7750){
    console.log("greater")
}else{
    console.log(balance)
}

//Logical Operator

const userloggedIn=true
const userGmail=false
const debitcard=true
const loggedinNumber=false

if(userloggedIn && debitcard)
    {
        console.log("allow to buy")
    }
if(userGmail || loggedinNumber && debitcard)
    {
        console.log("allow to buy")
    }


// Switch case

let key=2
switch(key)
{
    case 1:
        console.log("monday")
        break;
    case 2:
        console.log("tuesday")
        break
}

/*******************************************TRUTHY AND FALSY VALUES*********************************************/
let email="ranshul"
if(email){
    console.log("got the email")
}
else{
    console.log("email not found")
}

/* 
     Falsy values
          false,0,-0,BigInt 0n,"",null,undefined,NaN
    Truthy values
          true,1,>1,"0",'False'," ",[],{},function(){}
*/

let ar=[]
if(ar.length==0){
    console.log("Empty array")
}

let ob1={}
if(Object.keys(ob1).length==0){
    console.log("Empty object")
}

//Nullish Coaleseing Operator (??): Null || Undefined 

let val1
//val1=5??10
// val1=null??10
// val1=undefined??50
// val1=null??undefined
console.log(val1)

//Terniary Operator
let ter=3<5?10:40
console.log(ter)