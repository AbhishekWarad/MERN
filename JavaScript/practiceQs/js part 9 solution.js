let body = document.querySelector('body');
let para1 = document.createElement('p');
para1.innerText = "Hey I'm red!";
body.appendChild(para1);
para1.classList.add('red');


let h3 = document.createElement('h3');
h3.innerText = "I'm a blue h3";
body.insertAdjacentElement("afterbegin",h3);
h3.classList.add("blue");


let div = document.createElement('div');
let divh1 = document.createElement('h1');
let divp = document.createElement('p');
let selectDiv = document.querySelector('div');
body.append(div);
div.classList.add("border");

document.querySelector('div').appendChild(divh1);
divh1.innerText = "I'm in a div";

document.querySelector('div').append(divp);
divp.innerText = "ME TOO!"

