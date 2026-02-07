class User {
    constructor (email, password) {
        this._email = email
        this._password = password
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email (value) {
        this._email = value
    }

    get password () {
        return this._password.toUpperCase()
    }

    set password (value) {
        this._password = value
    }

    // The underscore is a naming convention that signals "this is a private/internal property" and creates a distinct property name to store the actual data while your getter/setter provides controlled access to it.
}

const hassan = new User("h@hassan.com", "652av")

console.log(hassan.email)
console.log(hassan.password)