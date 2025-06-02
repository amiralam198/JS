// if

const islogged = true;
if(2==2){
    console.log("yes")
}
if(2==="2"){
    console.log("yes")
}
if(3!=2){
    console.log("yes")
}

const temperature = 41;
if(temperature<50){
    console.log("haa bhai")
}else{
    console.log("nhi bhai")
}

const score = 200;
if(score>100){
    var power = "fly"
    console.log(`user power : ${power}`)
}
console.log(`user power : ${power}`)  // var rhega toh access kar sakte hai

// basic loop ans logic operator as c++ if else && || 

// Nullish Coalesing Operator (??) : null and undefined

let val1 = 5 ?? 10   // return 5 beacuse jo pahle aayega wahi assign ho jayega
val1 = null ?? 10   // in case of null and undefined it store next element 
val1 = undefined ?? 15
console.log(val1)

// Ternary operator
const isPrice = 100
isPrice <=80 ? console.log("less than 80") : console.log("more than 80")

