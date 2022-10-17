//Seeing The World

/*Use the spread operator (...) to sort an array without mutating the original
, e.g. [...arr].sort(). The spread operator creates a shallow copy of the original array, 
on which you can call the sort() method without mutating the original array.*/

let myWorld = ["Pakistan", "Germany", "UK", "France", "Thailand"];
console.log("Actual Array");
console.log(myWorld);

console.log("SortedArray Without Change  Original");
let sortedArray = [...myWorld].sort();
console.log(sortedArray);

console.log("Actual Array");
console.log(myWorld);

//There are two option when we call splice without any parameter it will return shallow copy var copy = arr.splice()
//Second use spread operator [...]

console.log("ReversedArray Without Change  Original");
const reversedArray = [...myWorld].reverse();
console.log(reversedArray);

console.log("Actual Array");
console.log(myWorld);

//ReversedOriginalArray
console.log("Reversed Original Array");
const reversedOriginalArray = myWorld.reverse();
console.log(reversedOriginalArray);

console.log("Back Original Array");
const backOriginalArray = myWorld.reverse();
console.log(backOriginalArray);

console.log("Sort Original Array");
const sortOriginalArray = myWorld.sort();
console.log(sortOriginalArray);

console.log("Reverse Alphabetic Order Array");
const reverseAlphabatic = myWorld.reverse();
console.log(reverseAlphabatic);
