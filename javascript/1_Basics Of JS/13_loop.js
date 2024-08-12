//for...In loop --> this is used to iterate through the object

// object
let animal={
    name:"tiger",
    leg:4
};
for(let key in animal)
{
    console.log(key,animal[key]);
}

const myob ={
    name:"ranshul",
    class:12,
    roll:53,
    school:"The sapience school"
}
for(let key in myob){
    console.log(`${key} is the key of ${myob[key]}`)
}

//arrays
let names=["ranshul","sneha","avni","puchu"]
for(let index in names)
{
     console.log(index,names[index])
}

//for...off loop in arrays -->> array specific loop
for(let direct of names)
{
    console.log(direct);
}

let arob=[{name:"ranshul",rollno:52},{company:"delloite",salary:45},{sec:"D"}]

for(let itr of arob){
    if(itr.name || itr.rollno){
        console.log(itr.name)
        console.log(itr.rollno)
    }
    else if(itr.company || itr.salary){
        console.log(itr.company)
        console.log(itr.salary)
    }
    else{
        console.log(itr.sec)
    }
}

/*
   ***********Object are not iteratable through for of loop
const myob ={
    name:"ranshul",
    class:12,
    roll:53,
    school:"The sapience school"
}
for(const [itr,value] of myob){
    console.log(itr,value)
}
*/

//WHILE LOOP
let i=0
while(i<10){
    console.log(i)
    i++
}

// MAPS --> ALL unique values will be there 
const map=new Map()
map.set('IN','India')
map.set('USA',"United States of America")
map.set('UK',"United Kingdom")

console.log(map)
for(let [key,value] of map){
    console.log(key+"-->"+value)
}

/*For each loop --> for array high order function (Callback function is used --> donot have the name of the function)*/

let ar1=["c","c++","java","rust","python",'javascript']
ar1.forEach( function (item){
    console.log(item)
})

//WHAT CAN FOR EACH RETURN

ar1.forEach((item,index,arryList)=>{
    console.log(item,index,arryList)
})

// Using Arrow function 
ar1.forEach((item)=>{
    console.log(item)
})

//using reference of new function

function print(name)
{
    console.log(name)
}

ar1.forEach(print)

// using foreach in array of object

let ob1=[
    {
        language:"javascript",
        speed:500   
    },
    {
        language:"c++",
        speed:1000
    },
    {
        language:"c",
        speed:2000
    }
]
ob1.forEach((item)=>{
    console.log(item.language,item.speed)
})

// for each loop will not return anything like this method

const val=ar1.forEach((item)=>{
    return item
})
console.log(val) // Give undefined

