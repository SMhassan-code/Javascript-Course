// let name1 = "Hassan     "
// let name2 = "Ahmed     "

// console.log(name1.realLength)

let heros = ["Batman", "spiderman"]

const heroPower = {
    batman: "technology",
    spiderman: "swinging",

    getSpiderPowers: function () {
        console.log(`You got spiderman's ${this.spiderman} power`)
    }
}

Object.prototype.hassan = function () {
    console.log("Hassan is present in all objects")
}

Array.prototype.greetings = function () {
    console.log("Good Morning!")
}

heroPower.hassan()
heros.hassan()
heros.greetings()
// heroPower.greetings()
// array can get methods from object but object which is like a root node cannot get methods defined for arrays


// Inheritance

const user = {
    name: "celeste",
    email: "celeste@gmail.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignments: "Js assignments",
    full_time: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user
// __proto__ is used to link objects to each other. They are able to use each other's properties

Object.setPrototypeOf(teacher, TASupport)

let anothername = "  ChaiAurCode   "

String.prototype.realLength = function () {
    console.log(this)
    console.log(`Real length is ${this.trim().length}`)
}

anothername.realLength()
" kangroo ".realLength()