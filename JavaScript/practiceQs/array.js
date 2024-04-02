let months = ["january" , "july" , "march" , "august"];

months.shift();
months.shift();

months.unshift("june" , "July");


let splice_month = ["january" , "july" , "march" , "august"];
splice_month.splice(0,2,"July" , "june");


let lang = ["c" , "c++" , "html" , "javascript" , "python", "java" , "c#", "sql"]
console.log('lang.reverse().indexOf("javascript") : ' + lang.reverse().indexOf("javascript"));



// -------------------------- TIC-TAC-TOE --------------------------------

const tic_tac_toe = [ ['X',null,'O'] , [null,'X',null] , ['O',null,'X'] ];