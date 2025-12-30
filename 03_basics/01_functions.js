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

// console.log(message)

function cartPrice (val1, val2, ...num) {
    return num
}

let getCartPrice = cartPrice(54, 200, 765, 1099)

// console.log(getCartPrice)

const newObj = {
    name: "Hassan",
    id: 210
}

function handleObjects (anyObject) {
    return `My name is ${anyObject.name} and my id is ${anyObject.id}`
}

// console.log(handleObjects(newObj))
console.log(handleObjects({
    name: "Ahmed",
    id: 234
}))

const myArr = [300, 500, 659, 784]

function returnLastValue (anyArr) {
    return anyArr[3]
}

// console.log(returnLastValue(myArr))
console.log(returnLastValue([1, 4, 7, 12]))