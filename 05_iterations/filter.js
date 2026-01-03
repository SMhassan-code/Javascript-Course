// filter
// Need a new filtered array? Use filter method
// Just want to perform an action on each item? Use forEach method

let progamming = ["js", "java", "py", "cpp"]

// let updatedProgramming = progamming.forEach( (item) => {
//     return item
// } )
// for each method does not return the value which is sometimes a problem. For this purpose, we use filter method.

// console.log(updatedProgramming)

// const updatedProgramming = progamming.filter((item) => {
//     return item === "js"
// })

// console.log(updatedProgramming)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNums = myNums.filter((num) => num > 5)

// let newNums = []
// myNums.forEach((num) => {
//     if (num >= 5) {
//         newNums.push(num)
//     }
// })
// We can do the same with for each but its a tedious method.

// console.log(newNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ]

// const userbooks = books.filter((bk) => bk["genre"] === "Non-Fiction")
const userbooks = books.filter((bk) => {
    return bk.genre === "Non-Fiction" && bk.edition < 2000
})

console.log(userbooks)