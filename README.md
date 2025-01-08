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


