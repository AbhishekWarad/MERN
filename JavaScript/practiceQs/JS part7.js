// pq1 - Write a arrow function that returns the square of a number 'n'.

const squareN = (n) => (n*n);

console.log(squareN(2));


// pq2 -

function print() {
    let id = setInterval(() => {
        console.log("Hello world");
    } ,2000);
    setTimeout(() => {
        clearInterval(id);
        console.log("clear interval")
    },10000);
};

print();

