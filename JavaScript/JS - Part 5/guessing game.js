let max_number = prompt("Please enter max number : ");
let random = Math.ceil(Math.random()*max_number);
let guess = prompt(`Please guess the value from 1 to ${max_number}`);

// if (guess == random) {
//     console.log(`Great! you guess it right. It was ${random}`);
// } else {
//     while (guess != random) {
//         guess = prompt(`Incorrect Guess! Please guess again`);
//         if (guess == 'quit') {
//             break;
//         }
//     }

//     if (guess == 'quit') {
//         console.log("You choose to quit!")
//     } else {
//         console.log(`Great! you guess it right. It was ${random}`);
//     } 
    
// }


while (true) {
    if(guess == "quit"){
        console.log("You choose to quit!")
        break;
    }

    if (guess == random) {
        console.log(`Great! you guess it right. It was ${random}`)
        break;
    } else {
        guess = prompt(`Incorrect Guess! Please guess again`);
    }
}