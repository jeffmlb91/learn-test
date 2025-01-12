//Exercise 1: Primitive vs Object Reference

//Task: Write a function that modifies a primitive value and an object. Observe the effects outside the function.

function modifyValues(num, obj) {
    num += 10;

    console.log('local value of num is',num)
    obj.name = "Modified";
 
}

const numValue =5;
const objValue = { name: "Original"}
const car = "Toyota";

console.log("Before the function is called:");
console.log("numValue", numValue) 
console.log("objValue", objValue)

modifyValues(numValue, objValue)

console.log("After the function is called:")
console.log("numValue:", numValue) // copy of the value is passed. Any modification to the copied value inside the function does not affect the original value.
console.log("objValue:", objValue) //reference to the object is passed, meaning the function can modify the properties of the object directly, 


