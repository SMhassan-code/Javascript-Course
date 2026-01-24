// const promiseOne = new Promise(function (resolve, reject) {
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(() => {
//         console.log("Resolved")
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function () {
//     console.log("Promise consumed")
// })

// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("My name is Hassan")
//         resolve()
//     })
// }).then(function () {
//     console.log("Promise is resolved")
// })

// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function() {
//         let error = false
//         if (!error) {
//         resolve({username: "Hassan", email: "hassan@chai.com"})
//         }
//         else {
//         reject("ERROR: Something went wrong")
//         }
//     })
// })

// promiseThree
// .then((user) => {
//     console.log(user)
//     return user.email
// }).then((email) => {
//     console.log(email)
// }).catch((error) => {
//     console.log(error)
// }).finally(() => console.log("The promise is either resolved or rejected"))

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function() {
        let error = false
        if (!error) {
        resolve({username: "Hassan", email: "hassan@chai.com"})
        }
        else {
        reject("ERROR: Something went wrong")
        }
    }, 1000)
})

async function consumePromiseFour() {
    try {
        const response = await promiseFour
        console.log(response.email)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFour()

// async function getGithubApi() {
//     try {
//         const response = await fetch('https://api.github.com/users/SMhassan')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(`Error: ${error}`)
//     }
// }

// getGithubApi()

fetch('https://api.github.com/users/SMhassan')
.then((response) => response.json())
.then((data) => console.log(data.id))
.catch((error) => console.log(error))