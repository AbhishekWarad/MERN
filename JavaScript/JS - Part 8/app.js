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

arr1.forEach((i) => {
    console.log(i.name )
})