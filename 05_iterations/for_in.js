// for of
// it is used to iterate over an array, strings or maps

let myArr = ["Pak", "Ind", "Usa"]

// for (const element of myArr) {
//     console.log(`Value is ${element}`)
// }

let username = "Syed Muhammad Hassan"

for (const char of username) {
    if (char == " ") {
        continue;
    }
    // console.log(`Each char is ${char}`)
}


const map = new Map()
map.set("id", "54ds")
map.set("email", "h@hotmail.com")
map.set("isLoggedIn", true)

// console.log(map)
// console.log(map.get("email"))

for (const [key, value] of map) {
    // console.log(`${key[0]} :- ${key[1]}`)
    // console.log(`${key} :- ${value}`)
}

const myObj = {
    username: "Ahmed",
    age: "15",
    email: "A@gmail.com"
}

// for (const key of myObj) {
//     console.log(key)
// }
// We cannot iterate an object using 'for of' loop. We have to use a different loop.