// create object for a thread/twitter post 

const post ={
    username: "@abhishek warad",
    content: "This is my first post",
    likes: 150,
    reposts: 5,
    tags : ["@apnacollege","@elonmusk"]
}

console.log(post["username"]);
console.log(post.username);

const obj = {
    1:"a",
    2:'b',
    null: "c",
    undefined: "d",
    true: "e",
    ok:'f'
};

console.log(obj[1]);
console.log(obj[2]);
console.log(obj[null]);
console.log(obj[undefined]);
console.log(obj[true]);
console.log(obj[ok]);
console.log(obj["ok"]);

// console.log(obj.1);
console.log(obj.null);
console.log(obj.undefined);