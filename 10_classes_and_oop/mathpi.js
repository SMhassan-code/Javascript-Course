// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor)

const game = {
    name: "Elden Ring",
    price: 500,
    isAvailable: true,

    PurchaseGame: function () {
        console.log("Game cannot be purchased")
    }
}


const changeObj = Object.defineProperty(game, "name", {
    // writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(game, "name"))

for (const [key, value] of Object.entries(game)) {
    if (typeof value !== "function") {
        console.log(`${key}: ${value}`)
    }
}