// for each
// it is a call back function so it doesn't have a name

let progamming = ["js", "java", "py", "cpp"]

// progamming.forEach( function (item) {
//     console.log(item.toUpperCase())
// } )

// progamming.forEach( (item) => {
//     console.log(`Value is ${item}`)
// } )

function greet(item) {
    console.log(item)
}

// progamming.forEach(greet)

const coding = ["cpp", "ruby",
    {
        language: "Javascript",
        fileName: "js"
    },
    {
        language: "Python",
        fileName: "py"
    },
    {
        language: "Java",
        fileName: "java"
    }
]

coding.forEach( (item) => {
    if (typeof item == "object") {
        console.log(item.fileName)
    }
} )