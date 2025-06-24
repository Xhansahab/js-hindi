// var c = 300
let a = 300
if (true){
    let a = 20
    const b = 40
    // var c = 60
    console.log("INNER: ", a);
    

}
 console.log(a);
//   console.log(b);
//  console.log(c);

 // lecture no 22 done Succesfully...!

 function one(){
    const username = "Sahab"
    function two (){
        const website = "Linkdin"
        console.log(username);
        
    }
    //console.log(website);

       two()
 
 }
// one()

if (true) {
    const username = "Sahab"
    if (username === "Sahab"){
        const website = "youtube"
        console.log(username + website);
        
    }
    //console.log(website);
    
}