// Two types of datatype

// 1. primitive which is call by value 

// 7 types : 1.String 2.Number 3.Boolean 4.null 5.Undefined 6.symbol 7.bigInt

// Number
const score = 100
const scoreValue = 100.3

// Boolean 
const isLogged = false

// NUll
const isOutsideTemp = null;

// Undefined 
// const  userEmail;

// symbol 
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

// bigInt
const bigNumber = 1276772364872336234234n

// 2. Non primitive which call by reference

// 3types: 1.arry 2.Object 3.Functon

// array
const hero = ["shaktimaan","Baalveer","krish"];

// Object
let myObj = {
    name : "amir",
    age : 22,
}

// function
const myFunction = function(){
    console.log("hello")
}

// To check datatype we use -> console.log(typeof name)

console.log(typeof myFunction)


// ********  stack and heap memory *********
 // Stack -> primitive
 // Heap -> non primitive

 // copy milta hai
 let myYoutube = "amiralam"
 let anotherName = myYoutube
 anotherName = "yashir"
 console.log(myYoutube)
 console.log(anotherName)

 // reference milta hai 
 let userOne = {
    email : "amir@gmail.com",
    age : 20,
 } 
 let userTwo = userOne;

 userTwo.email = "yashir@gmail.com";

 console.log(userOne.email)
 console.log(userTwo.email)
