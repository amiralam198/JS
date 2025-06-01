// object literals


const mySym = Symbol("key1")  // if we want access the symbol in object we have to declare in object like that [mySym] : "mykey1"

const JsUser = { // object
    name : "amir",    // name is key and it store in string we dont write in string 
    age : 18,
    [mySym] : "mykey1",
    location : "gaya",
    email : "amiralam@google.com",
    isLoggedin : false,
    Lastloggedin : ["monday","saturday"]
} 

console.log(JsUser.email)  // access to the key 
console.log(JsUser["email"])  // we can access like that but in case key is writen in string format then this is the only method to access the key

console.log(JsUser)

JsUser.email = "amiralam@oracle.com"
console.log(JsUser.email)
// Object.freeze(JsUser) // if we freeze the object then no changes happend in object 
JsUser.email = "amiralam@phonepay@gmail.com"
console.log(JsUser.email)

JsUser.greeting = function(){
    console.log("Hello Js user");
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello Js user,${this.name}`)
}
console.log(JsUser.greetingTwo());