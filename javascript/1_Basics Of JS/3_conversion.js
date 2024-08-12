let score="33abc"
 
console.log(typeof(score))

let valinnumber =Number(score)

console.log(typeof(valinnumber))
console.log(valinnumber)

// NaN is the special type when we convert any string which include alphabet in number that is not possible
let ans =0
let bool=Boolean(ans)// empty string will also give false 
console.log(typeof bool)
console.log(bool)
   

//*************************************OPERATIONS**************************************

let str1="ranshul"
let str2="jayant"
console.log(str1+str2)
console.log(str1.charAt(2));
console.log(str1.indexOf("n"))
console.log(str1.toUpperCase())

// string + number is ==== to string
console.log(1+2+"2")
console.log("1"+2+2)