let string1="hello how are you";
let string2=" ! I am fine and you";
string2=string1+string2
console.log(string2)

/*  so we use the modern way of string writing using backticks */
let name="ranshul"
let roll=53
console.log(`My name is ${name} and my roll number is ${roll}`)//STRING INTUPULATION

const str=new String("ranshulkumar")
console.log(str.charAt(5))
console.log(str.toUpperCase())
console.log(str.substring(5,10))

let num='123';
num=Number(num);
console.log(num);
let b=typeof num
console.log(b)
num=num.toString()
console.log(num);
let a=typeof num
console.log(a);
//templete litrals
let f=`${string2} your score is ${num}`
console.log(f);


//  INBUILT FUNCTIONS
var favshow="avengers endgame";
var hello=" beat game of throne";
console.log(favshow.length)
console.log(favshow[5])
console.log(favshow.indexOf("end"));
console.log(favshow.slice(6,9))// can give the negative values
console.log(favshow.toUpperCase())
console.log(favshow.concat(hello))

let newstr="    ranshul      "
console.log(newstr)
console.log(newstr.trim())
console.log(newstr.trimEnd())

const url="https://ranshulkumar/ranshul%20annnny"
console.log(url.replace("%20"," "))
