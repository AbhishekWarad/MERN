

//pq 1
let para1 = document.createElement('p');
para1.innerText = "Hey I'm red";
document.querySelector('body').appendChild(para1);
para1.style.color = "red";







//pq 2
let heading3 = document.createElement('h3');
heading3.innerText = "I'm a blue h3!"
heading3.style.color = "blue";
document.querySelector('body').insertAdjacentElement("afterbegin",heading3);




//pq 3
let div = document.createElement('div');
div.style.border = "2px solid black";
document.querySelector('body').appendChild(div);
let divh1 = document.createElement('h1');
divh1.innerText = "I'm in a div";

document.querySelector('div').appendChild(divh1);

let divp = document.createElement('p');
divp.innerText = "ME TOO!";
document.querySelector('div').appendChild(divp);