const userEmail = "amir@gmail.com"
if(userEmail){
    console.log("got user email")
}else{
    console.log("Don't have user email")
}

// falsy value  -> false , 0 , -0 , NaN , 0n , null , undefined , "" . BigInt
// truthy value -> "0" , 'false' , " " , [] , {} , function(){}

// to detect whether the array and object is empty or not

const checkEmptyArray = []
if(checkEmptyArray.length===0){
    console.log("Array is empty")
}
const checkEmptyObject = {}
if(Object.keys(checkEmptyObject).length==0){
    console.log("object is empty")
}
