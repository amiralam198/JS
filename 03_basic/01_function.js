// console.log("a")
// console.log("m")
// console.log("i")
// console.log("r")

function myname(){
console.log("a")
console.log("m")
console.log("i")
console.log("r")
}

myname()  // execute the function 
// adding two numbers 
function addTwoNumbers(number1,number2){
   console.log(number1+number2) ; 
   // return number1+number2
}
addTwoNumbers(1,2);  ///number1 and numbe2 are parameters and 1 2 are value

const result = addTwoNumbers(1,2)
console.log("result : " , result)  // return -> result :  undefined

function loginUserMessage(username){
    if(username===undefined){
        console.log("please enter a username");
        return 
    }
    return `${username} just log in`
}
loginUserMessage("amir") // return nothing because i dont give any instruction like print or something
console.log(loginUserMessage("amir")) // i give instruction to return ->  amir just log in
console.log(loginUserMessage()) // if you dont pass anything it return -> undefined just log in


// we can add 