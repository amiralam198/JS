// date eik object hai js mai

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// we can create aur write take 

let myCreateDate = new Date(2025,4,27);
console.log(myCreateDate);
console.log(myCreateDate.toDateString());

// mm/dd/yy
//  let mymmddyyDate = new Date("01-14-2025");
//  console.log(mymmddyyDate.toLocaleString());

 // The Date.now() static method returns the number of milliseconds 
//  elapsed since the epoch, which is defined as the 
//  midnight at the beginning of January 1, 1970, UTC.

// **** Date.now() ******

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreateDate.getTime());  // retrun milliseconds 1 jan 1970 to myCreateDate tak
console.log(Math.floor(Date.now()/1000))  // retrun secons from 1 jan 1970 to now

let myDate = new Date(); 
console.log(myDate.getDay()); // we can find months hours minutes day by this get
