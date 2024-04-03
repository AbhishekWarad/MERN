let guess = prompt("Enter your fav movie : ");

while((guess != "Avatar") && (guess != "quit")){
    guess=prompt("Enter again : ")
};

if (guess == 'Avatar') {
    console.log("You Guessed");
} else {
    console.log("you quit");
}