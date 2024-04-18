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

