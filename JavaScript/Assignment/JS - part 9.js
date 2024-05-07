// QS-1

let input = document.createElement("input");
let button = document.createElement("button");
let body = document.querySelector("body");


button.innerText = "Click me"

body.append(input);
body.append(button);

//QS-2

input.setAttribute("placeholder","Username");
button.setAttribute("id" , "btn");


//QS-3

document.querySelector('#btn').classList.add("btn_color");


//QS-4

let h1 = document.createElement("h1");
body.append(h1);
h1.innerText = "DOM Practice";

h1.classList.add("under");

//QS-5

let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice";
body.append(p);