/*

Arrays in javascript make the shallow copies which performing the shallow operations

Shallow copy --: the copies who share the same reference point means making change in copy will also change the orignal arrays.
Deep copy --: the copies that do not share the same reference point.



*/
const ar=['hello',3,'kese','na na'];


// PUSH
ar.push(11);
// UNSHIFT -: inserted at front of the array
ar.unshift(76)
console.log(ar)
// Pop
 ar.pop()
 // SHIFT-: remove element from the front of array
 ar.shift()


console.log(ar.includes(5))//includes return boolean
ar[0]={num:4747}


const names=['aman','ranshul','arun','rahul','saksham','ramlal','aman'];
// index of and last indexof 
console.log("hello")
console.log(names.indexOf('aman'))// if any other same exist

// include
let a=names.includes('ranshul',1);
console.log(a);

// JOIN  -: convert or join the array into the string 
 
let student=['r','a','n','s','h','u','l'];
let stu=student.join()
console.log(stu);
console.log(typeof stu)

// Slice -> give the element in the range from the orignal array and will not affect the orignal array

let ar1 =[1,2,3,4,5,6]
let sli=ar1.slice(1,3)
console.log("Slice",sli)
console.log("orignal array after slice",ar1)

//splice -> it will also include the last elemnt of the range and will also change the orignal array

let spi=ar1.splice(1,3)
console.log("Splice",spi)
console.log("orignal array after splice",ar1)



/************************************************FUNCTIONS IN ARRAYS****************************************/


//                       CONCATINATION
let names2=['aman','ranshul','arun'];
let names3=['rahul','saksham','ramlal'];
//names2=names2+names3;
//let names4=names2.concat(names3);

let names5=[...names2,...names3]//spread operator
console.log(names5)


//Array of array is converted to the single array

let another =[1,2,3,[5,6],7,[9,[7,3]]]
let new_another=another.flat(Infinity)
console.log(another)
console.log(new_another)


// CONVERT INTO ARRAY FROM ANY OTHER FORM 

console.log(Array.isArray("ranshul"))
console.log(Array.isArray([1,2,3]))
console.log(Array.from("ranshul"))
console.log(Array.from({name:"ranshul"}))  // Interesting return the empty array
let score1=500
let name="ranshul"
let score2=600
console.log(Array.of(score1,name,score2))


let channels=[{
    name:'anan dattarwal',
    subs:10000,
},
{
    name:'apni kaksha',
    subs:50000,
},
{
    name:'apna college',
    subs:70000,
}]
                        // FIND IS USED FOR OBJECT

console.log(channels.find(function(elements)
{
    return elements.name=='apna college';
}))// inline function

// arrow function next
console.log(channels.find(elements =>elements.subs===10000))


//            SLICE        
console.log(names5.slice(1,3))

//   loops
for(let i=0;i<names5.length;i++)
{
   console.log(names5[i],i);
}

for(let key of names5){
    console.log(key,[key]);
}
// for-each

names5.forEach((elements,index)=>console.log(elements,index));
 


// SPLIT
console.log(student.splice('_'))

// FILTER DIFFERENT FROM FIND
let cities=[
    {name:'bengku',pop:100},
    {name:'mumbai',pop:300},
    {name:"bihar",pop:500},
    {name:"nira",pop:1000},
    {name:'hira',pop:2000},
]
console.log(cities.find(elements=>elements.pop>100));
console.log(cities.filter(elements=>elements.pop>100));

                       // MAP METHOD WILL PERFORM OPERATION TO ALL THE ELMENT OF THE ARRAY AND RETURN NEY ARRAY

console.log(cities.map(elements=>elements.pop*2))
                