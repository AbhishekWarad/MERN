// pq1 - create a function to print a poem

function printPoem() {
    console.log("Twinkle Twinkle, little star");
    console.log("How I wonder,What you are");
}

printPoem();

// pq2 - create a function to roll a dice and always display the value of the dice(1 to 6)

function rollDice() {
    let random = Math.ceil(Math.random()* 6);
    console.log(random);
}

rollDice();


// pq3 - create a function that gives us the avreage of 3 numbers.


function avgOfThree(a,b,c) {
    console.log((a+b+c)/3);
}

avgOfThree(2,12,2343);


// pq4 - Create a function that prints the multipliation table of a number.
function tableOf(n) {
    for(i=0;i<=10;i++){
        console.log(`${n} * ${i} = ${n * i} `);
    }
}



// pq5 - create a Funtion that returns the sum of numbers from 1 to n.

function sumOf(n){
    sum = 0;
    for(i=1;i<=n;i++){
        sum +=i;
    }
    return sum;
}

console.log(sumOf(5));


// pq6 - create a function that returns the concatenation of all strings in an array.

function stringConcat(a) {
    let arr = a;
    let result = "";
    for (const i of arr) {
        result = result + i + " ";
    }
    return result;
}

let a = ["abhishek" , "warad"]

let b=stringConcat(a);

console.log(b);
