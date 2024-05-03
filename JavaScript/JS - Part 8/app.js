// ARRAY METHODS


// 1. For each - mutable / does not return.
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

let b = arr1.forEach((i) => {
    console.log(i.name )
    console.log(i.marks )
    i.city = "ka32";
    console.log(i.city);
    //console.log(i)
    return i;
});

console.log(arr1);

// 2. Map - returns an array
console.log();
console.log("*******************   MAP  **********************");
console.log();


let arr3 = [1,2,3,4];

let  double =arr3.map(function(el){
    return el*2;
})
console.log(arr3);
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
    //return i.name = "warad";
    return i;
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
let d =[1,2,3,4].reduce((res , el) => (res * el ));
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

let newArr = [...arr];
console.log(newArr);

let chars = [..."abhishek warad"];
console.log(chars);

let odd = [1,3,5,7,9];
even = [2,4,6,8];

let num = [...odd , ...even];
console.log(num);


let data = {
    email: "abhishekwarad123@gmail.com",
    password : "abcd"
}

let copyData = {
    ...data, id: 2
}

console.log(copyData);

arr = [1,2,3,4,5,6];

let obj = {
    ...arr , id:"warad"
}

console.log(obj);

let string = "abhishek warad";

let obj2 = {
    ...string, id:"warad"
}
console.log(obj2);

arr = [{
    name : "abhishek",
    l_name : "warad"
},
{
    name : "adarsh", 
    l_name : "jange"
}]

console.log(arr);

obj = {
    ...arr
}

console.log(obj);

// Rest  
console.log();
console.log("*******************   REST  **********************");
console.log();

function sum(...args){
    for(let i = 0 ; i< args.length ; i++){
        console.log(`you gave me ${args[i]}`);
    }
}

sum(1,2,34,5,6,7,7);

function min(){
    console.log(arguments);
}

min(1,2,3,4 ,3,4,5);

function min(msg , ...args){
    console.log(msg);
    return args.reduce((min , el) => {
        if(el < min){
            return el;
        } else {
            return min;
        }
    })
}

res = min("minimum no is : ",34,12,5,6,32,12,4,1,54,3);
console.log(res);

// destructuring  
console.log();
console.log("*******************   DESTRUCTURING  **********************");
console.log();

let names = ["tony" , "bruce" , "xyz" , "abc"];

let [winner , runnerup] = names;

console.log(winner, runnerup);

let [winners , ...others] = names;

console.log("winners :",winners);

console.log("others :",others)


students = {
    name : "abhishek warad",
    age : 23 ,
    class : 12,
    subjects : ["math","science", "English"],
    username : "abhishekwarad123",
    password : "warad94444",
    city : "mumbai"
}

let {username , password} = students;

console.log(username);
console.log(password);


let {username : user , password : pass} = students;

console.log(user);
console.log(pass);


let {username : user1 , password : pass2 , city = "pune"} = students;
console.log(city);

let {city : place = "pune"} = students;
console.log(place);