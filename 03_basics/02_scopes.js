let x = 20
const y = 40
var z = 60

if (x, y, z < 100) {
    let x = 100
    const y = 200
    // var z = 300 // z = 300 results in  the same problem
}

// console.log(x)
// console.log(y)
// console.log(z)

function one () {
    let username = "Hassan"

    function two () {
        let website = "google"
        console.log(username)
    }

    two()

    // console.log(website)
}

// one()

if (!false) {
    const username = "Ali"

    if (username === "Ali") {
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website)
}

// console.log(username)

// ++++++++++++++++++ interesting +++++++++++++++++++


console.log(addTwo(20))

function addTwo (num) {
    return num + 2
}

// console.log(multiplyTen(2)) it is showing an error because the function is held by a variable. is is declared in a different way

const multiplyTen = function (num) {
    return num * 10
}

multiplyTen(2)