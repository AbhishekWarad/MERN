// ARRAY METHODS


// 1. For each
let arr = [1,2,3,4,5];

function print(el){
    console.log(el);
}

arr.forEach(print);


let arr1 = [
    {
        name : "abhishek",
        marks : 95
    },
    {
        name : "Shradha",
        marks : 94.4
    },
    {
        name : "rajat",
        marks : 92
    }
];

console.log(arr1);

let  b =arr1.forEach((i) => {
    console.log(i.name )
    console.log(i.marks )
    console.log(i.city = "ka32" )
    console.log(i)
    return i;
});

console.log(arr1);

// 2.Map
console.log();
console.log("*******************   MAP  **********************");
console.log();


let arr3 = [1,2,3,4];

let double = arr3.map(function(el){
    return el*2;
})

console.log(double);

let student = [
    {
        name : "shradha",
        marks : 87
    },
    {
        name : "warad",
        marks : 77
    },
    {
        name : "kiran",
        marks : 78
    }
]


let res =student.map((i)=>{
    return i.name = "warad";
})

console.log(res);


// filter
console.log();
console.log("*******************   FILTER  **********************");
console.log();

let arr4 = [2,4,1,5,6,7,1,3,5,9];

let even = arr4.filter((num) => (num % 2 == 0));
console.log(even);

// 4. Every (AND operator)
console.log();
console.log("*******************   EVERY  **********************");
console.log();
let a =[1,2,3,4].every((el) => (el % 2 == 0));
console.log(a);

// 5. some (OR operator)
console.log();
console.log("*******************   SOME  **********************");
console.log();

let c =[1,2,3,4].some((el) => (el % 2 == 0));
console.log(c);

// 6. reduce 
console.log();
console.log("*******************   REDUCE  **********************");
console.log();
let d =[1,2,3,4].reduce((res , el) => (res + el ));
console.log(d);



// default parameters
console.log();
console.log("*******************   DEFAULT PARAMETERS  **********************");
console.log();

function add(a , b=2){
    return a+b;
}

res = add(2);
console.log(res);


// spread 
console.log();
console.log("*******************   SPREAD  **********************");
console.log();

arr  = [1 ,1,2,3,4,5,6,7,8,8,9,234,2,34,78,1,2 ];

console.log(...arr);
console.log(Math.min(...arr));

arr = ["abhishek" , "warad" , 1 ,2,34]
console.log(...arr);
