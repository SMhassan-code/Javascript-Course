const myObj = {
    username: "Hassan",
    id: 353,

    website: function () {
        console.log(`${this.username} is using the website`);
        console.log(this)
    }
}

// myObj.website()
// myObj.username = "Uzair"
// myObj.website()

// console.log(this) // displays empty brackets while it shows 'window' object in browser (DOM)

function one () {
    let month = 12
    console.log(this)
    console.log(this.month)
}

// one()

const two = function () {
    let month = 11
    console.log(this)
    console.log(this.month)
}

// two()

const three = () => {
    let month = 11
    console.log(this)
    console.log(this.month)
}

// three() // 'this' keyword in the given arrow function is not working because 'this' is inheriting its bindings from its surroundings (global scope). That's why the it results in {} (empty brackets). 'this' is from outer scope.

// const arrow = (val1, val2) => {
//     return val1 * val2
// }

// const arrow = (val1, val2) => val1 * val2

// const arrow = (val1, val2) => (val1 * val2)

const arrow = (val1, val2) => ({username: "Alia"})


console.log(arrow(3, 5))