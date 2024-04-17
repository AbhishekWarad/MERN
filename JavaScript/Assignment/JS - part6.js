// qs1 - Write a JavaScript funcction that returns unique characters from a string

let a = [8,9,10,1,2,3,4,5,6,7];

function largerNumber(a,n){
    for(i=0 ; i<= a.length ; i++){
        if (a[i] > n){
            console.log(a[i]);
        }
    }
}
largerNumber(a,3);