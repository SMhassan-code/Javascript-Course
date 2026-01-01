// Immediately Invoked Function Expression (IIFE)
// We use IIFE to be free from the pollution of global scope and it is executed immediately

(function hollow (username) {
    console.log(`Hello ${username}`)
})("Hasssan");

( (id) => {
    console.log(`Hello ${id}`)
})("231ac");

// important note: we can't hold IIFE in a varible