let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = input.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    
    item.appendChild(delbtn);
    ul.appendChild(item);
    input.value = "";
})

let delbtns = document.querySelectorAll(".delete");

ul.addEventListener("click" , function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        console.log(listItem)
        listItem.remove();
    };
})


// for(del of delbtns){
//     del.addEventListener("click" , function(){
//         console.log("element delted");
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }