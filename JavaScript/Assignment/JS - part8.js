// Square and sum the array elements using the arrow function and then find the average of the array

let arr = [2,3,4,5,6];


let squareOfarr = arr.map((i) => (i*i));
let sumOfarr= arr.reduce((sum , el) => (sum + el));
let averageOfarr = sumOfarr/arr.length;

console.log(squareOfarr);
console.log(sumOfarr);
console.log(averageOfarr);


// Create a new array using the map function whose each Element is equal to the original element plus 5








































