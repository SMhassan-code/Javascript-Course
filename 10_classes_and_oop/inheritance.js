class User {
    constructor (username) {
        this.username = username
    }

    logMe() {
        console.log(`${this.username} is logged in`)
    }
}

class Teacher extends User {
    constructor (username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse () {
        console.log(`${this.username} has added a course`)
    }
}

const coffee = new Teacher("Hassan", "hassan@fb.com", "626xc")
const tea = new User("Ahmed")

coffee.logMe()
tea.logMe()

console.log(coffee instanceof User)