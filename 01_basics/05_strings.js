let name = "Hassan"
let age = 16

// console.log(name + age) // do not combine 2 strings like this (not recommended)

// console.log(`My name is ${name} and my age is ${age}`) // use this method instead. It is called string interpolation

const gameName = new String("S_M_hassan")

// console.log(gameName[0])
// console.log(gameName.__proto__) // this includes all the function that can be used on string in the form of object

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.toLowerCase())
// console.log(gameName.charAt(7))
// console.log(gameName.indexOf("a"))

console.log(gameName.substring(2, 8)) // we cannot use -ve values in substring
console.log(gameName.slice(2, 7)) // in slice, we can also use negative values

const newString = "    Hassan    "

// console.log(newString.trim())

const url = "https://google.com/Syed%20Hassan"
const updatedUrl = url.replace("%20", "-")

// console.log(updatedUrl)

// console.log(gameName.includes("hassan"))

console.log(gameName.split("_")) // this splits the string in an array based on what we will give