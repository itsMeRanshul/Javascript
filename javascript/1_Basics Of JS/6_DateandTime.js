//Date

let mydate=new Date()
console.log(mydate)
console.log(mydate.toDateString())
console.log(mydate.toString())
console.log(mydate.toLocaleString())

// let mynewdate=new Date(2023,7,15)
let mynewdate=new Date("01-11-2024")
console.log(mynewdate.toDateString())

let mytimestamp=Date.now()
console.log(mytimestamp)
console.log(mynewdate.getTime())

//converting mili second value in second

console.log(Math.floor(Date.now()/1000))

console.log(mydate.getDate())
console.log(mydate.getDay())
console.log(mydate.getFullYear())
console.log(mydate.getHours())

console.log(`Todays date is ${mydate.getDate()} and month is ${mydate.getMonth()+1} and year is ${mydate.getFullYear()}`)