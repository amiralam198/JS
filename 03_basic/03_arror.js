const user = {
    username : "amir",
    price : 199,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`) 
    }
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
// console.log(this)  {} return empty object because this keyword used in current context

// The this keyword refers to the context where a piece of code, such as a function's body, is 
// supposed to run. Most typically, it is used in object methods, where this refers to the object 
// that the method is attached to, thus allowing the same method to be reused on different objects.

// function chai (){
//      let  username = "amir"
//     console.log(this)
// }
// chai()

// const chai = function(){
//    let  username = "amir"
//     console.log(this.username)
// }
// chai()   // return undefined

// when we use arrow function

const chai = () =>{
    let  username = "amir"
    console.log(this.username)
}
chai()   // return undefined

// basic arrow function
// const addTwo = (num1,nums2) =>{
//     return num1+nums2
// }
// console.log(addTwo(2,3))

// **** implicit return in arrow function

// const addTwo = (num1,nums2) =>   (num1+nums2)   we can write like this if add two number
console.log(addTwo(2,3))

// const addTwo = (num1,nums2) =>   ({username:"amir"})  when we want to return object must have in bracket like that
console.log(addTwo(2,3))

