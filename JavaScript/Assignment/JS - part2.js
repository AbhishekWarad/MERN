// qs1  - 

// let num = prompt("Enter a number : ");10

// if(num%10 == 0){
//     console.log("Good");
//     alert("Good");
// }else{
//     console.log("Bad");
//     alert("Bad");
// }



// qs 2 -
// let name = prompt("Enter your name : ");
// let age = prompt("Enter your age : ");

// alert(`${name} is ${age} years old.`);


// qs4 -
// let quarter = 2;

// switch (quarter) {
//     case 1:
//         console.log("Months in Quarter 1:January,February,March");
//         break;
//     case 2:
//         console.log("Months in Quarter 2:April,May,June");
//         break;
//     case 3:
//         console.log("Months in Quarter 3:July,August,September");
//         break;
//     case 4:
//         console.log("Months in Quarter 4:October,November,December");
//         break;
//     default:
//         console.log("INVALID INPUT");
//         break;
// }

// qs3
// let string = "abhishek";

// if ((string[0] == "A" || string[0] == "a") && (string.length>5)) {
//     console.log("Golden string");
// } else {
//     console.log("Not a Golden String ");
// }



// qs5
// let a=2 ,b=10 , c =3;

// if (a>b) {
//     if (a>c) {
//         console.log(`${a} is greater.`);
//     } else{
//         console.log(`${c} is greater.`);
//     }
// } else if (b>c) {
//     console.log(`${b} is greater.`);
// } else {
//     console.log(`${c} is greater.`);
// }


let a = 12342, b = 2342542222;

if(a%10 === b%10){
    console.log("same last digit" , a%10);
} else{
    console.log("The last digits are not same")
}
