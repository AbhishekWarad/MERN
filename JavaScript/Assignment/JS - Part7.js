// Qs1 - Write an arrow function named arrayArray that accepts an array of numbers and returns the average of those numbers.

const arrayAverage = (arr) => {
    let sum = 0;
    let n = arr.length;
    for(i of arr){
        sum += i;
    }
    return sum/n;
}
let arr = [1,2,3,4,5]
let a =arrayAverage(arr);

console.log(a);



// QS2 -

const isEven = (n) => {
    if(n%2 == 0){
        return `${n} is even`;
    } else{
        return `${n} is odd`;
    }
}

console.log(isEven(3));


// QS3 - 

const obj = {
    message : "hello world",
    logMessage() {
        console.log(this.message);
    }
}

obj.logMessage();
setTimeout(obj.logMessage, 1000);


// QS4 -