// **** arrays *****

const arr1 = [0,8,3,2,3,2,3,2]
const myHero = ["saktiman","krish"]
const arr2 = new Array(1,2,3,4)
// console.log(arr2[1]);
// arrays methods

// arr2.push(5)  // push in array arr2
// arr2.push(6)  // push in array arr2
// arr2.pop(6)  // pop in array arr2

// arr2.unshift(9); // inserted 9 in array of starting index
// arr2.shift(); // delete  9 in array of starting index

// console.log(arr2.includes(9)); // it return false because it check whether the 9 is present in array or not
// console.log(arr2.indexOf(9)); // it return -1 because it check which is  present at index 9 in array
// console.log(arr2.indexOf(1)); // index 2 pai 1 hai return 1;

// console.log(arr2); // print the array arr2

// const arr3 = arr2.join() // it convert it into string
// console.log(arr2);
// console.log(arr3);

// it make only copy form 1 to 2 exclusive 3
const myarr  = new Array(1,2,3,4,5);
const myarr1 = myarr.slice(1,3)
console.log("A",myarr)
console.log(myarr1);

// it cut the array from 1 to 3 inlude 3
const myarr2 = myarr.splice(1,3)
console.log("B",myarr)
console.log(myarr2);
