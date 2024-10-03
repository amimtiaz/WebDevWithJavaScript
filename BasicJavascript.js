
// forEach loop ==>
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Emma'];
names.forEach(function (value, index,array) {
    console.log(`${index} : ${value}`);
    console.log(value);
    console.log(index);
    console.log(array);

});

//  filter ==>

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19 },
    { name: "David", age: 15 }
  ];

  const adultUsers = users.filter(user => user.age >= 18);

  console.log(adultUsers);

// ---------------

const fruits = ["apple", "banana", "grape", "mango", "melon"];

const filteredFruits = fruits.filter(fruit => fruit.startsWith("m"));
console.log(filteredFruits);


//===============>>

const names = ['Alice', 'Bob', 'Charlie', 'David', 'Emma'];

// spread and rest operator

const copyNames = [...names];
// console.log(copyNames);

const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

const newObj = {...person};
// console.log(newObj);

function abcd(...rest){
    console.log(rest);
}

abcd(1,2,3,4,5,6,7,8,9,10);


function abck(a,b,c,...rest){
    console.log(a,b,c,rest);
}

abck(1,2,3,4,5,6,7,8,9,10);



//=========================>>


// Declaring variables
let name = 'John'; // String
let age = 30; // Number
let isActive = true; // Boolean

// Array
let fruits = ['Apple', 'Banana', 'Orange'];

// Object
let person = {
    name: 'John',
    age: 30,
    isActive: true
};

console.log(name, age, isActive, fruits, person);



// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Calling the function
console.log(greet('John'));


// Arrow function
const add = (a, b) => a + b;
console.log(add(5, 3));

==========================================
==========================================
    
// conditions
let age = 18;

if (age >= 18) {
    console.log('You are an adult');
} else {
    console.log('You are not an adult');
}

// Ternary operator
let result = age >= 18 ? 'Adult' : 'Not an adult';
console.log(result);


==========================================
==========================================
//Loops
// For loop
for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i}`);
}

// While loop
let count = 0;
while (count < 5) {
    console.log(`Count ${count}`);
    count++;
}

// For...of loop (for arrays)
let fruits = ['Apple', 'Banana', 'Orange'];
for (let fruit of fruits) {
    console.log(fruit);
}

============================================
=======================================
    
//DOM Manipulation    
// Selecting an element
let heading = document.querySelector('h1');

// Changing the text content
heading.textContent = 'Hello, World!';

// Changing the style
heading.style.color = 'blue';

==========================================
==========================================
    
// Event Handling
// Adding a click event listener
document.querySelector('button').addEventListener('click', () => {
    alert('Button clicked!');
});


