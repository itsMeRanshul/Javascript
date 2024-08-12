"use strict";  // means that the full js code will be treated as the newer version of js 
const accountid=1234
let accemail="ranshulkumar@gmail.com"
var accpass="124333333333"
let acccity="jaipur"

// DATA TYPES
/*
1. Number 
2. String
3. float
4. boolean
5. bigint 
6. Null  => standalone value
7. undefined 
8. symbol => uniqueness
9. object
*/
let name="ranshul"
console.log(typeof name)
console.log(typeof undefined) // undefined 
console.log(typeof null)  //object


// MEMORY
/*
STACK(Primitive)
HEAP(Non primitive)
*/ 
let myname="ranshul"
let anoname=myname// copy has been given
anoname="sneha"
console.log(anoname)
console.log(myname)

//object creation
let user={
    name:"ranshul",
    rollno:52
}
//object is created in heap and the refernce is stored in stack which points to the object in heap
let user2=user// orignal value pointed so change in any is change in both
console.log(user)
console.log(user2)
user2.name="sneha"
console.log(user)
console.log(user2)

