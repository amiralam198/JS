// ***   Immediately Invoked Function Expressions IIFE   *** 

// IIFE is a function which immediately executes after it's creation . It is wriiten as one parentheses 
// for wrapping the function and other for execution ()();

(function chai(){
    console.log("amir");
})();  // lagatar 2 function likhne ke liye hum ";" use karengen

( () =>{
    console.log("amir");
})();

// pass arguments
( (name) =>{
    console.log(name);
})("amir")
