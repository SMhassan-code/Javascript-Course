for (let i = 1; i <= 10; i++) {
    // console.log(`Value of i: ${i}`)
}


for (let i = 1; i <= 10; i++) {
    if (i == 7) {
        // console.log("7 is the best number")
    }
    // console.log(`Value of i: ${i}`)
}


// for (let i = 1; i <= 5; i++) {
//     console.log(`Outer loop is: ${i}`)
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`)
//     }
// }

// break and continue

// for (let z = 0; z < 50; z++) {
//     if (z == 24) {
//         console.log("24 found")
//         break;
//     }
//     console.log(`Value is: ${z}`)
// }

for (let z = 0; z < 50; z++) {
    if (z == 24) {
        console.log("24 found")
        continue;
    }
    console.log(`Value is: ${z}`)
}