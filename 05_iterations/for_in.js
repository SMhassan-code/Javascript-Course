// for in
// An important thing about for in loop is that it gives keys of object or array not their values. While for of loop give values of arrays or strings.

const myObj = {
    js: "Javascipt",
    py: "Python",
    cpp: "C++"
}

for (const key in myObj) {
    // console.log(`${myObj[key]} shortcut is ${key}`)
}

let languages = ["english", "urdu", "spanish"]

for (const key in languages) {
    console.log(key)
}

// for in loop cannot be used to iterate over a map. for...in iterates over enumerable properties of an object. Maps don't store their entries as enumerable properties. for...of loop can be used to iterate over a map.