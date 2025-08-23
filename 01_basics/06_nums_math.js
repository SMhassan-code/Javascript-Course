const score = 700 // simple method to use number data type
// console.log(score)

const marks = new Number(200)

// console.log(marks.toString().slice(0, 2)) // we can use toString() method to convert it into a string and ue string functions on it

// console.log(marks.toFixed(2)) // deals decimal point

const complexNum = 185.768

// console.log(complexNum.toPrecision(4)) // deals numbers and their decimal point

const salary = 10000000

// console.log(salary.toLocaleString("en-IN")) // add commas in large values

// ++++++++++++++++++ MATHS +++++++++++++++++++++++

// console.log(Math.abs(-23)) // abs function change -ve value into positive but not vice versa
// console.log(Math.round(4.8))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.8))

console.log(Math.random())
console.log((Math.random() * 10) + 1)
console.log(Math.floor(Math.random() * 10) + 1)

const min = 10
const max = 100

console.log(Math.floor(Math.random() * (max - min + 1)) + min)