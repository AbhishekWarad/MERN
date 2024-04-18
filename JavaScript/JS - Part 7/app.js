// this keyword

const student = {
    name : "abhishek warad",
    age : 23,
    eng : 95,
    math : 97,
    getAvg() {
        let avg = (this.eng + this.math)/2;
        console.log(avg);
    }
}

student.getAvg();
console.log(" * * * * * * * * * * * * * * * * * * * * * * * * * * ");

// try catch block
console.log("printing before try catch block");
try {
    console.log(a); 
} catch (error) {
    console.log("exception : varible not declared !")
}

console.log("printing after try catch block");

// arrow function 

const sum = (a, b) => {
    console.log(a+b);
}

sum(3,4);

add = (a,b) => {
    console.log(a+b);
}

add(4,5);
add(10,2);

//add = 10;
console.log(add);
add(1,2);


const mul =(a,b) => (a*b);
console.log(mul(2,3)); //6

const mul1 =(a,b) => {a*b};
console.log(mul1(2,3)); //Undified

const mul2 =(a,b) => {return a*b};
console.log(mul2(2,3)); //6


// set timeout

function sum1() {
    console.log(10+20);
}


console.log("log written BEFORE setTimeout ");
let id = setTimeout(sum1 , 2000);
console.log("log written AFTER setTimeout ");

clearTimeout(id1);

// set interval

let id2 = setInterval(() => {
    console.log("abhishek");
} , 2000);
console.log("warad");
clearInterval(id2);



