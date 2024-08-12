let num =[1,2,3,4,5,6,7,8,9,10]

 /*
            --> Filter are used to take the specific property from array
            --> Filter also take the call back function like ForEach
            --> Filter will return the value directly where as for each will not return it directly
            --> Only work for the contitional statement and checking purpose
 */

//let ans = num.filter((num)=> num>4)
let ans =num.filter((num) => {
    return num>4
})
console.log(ans)

//    using Foreach for returning
let newNum=[]
num.forEach((num)=>{
    if(num<5)
        {
            newNum.push(num)
        }
})
console.log(newNum)

//                                          Operations By Filter 
const ar=[
    {
        name:"tarak mehta",
        height:'172'  ,
        mass: '77'  ,
        eye_color:'brown'  ,
        gender:'male',
    }
    ,
    {
        name:"jehtalal",
        height:'145',
        mass:'136',
        eye_color:'black',
        gender:'male',
    },
    {
        name:"babita ji",
        height:'150',
        mass:'49',
        eye_color:'grey',
        gender:'female',
    },
    {
        name:"krishnan iyer",
        height:'168',
        mass:'84',
        eye_color:'black',
        gender:'male',
    }
]

const hei=ar.filter((item)=> item.height>140)
console.log(hei)

const Gender=ar.filter((item)=> item.gender==="male" && item.mass>80)
console.log(Gender)

  /*

      ************MAP***********

          -->> MAP is used to perform the same operation to all the elemnt of array
  
  */

const num1=[1,2,3,4,5,6,7,8,9,10]

// Multiply all element by 10

const newnum1=num1.map((item)=> item*10)
console.log(newnum1)

// using foreach
const newfor=[]
num1.forEach((item)=>{
    newfor.push(item*10)
})
console.log(newfor)

// ************************ CHAINING ********************Using more than one method at the same time

const ans1=num1.filter((item)=> item >4).map((item)=> item*100).filter((item)=> item<800)
console.log(ans1)

/*
      *****************REDUCE*****************

         -->previous value || current value will be there 
         -->At first we have to initialize the previous value with the initial value of our choice 

*/

const newred=[1,2,3]
const ans2=newred.reduce((pre,curr)=>{
    console.log(`previous value --> ${pre} and current value --> ${curr}`)
    return pre+curr
},10)
console.log(ans2)

const shoppingcart=[
    {
        course:'Cs cource',
        price :2000
    },
    {
        course:'Ec cource',
        price :4000
    },
    {
        course:'ML cource',
        price :1599
    },
    {
        course:'AI cource',
        price :9999
    }
]

// const totalprice=shoppingcart.reduce((pre,curr) => {
//     console.log(`previous value --> ${pre} and current value --> ${curr.price}`)
//     return pre+curr.price
// },0)
const totalprice=shoppingcart.reduce((pre,curr) => pre+curr.price,0)
console.log(totalprice)