const num=100
console.log(num)
let score=new Number(200.578)
console.log(score)
let ans=score.toString()
console.log(typeof ans)
console.log(typeof score)
console.log(score.toFixed(5))// how many values uses after the point 

console.log(score.toPrecision(4))  // focus on only those number of digit which is written

let newnum=100000
console.log(newnum.toLocaleString())//comas according to the US standard



//**************************************MATHS LIBRARY****************************************

console.log(Math.abs(-4))
console.log(Math.round(5.5))
console.log(Math.ceil(5.1))
console.log(Math.floor(4.9))
console.log(Math.sqrt(25))


console.log(Math.min(25,45,62,2,4,5,973))
console.log(Math.max(25,45,62,2,4,5,973))
console.log("RANDOM")
console.log((Math.random().toFixed(1)*10)+1)
console.log(Math.random()*100)
console.log(Math.random()*1000)

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)