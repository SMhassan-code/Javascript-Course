// class User {
//     constructor (username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword () {
//         return `${this.password}xyz`
//     }

//     capitalUsername () {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const coffee = new User("coffee", "coffee@class.com", "123")

// console.log(coffee.encryptPassword())
// console.log(coffee.capitalUsername())


// // behind the scenes

// function user (username, email, password) {
//     this.username = username
//     this.email = email
//     this.password = password
// }

// user.prototype.encryptPassword = function () {
//     return `${this.password}xyz`
// }
// user.prototype.capitalUsername = function () {
//     return `${this.username.toUpperCase()}`
// }

// const tea = new user("tea", "tea@tea.com", "234")

// console.log(tea.encryptPassword())
// console.log(tea.capitalUsername())



class bankAccount {
    constructor (username, balance) {
        this.username = username
        this.balance = balance
    }

    deposit (amount1) {
        this.balance = this.balance + amount1
        console.log(`${amount1}$ has been deposited`)
    }

    withdraw (amount2) {
        if (this.balance >= amount2) {
            this.balance = this.balance - amount2
            console.log(`${amount2}$ has been withdrawn`)
        }
        else {
            console.log("Insufficient balance")
        }
    }

    getBalance () {
        return `Total balance is ${this.balance}$`
    }
}

const user1 = new bankAccount("Hassan", 400)

user1.deposit(100)
user1.withdraw(200)
console.log(user1.getBalance())