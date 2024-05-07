let para1 = document.createElement('p');
para1.innerText = "Hey I'm red";
document.querySelector('body').appendChild(para1);
para1.style.color = "red";

let heading3 = document.createElement('h3');
heading3.innerText = "I'm a blue h3!"
heading3.style.color = "blue";
document.querySelector('body').insertAdjacentElement("afterbegin",heading3);

