// Square and sum the array elements using the arrow function and then find the average of the array

let arr = [2,3,4,5,6];


let squareOfarr = arr.map((i) => (i*i));
let sumOfarr= arr.reduce((sum , el) => (sum + el));
let averageOfarr = sumOfarr/arr.length;

console.log(squareOfarr);
console.log(sumOfarr);
console.log(averageOfarr);


// Create a new array using the map function whose each Element is equal to the original element plus 5

arr = [1,2,3,4,5];

let plusFiveOfarr = arr.map((el) => (el+5));

console.log(plusFiveOfarr);


// Create a new array whose elements are in uppercase of words present in the original array.

arr = ['abhishek', 'adarsh' , 'pream' ];

let uppercaseOf = arr.map((el) => (el.toUpperCase()));

console.log(uppercaseOf);


// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.
//The function should return a new array with the original array values and all of the additional arguments doubled.

function doubleAndReturnArgs(arr , ...args){
    args = args.map((el) => (el*2));
    let result = [...arr,...args];
    return result;
}

let res = doubleAndReturnArgs([1,2,3,4,5] , 3,5,6,87,5,3,1);

console.log(res);

//Write a function called mergeObjects that accepts two objects and return a new object
// which contains all the keys and values of the first object and second object.


function mergeObjects(a , b){
    let c = {...a , ...b} ;
    return c;
}

let obj1 = {
    name : "abhishek",
    age : 23,
    gender : "male",
}

let obj2 = {
    first_name : "adarsh", 
    ages : 24,
    male_or_female : "female",
}

res = mergeObjects(obj1, obj2);

console.log(res);


























