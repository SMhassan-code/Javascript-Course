const accountId = 133556
let accountEmail = "hasan@gmail.com"
var accountPassword = 12786

/*
Prefer not to use var
bacause of block scope functional scope problem
*/

let accountCity;

// accountId = 23 // Its value cannot be changed because it is constant

accountEmail = "dua@gmail.com"
accountPassword = 34
accountCity = "Bahawalpur"

console.log(accountId)
console.table([accountEmail, accountPassword, accountCity])