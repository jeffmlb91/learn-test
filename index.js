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

fetchData()