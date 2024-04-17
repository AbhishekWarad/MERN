// qs1 - Write a JavaScript funcction that returns unique characters from a string

let a = [8,9,10,1,2,3,4,5,6,7];

function largerNumber(a,n){
    for(i=0 ; i<= a.length ; i++){
        if (a[i] > n){
            console.log(a[i]);
        }
    }
}
// largerNumber(a,3);


// qs 2 - Write a JS function to extract unique characters from a string.
// EX - str = "abcddeeffggh"
//      ans = "abcdefgh"

function uniqueString(string) {
    let result = "";
    for(let i=0; i<string.length; i++){
        let currChar = string[i];
        if(result.indexOf(currChar) == -1){
            result = result + currChar;
        }
    }
    return result;
}

console.log(uniqueString("abhishek"));


//qs 3 - Write a JS fnction that accepts a list of contry names as input and returns the longest country name as output.
// EX - country = ["Australia","Germany","United States of America"]
//      output = "United States of America"

function longestString(arr) {
    let largest = 0;
    let len = 0;
    for(let i=0 ; i < arr.length ; i++){
        if(arr[i].length > len){
            len = arr[i].length;
            largest = i;
            temp = 0;
        }
    }

    console.log(arr[largest]);
}


let country=["Australia","Germany","United States of America"];
console.log(longestString(country));