let links = document.querySelectorAll('.box a');

// for(i = 0 ; i < links.length ; i++){
//     links[i].style.color = 'red';
// }

for(link of links){

    console.log(link);
    link.style.color = 'yellow';
}