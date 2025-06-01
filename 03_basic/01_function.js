// console.log("a")
// console.log("m")
// console.log("i")
// console.log("r")

function myname(){
// console.log("a")
// console.log("m")
// console.log("i")
// console.log("r")
}

myname()  // execute the function 
// adding two numbers 
function addTwoNumbers(number1,number2){
//    console.log(number1+number2) ; 
   // return number1+number2
}
addTwoNumbers(1,2);  ///number1 and numbe2 are parameters and 1 2 are value

const result = addTwoNumbers(1,2)
// console.log("result : " , result)  // return -> result :  undefined

function loginUserMessage(username){
    if(username===undefined){
        console.log("please enter a username");
        return 
    }
    return `${username} just log in`
}
loginUserMessage("amir") // return nothing because i dont give any instruction like print or something
// console.log(loginUserMessage("amir")) // i give instruction to return ->  amir just log in
// console.log(loginUserMessage()) // if you dont pass anything it return -> undefined just log in


function calculateCartPrice(nums1){
    return nums1;
}
console.log(calculateCartPrice(2)); // this return 2 integer value


function calculateCartPrice1(...nums1){ // after doing this ...nums1 it return an array [ 2, 3, 54 ]
    return nums1;
}
console.log(calculateCartPrice1(2,3,54));  


function calculateCartPrice2(val1,val2,...nums1){
    return nums1;
}
console.log(calculateCartPrice2(2,3,4,5,2,3,2))// val1 = 2 , val2 = 3 and num1 array  [ 4, 5, 2, 3, 2 ]

// *** how to pass object in function

const user = {
    username : "amir",
    price : 199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user);
// or we can pass like that also
handleObject({
    username : "amir",
    price : 122
})

// *** how to pass array  in function
const myNewarray = [2,3,24,24,2];
function returnsecondValue(anarray){
    return anarray[1];
}
console.log(returnsecondValue(myNewarray));

console.log(returnsecondValue([2,3,24,24,2]));