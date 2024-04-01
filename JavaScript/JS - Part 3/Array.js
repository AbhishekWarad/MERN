let students = ["aman" , "shradha" , "rajat"];

console.log(students);

// Differnt methods of creating an array

let marks = [23,12,34,654,23];
console.log(marks);

let names = ["Abhishek" , "ajhbdjahb" , "warad"];
console.log(names);

let info = ["Abhisehek Warad" , 2 , 5.6 , "male"];   //mixed array
console.log(info);

let newArr = [];


// Indexing of srtings inside an array

console.log(info[0][0]);
console.log(info[0].length);

// Array is mutable

let fruits = ["Mango" , "Orange" , "Apple"];
console.log(fruits);
fruits[0] = "Bannana";

console.log(fruits);

fruits[10] = "Kiwi"; // intersting
console.log(fruits);


// ARRAY METHODS

// push : add at the end and return length of array

let cars = ["audi" , "bmw" , "xuv" , "maruthi"];
cars.push("toyota");
console.log(cars);

// pop : delete at the end and return the deleted 

cars.pop();
console.log(cars);

// unshift : add at start and return length of array

cars.unshift("toyata");
console.log(cars);

// shift : delete at end and return the deleted

cars.shift();
console.log(cars);
