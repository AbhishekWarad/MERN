
// Qs1 - Write a JS program to delete all occurrences of element ‘num’ in a given array
//         Example : if arr = [1,2,3,4,5,6,2,3] & num = 2
//         Result should be arr = [1,3,4,5,6,3]


let arr = [1,2,3,4,5,6,2,3,1,21,2,3];
let num = 2;
for(let i = 0; i < arr.length; i++){
    if (arr[i] === num) {
        arr.splice(i,1);
    }
}

console.log(arr);


// qs2 - Write a JS program to find the no of digits in a number
// Example:if number = 287152, count = 6

let number = 287152;
str_number=number.toString();
count = 0;
for(i of str_number){
    count++;
}

console.log("COUNT =",count);
let add = 0;
for (i of str_number) {
   add += i;
}
console.log(add);


// qs 3 - Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum = 25

let n =  287152;
let sum = 0;
while(true){
    r=n%10;
    sum += r;
    if (((n/10) | 0) != 0) {
        n=(n/10) | 0 ;
    } else{
        break;
    }
    

}
console.log(sum);


// qs 4 - Print the factorial of a number n.

let f_number = 0;

let f_result = 1;

for( let i = f_number;i>0;i--){
    f_result *= i;
}

console.log(f_result);