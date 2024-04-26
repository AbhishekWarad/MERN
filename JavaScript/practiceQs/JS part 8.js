// 1. Check if all numbers in our array are multiple of 10 or not .

let arr = [10,20,30,100,40];
let arr1 = [1,23,30,34];

let res =arr1.every((x) => x%10 == 0);

console.log(res);



// 2. create a function to find the min number in an array.


let res1 = arr1.reduce((min , x) => {
    if(min < x){
        return min;
    } else {
        return x;
    }
})


console.log(res1);
