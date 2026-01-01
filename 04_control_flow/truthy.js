const userEmail = []

if(userEmail) {
    console.log("got user email")
}
else {
    console.log("don't have user email")
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("String is empty")
// }

const newObj = {}

if (Object.keys(newObj).length === 0) {
    console.log("object is empty")
}


// Nullish Coalescing Operator (??): null undefined

// '??': this operator is used to handle null and undefined. because in JS, it is considered bad practice if there are null and undefined in your program. So, it replaces them with a different value. In short it is used for handling null and undefined.

let val1;
// val1 = 12 ?? 34
// val1 = null ?? 34
// val1 = undefined ?? 34
val1 = undefined ?? 34 ?? 50

console.log(val1)

// Terniary Operator: ?

// condition ? true : false
// this is the short hand technique for writing if and else

let games = ["elden ring", "hollow knight"];

// (games.includes("hollow knight") ? console.log("great choice") : console.log("play it !!"))

console.log(games.includes("hollow knight") ? "great choice" : "play it !!")

// both methods are same