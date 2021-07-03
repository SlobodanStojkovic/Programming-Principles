/* With Dario Stamenkovic 3.7.2021. 

ES6 is backward compatible with ES5, which is backward compatible with ES3

Many ES6 features provide syntactic sugar for more concise code.

One goal of ES6 and beyond is to make JavaScript a better target for compliling to and from other languages.

TypeScript is not much different than JavaScript and is easier to work with.

LINTING TOOLS notify us if something is depricated or not.

ES5 works everywhere. We can write code in ES6 then use transpiler that will convert it all to ES5 and it will work for everyone.

Babeljs.io and typescriptlang.org

TypeScript is SUPERSET of JavaScript which has some additional rules. There are types of data, and they are strongly defined.

It is important to use some lining tool when writing JS. Saves time and reduces errors by catching coding issues before the code is run. Can be run from command-line, integrated into editors/IDEs, and run automatically when files are saved from any editor using tools like Grunt/Gulp.

Grunt is a great tool for automating web development tasks.
Gulp is similar in goal to Grunt, but configuration is different. 

It is highly recommended to use JSHint to check ES6 code. 

Declaring Variables in ES6

Prior to ES6, the only way to declare a variable was with the var keyword. We now have a few different options that provide improved functionality.

LET declares variables like var, but with block scope > not hoisted to beginning of enclosing block, so references before declaration are errors. Most uses of VAR can be replaces with LET (not if they depend on HOISTING);

LET HAS A BLOCK SCOPE, AND DOESNT HOIST.        >>> COMMON INTERVIEW QUESTIONS
VAR HAS FUNCTION SCOPE, AND IT HOISTS.

*/
if (true) {
    var a = 10;      //this code between {} is a block of code, so var inside here
    let b = 20;
}
console.log(a, b);  //ReferenceError: b is not defined because B is private scope INSIDE THE BLOCK




console.log(f);     //ReferenceError: Cannot access 'f' before initialization

let f = 10;     //so HOISTING doesnt happen when we use LET



//when a file defines a module, top-level uses of LET are file-scoped, unline VAR, so once we put several files together LET is only ONE FILE scoped

/*
CONST is used when we declare variables for which we are sure that their value will NOT CHANGE
*/

const a = 5;

a = 10;     //TypeError: Assignment to constant variable.   We CAN NOT chage its value.



const a = [1, 3, 5, 7];

a.push(5)

console.log(a);     //[ 1, 3, 5, 7, 5 ]  because it already has some refference in memory





const a = [1, 3, 5, 7];

let b = [];

a = b;      //TypeError: Assignment to constant variable.

a.push(5)

console.log(a);




//CONST declares constants with BLOCK SCOPE. CONST MUST BE INITIALIZED. Reference cant be modified, but object values can because we are changing reference. To prevent changes to object values, use Object.freeze(obj)

const a;    //SyntaxError: Missing initializer in const declaration       LET allows THIS.




let name = "Dario";
let age = "55";

let result = "Hello, my name is " + name + ". I am " + age + " years old."
console.log(result);    //Hello, my name is Dario. I am 55 years old.


//NEWER SYNTAX vvv  with `` > they are located ALT GR + 7

let result2 = `Hello, my name is ${name}. I am ${age} years old.`
console.log(result2);   //Hello, my name is Dario. I am 55 years old.   


let result3 =
    `Hello,
my name is ${name}
and I am ${age} years old.`

console.log(result3);
/*Hello,
my name is Dario
and I am 55 years old.
*/

//inside ${} we can use 100 + 200 or name.toUpperCase() and he will EVALUATE IT and put it INSIDE STRING (300) or NAME


//FUNCTIONS DEFAULT PARAMETERS

function sum(a, b) {
    return a + b;   //undefined + undefined
}
console.log(sum()); //NAN



function sum(a, b) {
    a = a || 0; //a = a OR 0
    b = b || 0;
    return a + b;
}
console.log(sum()); //0



//NEWER WAY vvv
function sum(a = 0, b = 0) {
    return a + b;
}
console.log(sum()); //0


//Default value expressions can return to preceding parameters. Explicitly passing undefined triggers use of default value

const today = new Date();
function makeDate(day, month = today.getMonth(), year = today.getFullYear()) {
    return new Date(year, month, day).to
}



//ENCHANCED OBJECT LITERALS

let name = "Pera";
let age = 33;

let person = {
    name: name,
    age: age
}

//ENHANCED allows this vvv

let name = "Pera";
let age = 33;

let person = {
    name,   //if they are same he will made property with the same name of variable.
    age,
}
console.log(person);



//Property method assignment > alternative way to attach a method to a literal object

const obj = {
    number: 2,
    multiply: function (n) { //OLD WAY
        return this.number * n;
    },

    times(n) {  //NEW WAY
        return this.number * n;
    }
}




//NEW BUILT-IN OBJECT METHODS

/* Math.fround(number) - returns the nearest single precision floating point to number
Math.sign(number) - returns sign of number; -1, 0 or 1
Math.trunc(number) - returns integer... 
.
.
.
 */


//NUMBERIC LITERALS

//Hexadecimal preceded with zero and x >>> 0xa === 10 > supported before ES6
//Octal preceded with zero and o >>> 0o71 === 57
//Binary preceded with zero and b >>>


//NEW STRING METHODS


//NEW ARRAY FUNCTIONS

//NEW ARRAY METHODS

let numbers = [1, -2, -3, 5, 10]

let hasAnyNegative = numbers.some(function (number) {
    return number < 0;
}) //if at least one it should return true

console.log(hasAnyNegative);





let numbers = [1, 2, 3, 5, 10]

let areAllPositive = numbers.every(function (number) {
    return number > 0;
}) //all conditions that we return must be true

console.log(areAllPositive);




let numbers = [1, 2, 3, 4, 5]

let result = numbers.reduce(function (accumulator, currentNumber) {
    accumulator += currentNumber;
    return accumulator;
}, 0)   //0 is begining value of accumulator
console.log(result);    //15




let strings = ["aaa", "bbb", "ccc"];
let result = strings.reduce(function (accumulator, currentString) {
    accumulator = `${accumulator} ${currentString}`
    return accumulator;
}, "Concatenated sentence is")   //0 is begining value of accumulator
console.log(result);    //Concatenated sentence is aaa bbb ccc






let a = [];
let b = [];

b = a;  //this works with let but with CONST vvv


const a = [1, 2, 3];
a.push(4);  //it allows it to add new elements or change existing ones but we CAN NOT write a = 3 or a = b because that way we have changed its reference, a = a.map() also DONT work because map returns new array
