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