let btn = document.querySelector('button');

btn.addEventListener("click" , function () {
    let h1 = document.querySelector('h1');
    let randomColor = generateRandomColor();
    h1.innerText = randomColor;

    let div = document.querySelector('div');
    div.innerText = "press again to generate random color!"
    div.style.backgroundColor = randomColor;
})


function generateRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let apha = Math.random();
    let color = `rgb(${red} , ${green} ,${blue},${apha})`
    return color;
}