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


