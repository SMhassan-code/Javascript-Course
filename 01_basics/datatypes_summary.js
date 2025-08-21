// There are two types of datatypes in JS:

// 1. Primitive:

// 7 types: number, string, boolean, null, undefined, symbol, bigInt

let marks = 89
let name = "Hassan"
let isLoggedIn = true
let temperature = null
let accountName;

const id = Symbol('786')
const anotherId = Symbol('786') // although both 'id' and 'anotherId' looks same but because of symbol they are unique and different from one another

// console.log(id === anotherId)

let bigNum = 524362625624245235n


// 2. Reference (non-primitive): // all reference types have typeof 'object' (IMP)

// 3 types: array, objects, functions

let movies = ["oppenheimer", "inception", "shutter island"]

// console.log(movies)

let Obj = {
    name: "Hassan",
    age: 22
}

// console.log(Obj)

const myFunction = function(addition) {
    console.log("Hello World")
}

console.log(typeof myFunction) // typeof of function is "object function"

// https://262.ecma-international.org/5.1/#sec-11.4.3 // for studying "typeof"