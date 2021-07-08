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


/*
ES6 introduces class declaration, but JavaScript still works the same way. FUnctions are objects, and inheritance is handled through the prototype.

Once you ve created the class, you can create a new instance of the class using the new keyword.

Now that a class object has been created, you can use it as many times as you would like to create new vacation instances. Classes can also be extended. When a class is extended, the subclass inherits the properties and methods of the superclass. Superclass is a class that other classes inherit from.

Instance is object, its a new object created from a class. Class is a patern, some "factory of objects". Instance = Object.

class Expedition extends Vacation >>> means that Expedition inherits Vacation
*/

class Expedition extends Vacation {
    constructor(destination, length, gear) {
        super(destination, length)
        this.gear = gear
    }

    print() {
        super.print()   //takes print method that it inherited and 
        console.log("Bring your sunglasses and your camera.");  //adds console.log to it, so now new print method will have both
    }
}


/*
We should use classes, but with React for example we are focusing on the functional paradigm.

Classes have other features, like getters, setters, and static methods, but you should favor functional techniques over object-oriented techniques.
*/

class Person {
    constructor(name) {
        this.name = name
    }
    setAge(age) {
        this.age = age
    }
    getAge() {
        return this.age;
    }
}

let person1 = new Person("Pera");

//  person1.age = 22; is the same as code bellow
person1.setAge(22);

console.log(person1);
console.log(person1.getAge());

//GETTERS and SETTERS are methods that set or get properties from a class, as shown in example UP.




//METHODS CALLED directly on class without instancing Objects are STATIC methods.
Math.random() //Math is BUILT IN CLASS      These are STATIC METHODS, and most commontly those are UTILITY METHODS that serves like tool, some kind of utility.




/*
Using a class still means that you are using JavaScripts prototypal inheritance.

The rule of thumb with capitalization is that ALL TYPES SHOULD BE CAPITALIZED.
*/




/* DESTRUCTURING ASSIGNMENT vvv*/

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

let person1 = new Person("Pera", "Peric", 22);


function printFullName(person) {
    /* let firstName = person.firstName
    let lastName = person.lastName */   //instead of this, in ES6 we can use this > let { firstName, lastName } = person;
    let { firstName, lastName } = person;
    console.log(`${firstName} ${lastName}`)
}

printFullName(person1);     //Pera Peric




class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = {
            street: "Topolska",
            number: 18,
            city: "Na vratima pise"
        }
    }
}

let person1 = new Person("Pera", "Peric", 22);

function printAddress(person) {
    let { street, number, city } = person.address;
    console.log(`${street}, ${number}, ${city}`)
}

function printFullName({ firstName, lastName }) {
    console.log(`${firstName} ${lastName}`)
}

printFullName(person1)
printAddress(person1)



let dogs = ["Snaucer", "Samojed", "Haski"];

let [dog1, dog2] = dogs
console.log(dog1);  //Snaucer
console.log(dog2);  //Samojed       //if we want only Haski we will write let [, , dog3] = dogs


//The destructuring assignment allows you to locally scope fields within an object and to declare which values will be used. Consider this sandwich object. 


let clickHandler = function (e) {
    if (e.which === 13) {
        console.log("submit");
    }
}

//after DESTRUCTURING IS

let clickHandler = function ({ which }) {
    if (which === 13) {
        console.log("submit");
    }
}


//OR


let clickHandler = function ({ which: nameThatSuitsUs }) {
    if (nameThatSuitsUs === 13) {
        console.log("submit");
    }
}






/* ARROW FUNCTIONS vvv*/


function max(a, b) {
    var max;

    if (a > b) {
        return a;
    }

    if (b > a) {
        return b;
    }

    return 'Numbers are equal';

}


//written in ES6 is

const max = (a, b) => {
    if (a > b) {
        return a;
    }

    if (b > a) {
        return b;
    }

    return 'Numbers are equal';
}

/* If there is only one parameter and you are not using destructuring, parentheses can be ommited. Needs parentheses if there are no parameters. If there is only one expression, braces can be omitted. Its value is returned without using return keyword > the expression can be another arrow function that is returned. If expression is an object literal, wrap it in parentheses to distinguish it from block of code */




/* The REST/SPREAD Operator */

/* Gathers variable number of arguments after named parameters into an array. If no corresponding arguments are supplied, value is an empty array, not undefined. Removes need for use of arguments object. */


function capitalize(...args) {
    console.log(args);
    let newArray = [];
    args.forEach(element => {
        newArray.push(element.toUpperCase());
    });
    return newArray;
}

let capitalizedArray = capitalize("i", "you", "he", "she");

console.log(capitalizedArray);


//ARGUMENTS IS OBJECT LIKE but we cannot use forEach to them

//... is REST OPERATOR, and we use it before arguments, so he takes everything and put it in array.

const lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"]

const [first, ...whatsLeft] = lakes
console.log(first); //Donner
console.log(whatsLeft); //[ 'Marlette', 'Fallen Leaf', 'Cascade' ]





/* SPREAD OPERATOR */

const peaks = ["Tallac", "Ralston", "Rose"];
const canyons = ["Ward", "Blackwood"];

const tahoe = [...peaks, ...canyons]

console.log(tahoe)  //[ 'Tallac', 'Ralston', 'Rose', 'Ward', 'Blackwood' ]




const peaks = ["Tallac", "Ralston", "Rose"];
const copyPeaks = [...peaks];
console.log(copyPeaks); //[ 'Tallac', 'Ralston', 'Rose' ]   its copy of peaks, but it has OTHER REFFERENCE


copyPeaks.push("Something");
console.log(peaks);
console.log(copyPeaks); //[ 'Tallac', 'Ralston', 'Rose', 'Something' ]




const ob1 = { a: 1, b: 2 }
const ob2 = { c: 3, d: 4 }

const mergedObj = { ...ob1, ...ob2 }    //{ a: 1, b: 2, c: 3, d: 4 }

const copyOb1 = {...ob1};   //{ a: 1, b: 2 }
const extendedOb1 = {...ob1, e:5};  //{ a: 1, b: 2, e: 5 }
const extendedOb1AndBOverride = {...ob1, b:5};   //{ a: 1, b: 5 }



/* Spread operator can also be used for objects. Using it is similar to using it with arrays. */

let a = "something"
let b = "something else"

let obj = {
    a: a,
    b: b
}
console.log(obj);   //{ a: 'something', b: 'something else' }


//in ES6 we can write it like this vvv

let a = "something"
let b = "something else"

let obj = {
    a,
    b
}
console.log(obj);   //{ a: 'something', b: 'something else' }







let a = [2, 4, 5, 18, 22, 7];

console.log(Math.max(a));     //NaN
console.log(Math.max(...a));  //22  because we need sto spread array in order that Math.max can see it as parametars