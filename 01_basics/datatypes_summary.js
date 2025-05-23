// Primitive DataTypes

// 7 DataTypes: string, null, Boolean, Undefined, BigInt, Number, Symbol


const score = 100
const scorevalues = 100.3
const isLoggedIn = false
const OutsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
 console.log(id === anotherId);

 const BigNmuber = 2587145234689723435n


// -------**--------Reference Types or (Non-Primitive DataTypes)------**---------

// Array, Object, Function

//-------***----------ARRAY-----------***-----------
//  const Heros = ["Prophet Mohammad", "Imam Mehndi", "Ali R.A", "Imam Hussain" ];
//  console.log(Heros);
  
//  const BollyewoodHeros = ["Salman Khan", "Shahrukh Khan", "Aamir Khan", "Amitabh Bachhan"];
//  console.log(BollyewoodHeros);

 //-------***--------Object----------***---------

//  let myObj = {
//     name: "Saif khan",
//     age: 23,
//     City: "Ghazipur",
//     Village: "Raksaha"
//  }
//  console.log(myObj);
 
//  //-------------***----------Function----------***------------
const myFunction = function(){
    console.log("Hello World");
    
}
 
console.log(typeof myFunction);
