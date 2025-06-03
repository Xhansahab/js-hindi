function sayMyName(){
// console.log("S");
// console.log("A");
// console.log("H");
// console.log("A");
// console.log("B");
}
// sayMyName()

function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2
    // return result
    //return number1 + number2
    //console.log("Saif"); //this does not print because of i already assigned a return value and after assign the return value no value or function will be printed
    

 }

// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);
function logInUserMessage(username = "sahab"){
    if (!username){
        console.log("please enter a username");
        return // after using return other functions could not run thats why giving o/p undefined
    }
    return `${username} just loged in`

}
//console.log(logInUserMessage("hitesh"))
//console.log(logInUserMessage("saif"))

// lecture 19 done...! Succesfully Here...!

function calculateCartPrice (val1, val2, ...num1){
    return num1
}
//console.log(calculateCartPrice (200, 400, 500, 3000));

const user = {
    username: "Sahab",
    price: 299
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

//handleObject(user)
handleObject({
    username: "Saif",
    price: 399
})
 const myNewArray = [200, 300, 500, 100]
 function returnSecondValue(getArray){
    return getArray[1]
 }
 //console.log(returnSecondValue(myNewArray));
  console.log(returnSecondValue([200, 300, 500, 100]));

