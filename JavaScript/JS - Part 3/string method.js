
let password =  "  abhishek warad adakljd    ";

console.log(password.trim());


// methods for converting strings to upeer and lower case  
console.log(password.toUpperCase());
console.log(password.toLowerCase());


// indexOf

let str = "ILoveCoding";

console.log(str.indexOf("Love"));
console.log(str.indexOf("C"));
console.log(str.indexOf("c"));


// slice

let str_slice = "ILoveCoding";

console.log(str_slice.slice(1,5));
console.log(str_slice.slice(1));
console.log(str_slice.slice(-1,-5));

// replace 

let str_replace = "ILoveCoding";

console.log(str_replace.replace("Love","do"));
console.log(str_replace.replace("o","x"));
console.log(str_replace.replace("a","b"));


// repeat 

let str_repeat = "Mango";


console.log(str_repeat.repeat(3));


