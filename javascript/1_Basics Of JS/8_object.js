/**************************************OBJECTS*******************************************/
/*
    SINGELTON --> always from constructor
    object.create
*/

// Use symbol and act it as a key in object

let mysym=Symbol("key1")

//OBJECT LITERNAL
  let animal={
    name:"girafee",
    [mysym]:"key1",   // declaration of symbol as a key value
    hp:23,
    location:"forest",
    sleep:false
}
console.log(animal)
//dot notation
console.log(animal.hp);


//bracket notation
let legnot="name"
console.log(animal[legnot]);
console.log(animal["location"])

console.log(animal[mysym])  // accesing symbol

animal.sleep=true
console.log(animal)
//Object.freeze(animal)  //object freez
animal.sleep=false
console.log(animal)

//  FUNCTIONS IN OBJECTS
animal.greeting=function(){
  console.log("hello how are you")
}
console.log(animal.greeting())
animal.greeting2= function()
{
  console.log(`hello howa are you ${this.name} ?? Are you sleeping ?? ${this.sleep}`)
}
console.log(animal.greeting2())
console.log(animal)

const cource={
    lecture:10,
    section:3,
    title:"javascript",
    notes :
    {
        introduction:"welcome to my course",
    },
    enroll()
    {
        console.log("you are enrolled in the course");
    }
}
cource.enroll()
console.log(cource)

/*****************************SINGALTON********************************/

let tinderuser=new Object()

tinderuser.id=123
tinderuser.name="ranshul"
tinderuser.status="single"
console.log(tinderuser)

const regularuser={
  id:37873,
  fullname:{
    fname:"ranshul",
    midname:"kumar",
    lname:"jayant"
  },
  status:"single",
  pri:function()
  {
    console.log(`first name is ${this.fullname.fname}`)
  }
}
console.log(regularuser.pri())


// concatination of objects
let ob1={1:'a',2:'b'}
let ob2={3:'c',4:'d'}
let ob3=Object.assign({},ob1,ob2)
console.log(ob3)

// ****************************************Destructuring of object*******************************************

let course={
  courcename:'javascript',
  price:2000,
  name:"ranshul"
}

// taking value from the object

let {courcename : corx}=course
console.log(corx)

/* Api --> apna kam kisi or ke sar daldena
  -> values will come in the json format which is javascript object notation
  -> both name and value will be in string form

   {
  "name": "ranshul",
  "section" :'D',
    }

    Api will also give values in the form of array

    [
      {}
      ,{}
      ,{}
    ]
*/ 


