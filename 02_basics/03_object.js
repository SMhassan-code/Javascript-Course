// There are two ways to create an object:
// 1. literal method (which we will use most of the time)
// 2. constructor method (which returns a singleton object)
// Object.create() --- example of contructor method

let newSymbol = Symbol("key1")

const info = {
    user: "Hassan",
    "full name": "Syed Muhammad Hassan",
    [newSymbol]: 456, // symbols are declared in square brackets in objects (very IMP)
    age: 22,
    location: "Bahawalpur",
    email: "Hassan@google.com",
    isLoogedIn: false,
    lastLoggedIn: ["Monday", "Wednesday"]
}

// console.log(info.user) // common way to access values in objects but does not work everytime like in `"full name" key`
// console.log(info["user"]) // it is a better way to access anything inside the object
// console.log(info["full name"])
// console.log(info[newSymbol])
// console.log(info["email"])

info["email"] = "Hassan786@gmail.com"
// Object.freeze(info)
info["email"] = "Hassan786@chatgpt.com"
// console.log(info["email"])

info.addition = function (x, y) {
    return x + y
    // console.log(x + y)
}

info.greeting = function () {
    console.log(`Hello JS user, ${this["full name"]}`)
    // return (`Hello JS user, ${this["full name"]}`)
}

console.log(info.addition(3, 5))
console.log(info.greeting())