//Prototype-based OOP: In JavaScript, objects are created from other objects using prototypes. Think of it as inheritance without classes: objects can directly inherit behavior and properties from other objects (prototypes). For example:

const car = { color: "red", make: "Acura"}
const myCar = Object.create(car);
console.log(`the car is ${myCar.color}`)

const house = { rooms: 4, kitchen: 1, livingRoom: 3, garden: true}
const myHouse = Object.create(house);
console.log(`the house has ${myHouse.rooms} and ${myHouse.livingRoom} living Room`)

//Type Coercion: This is when JavaScript automatically converts one data type to another to make operations work. For example, adding a string and a number:

console.log("5" + 5);

//Functional Programming: This paradigm focuses on pure functions, immutability, and higher-order functions. Pure functions produce the same output for the same input and avoid side effects. For example:

const add = (a, b) => a + b;
console.log(add(2,3))

//Asynchronous Programming: Asynchronous code allows tasks to run in the background while the program continues. Promises and async/await are common in JavaScript to handle asynchronous tasks like API calls. For example:

async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json()
    console.log(data)
}

//fetchData()

//Input Validation: Ensuring user inputs are valid prevents errors and security issues. For instance, validating a form field: javascript copy code

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email)

}

console.log(validateEmail("test@gmail.com")) //returns true

//Event Handling Reacting to user actions, such as button clicks or form submissions. In JavaScript:

// document.getElementById("submission").addEventListener('click', () => {
//     alert("button has been clicked")
//     console.log("Button has clicked")
// })

console.log("Test")
console.log("Test2")
// process.stdout.write("Hello there. ")
// process.stdout.write("Hello there 2")


// document.getElementById("prompt").addEventListener('click', () => {
//     const sayName = prompt("What is your name ?")
//     alert(`Hello ${sayName}`)  
// })

// const name = prompt("What is your name?")
// const answer = alert(`my name is ${name}`)
// //console.log(answer)

///const name = prompt("What is your name?")
//const answer = console.log(`my name is ${name}`)
//console.log(answer)


const temp1 = 36.9
const temp2 = 37.9
const temp3 = 38.9
console.log(temp1, temp2, temp3)

//const userInput = prompt("Enter a number")
//const responseValue = Number(userInput)
//console.log(responseValue)

//const secondUserResponse = Number(prompt('What is your name?'))
//alert(secondUserResponse)

// copying value 

const x = 10;
const y = 'abc';

const a = x;
const b = y;

console.log(x, y)
console.log(a, b)

// Primitive type example 

let firstNum = 10;
let copy = firstNum;

console.log(firstNum)
console.log(copy)


copy = 20

console.log(firstNum)
console.log(copy)

const firsValue = 10;
const secondValue = 'abc'

let newFirstVar = firsValue;
let newSecondVar = secondValue;

newFirstVar = 5;
newSecondVar = "Changed"

console.log(firsValue, secondValue, newFirstVar, newSecondVar )


// Reference type example,
const arr = [1, 2]

const copyArr = arr;

console.log(arr)
console.log(copyArr)

copyArr.push(7);
console.log(arr)
console.log(copyArr)


// The address stored in obj changes. The first object is still present in memory, and so is the next object:
// by reference, meaning the variable holds a reference (or pointer) to the memory location where the actual data is stored.
// there should be both obj in memory
let obj = { first: "reference"};
obj = { second: " reference 2"}
