// Arrays

const myArr = [1, 2, 3, 4, 5, 6]
const games = ["outer wilds", "hollow knight"]

// console.log(myArr[1])

// Array methods

// myArr.push(81)
// myArr.pop()

// myArr.unshift(11) // avoid using unshift cuz it adds value in the start
// myArr.shift() // same thing as unshift

// console.log(myArr.includes(4))
// console.log(myArr.indexOf(6))

const newArr = myArr.join() // join method converts the array into string and display them as comma seperated values

// console.log(myArr)
// console.log(newArr)

// slice and splice method

console.log("A: ", myArr)

updatedArr = myArr.slice(1, 4)

console.log(updatedArr)
console.log("B: ", myArr)

updatedArr2 = myArr.splice(1, 4)

console.log(updatedArr2)
console.log("C: ", myArr)

// the main difference between slice and splice is:

// 1. slice does not include the range value while splice does
// 2. slice does not change the original array while splice change the original array