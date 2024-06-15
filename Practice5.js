//Function Expression

const greet = function(name){
    return `Hello ${name}!`;
};
console.log(greet("Bob"));


//Default Parameter

function greets(names = "Guest"){
    return `Hello, ${names}`;
}
console.log(greets());

//Rest Parameters

function sum(...numbers){
    return numbers.reduce((total,num) => total + num, 0);
}
console.log(sum(1,2,3));