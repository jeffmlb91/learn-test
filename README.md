# JavaScript Engines

## 1. Introduction:
JavaScript is run through JavaScript Engines. Whenever we need to execute JavaScript, JavaScript Engines are essential.

## 2. List of JavaScript Engines

Below are some JavaScript Engines:

- V8 — used by Google Chrome
- Rhino — used by Java applications
- SpiderMonkey — used by Mozilla Firefox
- JavaScriptCore — used by Swift, Objective-C, and C-based apps and also Safari
- Chakra (JavaScript) — used by Microsoft Edge
- Nashorn — used by JVM
- JerryScript — used by the Internet of Things
- The list shows many places that use JavaScript language and how different platforms use different JavaScript Engines. 

## 3. Values And Variables

### Values
In JavaScript, all data or chunks of data can be called values. Values come in different shapes and sizes, some mutable and others not. While the majority of values are an object type, JavaScript comes with other types of values as well.

- Values in JavaScript
Example	Type

| Example | Type |
| ------- | ---- |
| "Hello" |	String |
| [1, 2, 3] |	Array |
| function run(a, b)| 	Object |
| true |	Boolean |
| {"a": 1, "b": 2, "c": 3} |	Object |
| 100000 |	Number |

## 4 . Variable Mutation

### Mutation
Variable mutation is reassigning a variable to another value. This is simply done with the assignment operator =.

```js 
let fruits = "Mangoes"
fruits = "Apples"
```

The above slides show how assigning a variable into another value will reassign it to a new value while losing the link to the previous value.

`NOTE`: Lost values cannot be retrieved once you reach a point in the program where no variable is assigned to that value. JavaScript will destroy those values automatically.

### Copy values
We can use values through variables and assign them to other variables. We do this by assigning the variable to the other variable directly.

```js 
let fruits = "Mangoes"
let juicyFruit = fruits

```

## Value vs. Reference
Learn how some data types are copied by value and others by reference, and what this means when we write code. This concept is at the root of countless bugs that plague websites today. A simple look at computer memory explains what’s happening.


#### Primitive Types vs. Reference Types

Primitive types (e.g., numbers, strings) are passed by value, meaning a copy of the value is made.
Reference types (e.g., arrays, objects) are passed by reference, meaning the variable holds a reference (or pointer) to the memory location where the actual data is stored. 

### 1 . Primitives data types

Primitives refer to basic data types that are not objects and have no methods. Examples include numbers, strings, booleans, null, undefined, symbol, and bigint.

- Primitives data types:
  * Number
  * String
  * Boolean
  * Undefined
  * Null.
  * symbol
  * Bigint

Example

```
const x = 10; // Number
const y = 'abc'; //String
const z = null; //Null
```

When we assign these variables to other variables using =, we copy the value to the new variable. They are copied by value.


### 2. Objects

#### Assigning by Reference

When a reference type value, an object, is copied to another variable using =, the address of that value is what’s actually copied over as if it were a primitive. Objects are copied by copying the reference instead of by copying the value. The object itself is unchanged and static. The only thing copied is the reference, the address, of the object.

- The address stored in obj changes. The first object is still present in memory, and so is the next object:
- By reference, meaning the variable holds a reference (or pointer) to the memory location where the actual data is stored.
- There should be both obj in memory
```
let obj = { first: "reference"};
obj = { second: " reference 2"}
```

When there are no references to an object remaining, as we see for the address #234 above, the JavaScript engine can perform garbage collection. This just means that the programmer has lost all references to the object and can’t use the object anymore, so the engine can safely delete it from memory.

In this case, the object { first: 'reference' } is no longer accessible through any variables and is available to the engine for garbage collection.

## Comparing Objects

If we have two distinct objects and want to see if their properties are the same, the comparison operators will be of no use. We have to write a function that checks each property in both objects and makes sure they are the same. For two arrays, we’ll need a function that traverses the arrays and checks each item as it goes.

