// ------------------++++++++++++---------DATES----------+++++++++++----------------------------------
 let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString()); //for Indian standard date we use this 
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);

 let myCreatedDate = new Date(2025, 0, 23)
//let myCreatedDate = new Date(2025, 0, 23, 5, 3)
// let myCreatedDate = new Date("01-04-2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
 console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));
