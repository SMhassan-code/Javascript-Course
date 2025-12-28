// const gitUser = new Object() // this creates a singeton object
const gitUser = {} // this creates a non singleton object

gitUser.id = "567dvf"
gitUser.name = "Robert"
gitUser.email = "r@gmail.com"

// console.log(gitUser)

const user23 = {
    fullname: {
        userfullname: {
            firstname: "Hassan",
            lastname: "Muhammad"
        }
    }
}

// console.log(user23.fullname.userfullname.lastname)

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}
const obj3 = {
    5: "a",
    6: "b"
}

// let allObjects = Object.assign({}, obj1, obj2, obj3)
let allObjects = {...obj1, ...obj2, ...obj3}

// console.log(allObjects)

const users = [
    {
        id: 1,
        name: "Hassan"
    },
    {
        id: 1,
        name: "Hassan"
    },
    {
        id: 1,
        name: "Hassan"
    }
]

// console.log(users[1].id)

console.log(Object.keys(gitUser))
console.log(Object.values(gitUser))
console.log(Object.entries(gitUser))

console.log(gitUser.hasOwnProperty("email"))