const myDate = new Date()

// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())

// const anotherDate = new Date(2020, 0, 15)
// const anotherDate = new Date(2020, 0, 15, 8, 15, 58)
const anotherDate = new Date("2025-5-14")

// console.log(anotherDate.toDateString())

const newDate = Date.now()

// console.log(newDate)
// console.log(anotherDate.getTime())
// console.log(anotherDate.getTime() / 1000)
// console.log(Math.floor(Date.now() / 1000))
// console.log(myDate.getDate())

// console.log(`Date of today is ${myDate.getDate()} and the day is ${myDate.getDay()}`)

myDate.toLocaleString('default', {
    era: "long",
    weekday: "short"
})