// const tinderUser = new Object()  // this is singleton object 
const tinderUser = {}  // non singleton object
 
tinderUser.id = "132"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email : "amiralam@gmail.com",
    fullname : {   //  obect ke andar obeject 
        userfullname : {  // obect ke andar obeject ke andar object
            firstname : "amir"
        }
    }
}
// console.log(regularUser)
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname.userfullname.firstname)  // accessing obect ke andar obeject ke andar object name

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"c" , 4:"d"}

// const obj3 = {obj1,obj2}
// console.log(obj3)  // print obj3 ke andar obj1 and obj2

// we can concatenate by three type
const obj3 = Object.assign(obj1,obj2)
const obj4 = Object.assign({},obj1,obj2) // {} isme sab aa jayega
const obj5 = {...obj1 , ...obj2}

console.log(obj3)
console.log(obj4)
console.log(obj5)

// return all this : { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// array ke andar bahut sara object 

const user = [
    {
        id : "!323",
        name : "amir"
    },
    {
        id : "212",
        name : "yashir"
    },
    {

    },

]

console.log(user[1].name)  // it reture yashir

console.log(tinderUser)
console.log(Object.keys(tinderUser)) // saare key eik array mai return lar dega
console.log(Object.values(tinderUser)) // saare values eik array mai return lar dega
console.log(Object.entries(tinderUser)) // eik arrray mai key and value return karega

// ***** de-struture of object ******

const course = {
    coursename :"js in hindi",
    price : 999,
    courseinstructor : "amir"
}
const {courseinstructor} = course
console.log(courseinstructor)

const {courseinstructor:instructor} = course
console.log(instructor)


// **** api format in jason ***** 

// {
//     "name" : "amir",
//     "price" :22
// }