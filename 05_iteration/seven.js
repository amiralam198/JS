// map we use when we need to do some operations like addition subtarction etc
const myNum  = [1,2,3,4,5,6,7,8,9,10]
const  myNewNum1 = myNum.map((num) => num+5)
// console.log(myNewNum1)

const  myNewNum2 = myNum.map((num) => {
    return num*5
})
// console.log(myNewNum2)

// chaining in map

const myNewNum3 = myNum
                      .map((num) => num*5) // here num will become [5,10,15,20.....]
                      .map((num) => num+1) // here num will become [6,11,16,21.....]
                      // we can do map as mush as you want.. but remember one thing the num value came in second map were after completed in first map

// console.log(myNewNum3)

const myNewNum4 = myNum
                      .map((num) => num*5) 
                      .map((num) => num+1)
                     // we can use filter also
                     .filter((num)=> num>40)
console.log(myNewNum4)