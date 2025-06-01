const marvel = ["ironman","superman","thor"]
const dc = ["spiderman","flsk","batman"]

// marvel.push(dc)
// console.log(marvel); // [ 'ironman', 'superman', 'thor', [ 'spiderman', 'flsk', 'batman' ] ]
// console.log(dc)    // [ 'spiderman', 'flsk', 'batman' ]
// console.log(marvel[3][1])  // flsk

// const allhero = marvel.concat(dc)  // [ 'ironman', 'superman', 'thor', 'spiderman', 'flsk', 'batman' ]
// console.log(allhero);

// const allnewheor = [...marvel,  ...dc]; // more than two array kar sakte hai like ...a,...b,...c
// console.log(allnewheor)

// const another_arr = [1,2,3,[2,3],3,2,[3,3,[3,3,2]]]
// const newanother_arr = another_arr.flat(Infinity)   // ye eik array mai sabhi element ko daal dega
// console.log(newanother_arr);

console.log(Array.isArray("amir"));
console.log(Array.from("amir"));   //  [ 'a', 'm', 'i', 'r' ] convert in array 
console.log(Array.from({name : "amir"}))  // return []  we have specify kisko ko convert karna hai

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));  //  [ 100, 200, 300 ]
