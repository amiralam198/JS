let score = null

// console.log(typeof score)
// console.log(typeof(score))


let convertScore = Number(score);
// console.log(convertScore)
// console.log(typeof convertScore)

// when we convert datatypes in number datatypes
// "22" = 22
// "33abc" = NaN
// true = 1;
// false = 0
// undefined = NaN
// null = 0

// -> converting into boolean 
let isLogged = 1
let booleanIsLogged = Boolean(isLogged)
// console.log(booleanIsLogged)
// console.log(typeof booleanIsLogged)

// 1 -> true
// 0 -> false
// "" -> false
// "amir" -> true

// -> converting into string 

let someNumber = 33

let stringSomeNumber = String(someNumber)
// console.log(stringSomeNumber)
// console.log(typeof stringSomeNumber)

// ************ Operations *************

let value = 7
let negValue = -value
// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2) 
// console.log(2%2)

let str1 = "amir"
let str2 = " alam"
let str3 =  str1+str2
console.log(str3)

// complex

console.log("1"+2)
console.log(1+"2")
console.log("1"+2 + 2)  // all become string 
console.log(1+2+"2")  // first do operatin then become string

console.log(+true) // 1
console.log(+"") // 0   

let num1,num2,num3 
num1=num2=num3 = 2+2  // this is bad practice we dont use in company 

 let gameCounter = 100
 gameCounter++
 console.log(gameCounter)
 ++gameCounter
 console.log(gameCounter)
