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