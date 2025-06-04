// reduce 
const myNum = [1,2,3]
const newNum = myNum.reduce(function(acc,currVal){
    // console.log(`acc : ${acc} and currVal : ${currVal}`)
    return acc,currVal;
},0)
// console.log(newNum)  // add the myNum array

// with arrow function and scope
const newNum2 = myNum.reduce((acc,currVal)=>{
    console.log(`acc : ${acc} and currVal : ${currVal}`)
    return acc+currVal;
},0)
console.log(newNum2)

// with arrow function without scope
const newNum3 = myNum.reduce((acc,currVal)=>
    // console.log(`acc : ${acc} and currVal : ${currVal}`)
     acc+currVal,0)
console.log(newNum3)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const addition = shoppingCart.reduce((acc,item) =>acc+item.price,0)
console.log(addition)
