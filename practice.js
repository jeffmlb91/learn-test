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


//Copying vs Cloning Objects


/**
 *Task: Create a shallow and a deep copy of an object. Change the nested property in each and observe the differences.
 */
/**
 * Real-World Use Case: When fetching and processing data in an application, shallow and deep copies are essential for avoiding bugs caused by unintentional shared references.
 */

//Orgininal object 

const originalObj = {
    a: 1,
    b: {
        c: 2
    }
}

//Creating a shallow copy 
/**
 * A shallow copy copies only the first level of properties. If a property is an object, it copies the reference to that object, not the actual object.
    Changes to nested objects in the shallowCopy will affect originalObj because they share the same reference for the nested object.

 */

const shallowCopy = {...originalObj} ;
console.log(`shallow copy is ${shallowCopy}`) // shallow copy is [object Object]
console.log(`shallow copy is ${JSON.stringify(shallowCopy)}`) // shallow copy is {"a":1,"b":{"c":2}}

console.log("Shallow copy is ", shallowCopy)

//creating a deep copy 

/**
 * A deep copy creates an entirely new copy of the object, including all nested objects and arrays. Changes to the deepCopy will not affect originalObj.
    However, this method does not handle non-serializable data like functions, undefined, or special objects like Date.

 */

const deepCopy = JSON.parse(JSON.stringify(originalObj));
console.log("Deep copy is ", deepCopy)


shallowCopy.b.c = 42;
deepCopy.b.c = 99;

console.log("Original ", originalObj ); // the original object has been changed
console.log("Shallow Copy ", shallowCopy);
console.log("Deep Copy ", deepCopy);

console.log( shallowCopy === deepCopy )
console.log( originalObj === deepCopy )


//Exercise 3: Array References
/**
 * Task: Create an array, pass it to a function, and modify its content. Observe how the changes affect the original array.
 */
// Real-World Use Case: Managing lists in stateful applications, ensuring no side effects when updating items (e.g., a shopping cart).

function modifyArray(arr) {
    arr.push(4);
}

const originalArray = [1, 2, 3]
const changdedArray = modifyArray(originalArray)

console.log(originalArray)

const shallowCopyOfArray = [...originalArray]
const deepCopyArray = JSON.parse(JSON.stringify(originalArray))
console.log("deep copy is ", deepCopyArray)

console.log(deepCopyArray === shallowCopyOfArray)


const secondArray = ["Bob", "Paul", "Mark", 3];

const shallowSecondArray = [...secondArray];
console.log('Shallow copy is ', shallowSecondArray)

const deepSecondArray = JSON.parse(JSON.stringify(secondArray))
console.log('deep copy is ', deepSecondArray)


shallowSecondArray.push("Amelie");
console.log(shallowSecondArray)
console.log('deep copy is ', deepSecondArray)


//Exercise 4: Reassigning References
/**
 * Task: Reassign a reference within a function and observe the effects.
 */


function reassignReference (obj) {
    obj.name = "Changed" // Modifies the original
    obj = { name: "Reassigned"}
    console.log(obj)
    return obj;
}

const myObject = { name: "Original"};
console.log(myObject);

const newObject = reassignReference(myObject);
console.log(newObject)

//Exercise 5: Avoiding Mutation
/**
 * Task: Write a function that modifies an object without mutating the original one.
 */

function immutableChange(obj) {
    return {
        ...obj,
        age: obj.age +1,
    };
}

const originalPerson = {
    name: "Alice",
    age: 25,
}

const updatedPerson = immutableChange(originalPerson)
console.log("Original Person", originalPerson);
console.log("Updated Person", updatedPerson)

//Exercise 6: Circular References

const circularObject = {};
circularObject.self = circularObject;

try {
    const deepCopy = JSON.parse(JSON.stringify(circularObject));
} catch (error) {
    console.log("Error copying circular reference", error.message)
}

//Coding Challenge: Celsius to Fahrenheit Conversion


//const askTempInCelcius = prompt("What is the temperature in Celsius?");

// function celToFar (n) {
//     return ((n * 9.0 / 5.0) + 32.0);
// }

//convert the input into a number
//const tempInCelcius = parseFloat(askTempInCelcius);

// Pass the conversted number to the function

//const temperatureInFar = celToFar(tempInCelcius);

//alert(`The temperature is ${temperatureInFar}`)


//Another solution


// const tempCel = Number(prompt("Enter temperature in celcius"));
// const tempFar = tempCel *9/5 + 32;
// console.log(`${tempCel} degree celcius is equal to ${tempFar} degree Fahrenheit`)



// const askUserAboutTemp = Number(prompt("What is the temperature in celcius ?"))

// const tempConverted = askUserAboutTemp * 9/5 + 32;
// alert(`The temperature is ${tempConverted}`)


//Task: Write a function that modifies a primitive value and an object. Observe the effects outside the function.

function modifyValue(numerical, obj) {
    numerical = 10;
    obj.b.age = 23;
    obj.b.hasDriverLicense = true;
}

const numb = 20;
const myObjectP = {
    a: 5,
    b: {
        name: "Paullette",
        lastName: "Denzel",
        age: 25,
        hasDriverLicense: false
    }
}



// Displaying original object before the function is called
console.log("My original object is", myObjectP);

//Displaying the value of the object and primative after the function has been called.

modifyValue(numb, myObjectP)
console.log("After the function has been called ", myObjectP)


//Second example

function changeValue (num, obj) {
    num += 10;
    obj.name = 'Christine';
    console.log("Local value of Num", num)

}

const theObj = { name: "Paul"}
const numVal = 15;
console.log("Original value of NumVal:", numVal);
console.log("Original value the object: ", theObj)

changeValue(numVal, theObj);
console.log(changeValue)

console.log("NumVal after function is called:", numVal);
console.log("Value the object after function is called: ", theObj)


circularObj.self = circularObj;
JSON.parse(JSON.stringify(circularObj));


let temp = var1;
var1 = var2;
var2 = temp;