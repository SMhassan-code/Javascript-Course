class User {
    constructor (username) {
        this.username = username
    }

    logMe() {
        console.log(`${this.username} is logged in`)
    }

    static createId () {
        return `123`
    }
}

console.log(User.createId())
const hassan = new User("Hassan")
// console.log(hassan.createId())

class Teacher extends User {
    constructor (username, age) {
        super(username)
        this.age = age
    }
}

const google = new Teacher(23)
// console.log(google.createId())

// IMP Note: Only classes can access static methods while its instances (objects) cannot access static methods