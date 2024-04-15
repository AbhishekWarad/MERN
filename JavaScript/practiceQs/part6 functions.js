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