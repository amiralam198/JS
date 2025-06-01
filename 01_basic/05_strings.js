const name = "amir"
const repoCount = 40

console.log(name,repoCount,"value");

console.log(`my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('amir-alam')
// properties
console.log(gameName[0]);
console.log(gameName.length);   // length of string 
console.log(gameName.toUpperCase());  // convert all into upperCase
console.log(gameName.charAt(2)) // what is on index 2;
console.log(gameName.indexOf('i'));  // on which index char i present

// divide into substring
const newString = gameName.substring(0,3) // from 1 to 2
console.log(newString);

// it take negative substring also 
const anotherString = gameName.slice(-8,2)
console.log(anotherString);

// trim basically extra space ko remove kar deta hao 
const newStringOne = "     amir    "; 
console.log(newStringOne);         // output = "     amir    " this without trim
console.log(newStringOne.trim()); // output "amir" // with trim function

// we can replace keyword from string  by replace function
const url = "https://amir.com/amir%20alam"
console.log(url.replace('%20','-'));    

// to check whether this keyword present or not
console.log(url.includes( 'amir'));  // return true ye keyword hai
console.log(url.includes('yashir'))  // return false url mai 'yashir' keyword nhi hai

// we can split the string in array
const newStringTwo = "md-amir-alam"
console.log(newStringTwo.split('-'));  // [ 'md', 'amir', 'alam' ] output separate on behlf of '-'