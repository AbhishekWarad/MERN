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


// let btns = document.querySelectorAll('button');

// for(btn of btns){
//     btn = addEventListener("click" , sayHello);
//     btn = addEventListener("click" , printBye);

// }

// function sayHello() {
//     alert("hello!");
// }

// function printBye(){
//     console.log("your mouse enterd on button!")
// }



let h1 = document.querySelector('h1');
let h3 = document.querySelector('h3');
let p = document.querySelector('p');
let btn = document.querySelector('button');


function changeColor(){
    this.style.backgroundColor = "blue";
    console.log(this.innerText);
}

h1.addEventListener("mouseenter" , changeColor);
h3.addEventListener("mouseenter" , changeColor);
p.addEventListener("mouseenter" , changeColor);
btn.addEventListener("mouseenter" , changeColor);

let form = document.querySelector("form");

form.addEventListener("submit" , function (event) {
    event.preventDefault();
    // console.dir(form);

    let user = this.elements[0].value;
    let pass = this.elements[1].value;

    console.log(user);
    console.log(pass);

    // let input = document.querySelectorAll("input");
    // console.log(input.value);

    // input.forEach(element => {
    //     console.log(element.value)
    // });

})