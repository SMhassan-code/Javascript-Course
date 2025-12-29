function myName () {
    console.log("H")
    console.log("A")
    console.log("S")
    console.log("S")
    console.log("A")
    console.log("N")
}

// myName()

function addTwoNumbers (num1, num2) {

    // console.log(num1 + num2)
    return num1 + num2

}

let result = addTwoNumbers(134, 234)
// console.log(`The result is: ${result}`)

function logInUserMessage (username) {

    if (!username) {
        console.log("Please enter your username")
        return
    }

    return `${username} just logged in`
}

const message = logInUserMessage("Ahmed")

console.log(message)