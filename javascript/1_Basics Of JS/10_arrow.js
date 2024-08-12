// THIS keyword point to the value of the current object
const user={
    username:"ranshul",
    price:800,
    welcome:function()
    {
        console.log(`${this.username} ,welcome to our page`)
        console.log(this)// point to the current object only
    }
}
user.welcome()

console.log(this)// in node environment it point toward the empty object

/* IMPORTANT --->> INSIDE THE BROWSER THE GLOBAL OBJECT IS THE WINDOW AND INSIDE ENGINE IT WILL BE AN EMPTY OBJECT 
    -->> THIS WILL ONLY WORK INSIDE THE OBJECT ONLY
*/

/*************************************** ARROW FUNCTION ********************************************/
// let chai=function()
// {
//     username="ranshul"
//     //console.log(this)
//     console.log(this.username)
// }
// chai()

let chai=() => {
    username="ranshul"
    //console.log(this)
    console.log(this.username)// This not working 
}
chai()

// Basic Arrow function
const addtwo=(num1,num2) => {
    console.log(num1+num2)
}
addtwo(5,10)

//--> Implicit return 
const addthree=(n1,n2,n3)=> n1+n2+n3
//const addthree=(n1,n2,n3)=> (n1+n2+n3)

console.log(addthree(3,4,5))

//OBJECT RETURN

const ob1= ()=> ({username:"ranshul",price:20})
console.log(ob1())

// Immediately Invoked Function Expressions ( IIFE ) --> used to write a function that should immediately get excecuted
// for database connection and not poluted through the global scope so we create our own scope

//()()

// (function bun(){
//     console.log('DB connected');
// })();

// ((name) => {
//     console.log('DB connected');
// })("ranshul")
