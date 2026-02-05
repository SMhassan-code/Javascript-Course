function setUsername (username) {
    // complex DB calls
    this.username = username
    console.log("Called")
}

function createUser (username, email, password) {
    setUsername.call(this, username)

    this.email = email
    this.password = password
}

const hassan = new createUser("Hassan", "hassan@fb.com", 352)
console.log(hassan)