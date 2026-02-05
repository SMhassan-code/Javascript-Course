const user = {
    username: "Hassan",
    age: "17",
    isLoggedIn: true,

    getUserDetails: function () {
        // console.log("Got user details from database")
        // console.log(`Username: ${this.username}`)
        console.log(this)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

function userData (username, age, isLoggedIn) {
    this.username = username
    this.age = age
    this.isLoggedIn = isLoggedIn

    this.greetings = function () {
        console.log(`Hello ${this.username}`)
    }

    return this // we do not have to return 'this' because it is returned automatically. I am writing it to understand better.
}

const userOne = new userData("Hassan", 17, true)
const userTwo = new userData("Ahmed", 18, false)
console.log(userOne.constructor)

// The 'new' keyword gives a new instance (copy) of data. This instance is an empty object and values are injected in it. From above, the value of 'this' is injected in contructor function 'new'.