### Passing Parameters through Functions

When we pass primitive values into a function, the function copies the values into its parameters. It’s effectively the same as using =.

```JS
const firstNumber = 100;
const secondNumber = 2;

function multiply(x,y)  {
    return x * y;
}

const result = multiply(firstNumber, secondNumber)
console.log(result);

```

In the example above, we give `firstNumber` the value 100. When we pass it into multiply, the variable x gets that value, 100. The value is copied over as if we used an = assignment. Again, the value of `firstNumber` is not affected.

| variables | values | addresses | objects |
| --------- | ------ | --------- |-------- |
| firstNumber | 100 | #333 | function(x,y) {...} |
| secondNumber | 2 | 
| multiply | <#333> |
| x | 100 |
| y | 2 |



### Duplicating and changing an Object using
- First method:

In this function, we use JSON.stringify to transform the object we’re passed into a string, and then parse it back into an object with `JSON.parse.` This isn’t the best way to duplicate an object, but it’ll work here.

By performing this transformation and storing the result in a new variable, we’ve created a new object. The new object has the same properties as the original but it is a distinctly separate object in memory.

When we change the age property on this new object, the original is unaffected. This function is now pure. It can’t affect any object outside its own scope, not even the object that was passed in.

The new object needs to be returned and stored in a new variable or else it gets garbage collected once the function completes, as the object is no longer in scope.

```JS
function craftCars (car) {
    const newModel = JSON.parse(JSON.stringify(car));
    newModel.year = 2025;
    return newModel;
}

const toyota = {
    model: "Lexus",
    year: 2022,
    engineType: "V6"
}

const honda = {
    model: "Acura",
    year: "2021",
    engineType: "V6",
}

const releasedCar = craftCars(toyota);
const releasedCar2 = craftCars(honda);

console.log(toyota)
console.log(honda)

console.log(`new release is`, releasedCar)
console.log(`new release is`, releasedCar2)


```

### Second exmaple 

Lets look at the following 

```JS
    function changeAgeAndReference (someone) {
    someone.age = 25;
    someone = {
        name: "John",
        age: 50
    }
    return someone;
}

const personObject1 = {
    name: "Alex",
    age: 30,
}

console.log(personObject1) // This is the original object unchanged. changeAgeAndReference not called 

const personObject2 = changeAgeAndReference(personObject1);
console.log(personObject1) // 25
console.log(personObject2) //50

```
Why Does personObject1 Show 25?

- Pass-by-Reference Behavior:

When you pass `personObject1` to the `changeAgeAndReference` function, the variable `someone` points to the same `object` in `memory` as `personObject1`.
Thus, the line `someone.age = 25;` modifies the `age` property of the original object `(personObject1)`.

- Reassignment Does Not Affect the Original:

The line `someone = { name: "John", age: 50 }`; `reassigns` the `someone` variable to point to a `new object in memory`.
This does not affect the original object `(personObject1)` because `someone` is now disconnected from it.

    ``Visualization in Memory:
Before Function Call:
personObject1 points to: { name: "Alex", age: 30 }.
During Function Execution:
someone initially points to { name: "Alex", age: 30 }.
someone.age = 25 updates the object: { name: "Alex", age: 25 }.
someone = { name: "John", age: 50 } now points someone to a new object: { name: "John", age: 50 }.
After Function Execution:
personObject1: Still points to { name: "Alex", age: 25 }.
personObject2: Points to { name: "John", age: 50 }.
```
```JS
    Key Takeaways:

*** Modification vs. Reassignment *** :

Direct modifications (e.g., someone.age = 25) affect the original object because they operate on the same memory reference.
Reassignment (e.g., someone = {...}) creates a new object and disconnects the local variable (someone) from the original reference.
Effect on personObject1:

The change to someone.age before reassignment permanently affects personObject1.
Effect on personObject2:

The return value of the function ({ name: "John", age: 50 }) is a completely new object, unrelated to personObject1.

```