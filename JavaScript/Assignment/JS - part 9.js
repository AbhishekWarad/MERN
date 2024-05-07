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

