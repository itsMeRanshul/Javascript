//scope in javascript
var name="ranshul";//it always have a global scope
//window object
//localscope
function sayname(){
    var name="ranshul";
    var marks=10;
    console.log(name)
}
sayname();
//console.log(marks);

// global scope
var x=0;
function child(){
    var x=1;
    console.log(x);
    function firstchild(){
        var x=2;
        console.log(x);
    }
    firstchild();
}
child();
function secondchild(){
    console.log(x);
}
secondchild();

// block scope
{
    let x=10;
    console.log(x);
}
console.log(x);


// var keyword make any variable the global variable
if(true)
{
    var a='bar';// we can only use let keyword in the block scope
}
console.log(a);

// LEXICAL SCOPE
function dada(){
    var name="ranshul";
    function papa(){
                console.log(name);
        function beta()
        {
          var likes='coding';
        }
        beta()
    }
    papa()
}
dada()


//                      HOSITING 

    //THE MEMORY OF VARIABLE GET EXCECUTED BEFORE THE EXCECUTION OF THE CODE THIS IS CALLED HOISTING
    
sayhello();  // LEXICALLY BOUNDED 
console.log(i);
function sayhello(){
    console.log("hello");
}
var i=10;


             //  " THIS "  KEYWORD


// let counter ={
//     count:0,
//     increament:function(){
//         counter.count++;
//     }
// }
let counter=createcounter();
let counter1 =createcounter();
 function createcounter(){
    return{
        count:0,
        increament:function(){
            this.count++;// this refer the object which is calling the function
        }
    }
 }
counter1.increament();
counter1.increament();
console.log(counter1);

var count=0;
function incre(){
    this.count++;
}
incre();
incre();
console.log(count);
function Car(name){
    this.name=name;
    this.start=function(){
        console.log(this.name+ "started");
        console.log(this)
    }
}
const car1=Car("ferrrai");
//car1.start();
console.log(start());
