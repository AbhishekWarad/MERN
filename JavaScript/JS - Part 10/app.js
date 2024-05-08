// let btn = document.querySelector('button');
// btn.onclick = function (){
//     alert("button has been pressed!");
// }


// let btns = document.querySelectorAll('button');

// for(i of btns){
//     i.onclick = sayHello;
//     i.onmouseenter = printBye;
// }

// function sayHello() {
//     alert("hello!");
// }


// function printBye(){
//     console.log("your mouse enterd on button!")
// }


let btns = document.querySelectorAll('button');

for(btn of btns){
    btn = addEventListener("click" , sayHello);
    btn = addEventListener("click" , printBye);

}

function sayHello() {
    alert("hello!");
}

function printBye(){
    console.log("your mouse enterd on button!")
}