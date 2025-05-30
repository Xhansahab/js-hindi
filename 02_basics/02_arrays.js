const marvel_Heroes = ["Thor", "spiedrman", "Ironman"]
const Dc_Heroes = ["Superman", "Flash", "Batman"]
// marvel_Heroes.push(Dc_Heroes)
//  console.log(marvel_Heroes);
// console.log(typeof(marvel_Heroes));

// console.log(marvel_Heroes[3],[1]);


// const all_heroes = marvel_Heroes.concat(Dc_Heroes)
// console.log(all_heroes);

const all_new_Heroes = [...marvel_Heroes, ...Dc_Heroes]  //this is the best way to merge many arrays into one single array
// console.log(all_new_Heroes);

const another_array  = [1, 2, 3, [4, 2, 4], 2, 5, 7, [2, 3, 1], 6, 7, 3, [8, 7]]

 const another_real_array = another_array.flat(Infinity) //for converting all array into one single array
//  console.log(another_real_array);

console.log(Array.isArray("Saif"));
console.log(Array.from("saif")); // this is to separate the each elements into each Array 
console.log(Array.from({name: "Saif"})); // Interesting for interview POV //this is give the empty value

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // this is also merge more value into one single array


 