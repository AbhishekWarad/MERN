let res = document.getElementsByClassName("oldImg");

for(let i=0 ; i<res.length ; i++){
    console.dir(res[i].src);
    res[i].src = res[0].src;
}