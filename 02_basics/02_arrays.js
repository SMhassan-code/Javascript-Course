const marvel_heros = ["ironman", "captain america", "spiderman"]
const dc_heros = ["batmna", "flash", "superman"]

// marvel_heros.push(dc_heros) // it adds dc_heros as a single element in the form of an array

// console.log(marvel_heros)
// console.log(marvel_heros[3][2]) // to get element from inside the array of another array

const allHeros = marvel_heros.concat(dc_heros)

// console.log(allHeros)

const all_new_heros = [...marvel_heros, ...dc_heros] // '...' is called spread operator. it concatinates any array you want

// console.log(all_new_heros)

const another_arr = [1, 2, [3, 4], 5, 6, [4, 6, [8, 9]]]
const real_another_arr = another_arr.flat(Infinity) // it removes the depth of array

// console.log(real_another_arr)

console.log(Array.isArray(another_arr))
console.log(Array.from({name: "Hassan"}))
console.log(Array.from("1234"))

const marks_1 = 75
const marks_2 = 85
const marks_3 = 95

console.log(Array.of(marks_1, marks_2, marks_3))

// Confusing behavior with Array constructor
new Array(3);        // [empty × 3] - creates array with 3 empty slots
new Array(1, 2, 3);  // [1, 2, 3] - creates array with these elements

// Array.of() is consistent
Array.of(3);         // [3] - always creates array with the given elements
Array.of(1, 2, 3);   // [1, 2, 3]