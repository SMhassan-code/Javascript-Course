const myNums = [1, 2, 3, 4]

// const newNums = myNums.reduce((acc, currval) => acc + currval, 0)

// const newNums = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// console.log(newNums)

const shoppingCart = [
    {
        itemName: "js course",
        price: 4999
    },
    {
        itemName: "py course",
        price: 2999
    },
    {
        itemName: "mobile dev course",
        price: 7999
    },
    {
        itemName: "data science course",
        price: 15999
    },
]

const myTotal = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(`Total bill is ${myTotal}`)