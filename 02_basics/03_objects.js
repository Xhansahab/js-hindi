// there is two types to create an Object in JavaScript.------  Singelton and Literals

// Singleton made in this type of object
Object.create // Singleton made in this type of object


// Literals made in this type of object 
const mySym = Symbol("Key1")
const JsUser = {
    name: "Saif",
    "full name": "Saif Khan",
    [mySym]: "mykey1", // if you want to refer symbol then use [] this at declare time.
    age: 18,
    location: "Ghazipur",
    email: "saifkhan@Google.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "sunday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
JsUser.email = "Saif@chatgpt.com" // if you want to rewrite your objet then use this =
// Object.freeze(JsUser)
JsUser.email = "Saif@Yaahoo.com" //if you want to freeze the code so that you cant erewrite the code or change the value
//console.log(JsUser);

JsUser.greeting = function(){
    console.log(("Hiii JS User"));
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
    
}
console.log(JsUser.greeting());

console.log(JsUser.greetingTwo());

// JS 16 Lecture done




