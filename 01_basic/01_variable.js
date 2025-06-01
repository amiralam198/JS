const accountId = 144553    // not change
let accountEmail = "amiralam8109@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState   // undefined 

// accountId = 2  not allowed

// prefer not to use var because of issue in block scope and functional scope

accountEmail = "mdyashir@gmail.com"
accountPassword = "1234223"
accountCity = "Gaya"

console.log(accountId)

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);