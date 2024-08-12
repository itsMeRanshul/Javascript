/* Functions are the block of code that are usable multiple times in the program */

function hello()
{
    console.log("hello ranshul")
}
hello()   

function add(a,b)// when function is created and pass the value inside it are called parameters
{
    //console.log(a+b)
    return a+b
}


let res=add(5,5)//  these are called arguments
console.log(res)

function userlogin(username)
{
    if(username==undefined)
        {
            console.log("enter the user name")
        }
    else{
    return `${username} just logged in`
    }
}
 
console.log(userlogin("ranshul"))

// Shoping cart problem -> rest operator is there.

function addshoppingcart(val1,val2,...num1)
{
    return num1
}

console.log(addshoppingcart(400,200,300,600,500))
let ans = addshoppingcart(400,200,300,600,500)
console.log(ans[0])

// handling the object in function
const ob1={
    username:"ranshul",
    price:200
}
function handletheobject(ob1,arr)
{
    console.log(`${arr[0]} is the first element of array`)
    return ob1.username
}

let name1=handletheobject({
    username:"ranshul",
    price:200
},[523,23,43,56,67,7])
console.log(name1)


/* CLOSURE = The child function can access the value of the parent function 
 --->In javascript variable can hold anything 
*/

/******************************************** HOSITING **********************************************/

addone(5)// this is allowed becoz created without variable
function addone(num)
{
    return num+1
}
addone(5)

//addtwo(7)  ->> but this is not allowed becoz declared inside the variable
let addtwo=function(num)
{
    return num+2
}
addtwo(7)