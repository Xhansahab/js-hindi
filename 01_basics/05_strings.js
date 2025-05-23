const name = "Sahab"
const repoCount = 50

// console.log(`Hello my name is ${name.} and my repoCount is ${repoCount}`);

const gameName = new String('sahab')
console.log(gameName[4]);
console.log(gameName.__proto__);
console.log(gameName.small);
console.log(gameName.lastIndexOf);
console.log(gameName.constructer)
// console.log(gameName.fontcolor(ReadableByteStreamController));
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('h'))

const newString = gameName.substring(0, 3) //this does not take/include the last value 
console.log(newString);

const anotherString = gameName.slice(-4, 5)
console.log(anotherString);

const newStringOne = "    Saif     "
console.log(newStringOne.trimStart()); //this F() is removed the whitespaces inside the Value
console.log(newStringOne);

const url = "https://saif.com/sahabkhan20%sahab"
console.log(url.replace('sahabkhan', 'Saifff'))

console.log(url.includes('saif.cmm'));
console.log(url.split('/'));
