let a = 20;
const b = 30
var c = 40
if(true){
    let a = 50;
    const b = 60
    var c = 70
}
// console.log(a);
// console.log(b);
// console.log(c);
// Variables declared outside any function or in the global scope are known 
// as global variables and can be accessed both inside and outside of functions

// but "var" is exception it act as global inside the scope also

function one(){
    const username = "amir"
    function two(){
        const webseite = "youtube"
        // console.log(username);
    }
    // console.log(webseite) // error
    two()
}
one()
// ans -> hum andar ki function se bahar ko access kar sakte hai lekin bahar se andar ki nhi which means chote bade se icecream maang sakta h but bade chote se nhi
 
// let us take an example of if else to understand the scope

if(true){
    const username = "amir"
    if(username === "amir"){
        const website = "youtube"
        console.log(username+website)
    }
    // console.log(website)  // error
}
// console.log(username)  error

// **** interesting ******

console.log(addoOne(5))
 function addoOne(nums1){
    return nums1+1;
 }
// we can declare function like this and can access before the declaration of function

console.log(addTwo(5))
 const storeTwo = function addTwo(num1){
    return num1+2;
 }
 // we can declare function like this but we can't access before the declaration of function