/* BUILT-IN OBJECTS with Dario Stamenkovic - 15.05.2021. 14:00

1. Data wrapper objects:
    - Object, Array, Function, BOolean, Number and String.
    - These objects correspond to the different data types in JavaScript. Exception of "undefined" and "null".

    Built-in object and built-in constructor are the same thing.

2. Utility objects

3. Error objects
*/

var primitiveString = "Hello";
console.log(typeof primitiveString); // "string"
console.log(typeof primitiveString.length); //number

var objString = new String("world");
console.log(typeof objString);   //"object"




function Recipe(n) {
    this.name = n;
}

var pizza = new Recipe("Pizza");


"potato".length; //6


Boolean(""); //false
Boolean(new String(""));    //true



var result = String({a: 33})
console.log(result);    //[object Object]



String(1); //"1"


//toUpperCase() and toLowerCase() transforms the capitalization of the string

var str = "Potato head";
str.toUpperCase();   //"POTATO HEAD"
str.toLowerCase();      //"potato head"

//charAt()

//indexOf() allows you to search within a string. If there is a match, the method returns the position at which the first match is found (position count starts at 0)

//lastIndexOf() starts the search from the end of the string (but the position of the match is still counted from the begining)



//we can chain use these methods
str.toLowerCase().indexOf("potato");   //0 >>> it starts at index 0




var pasta = new pizza.constructor("pasta");






var obj = {};

obj.x = 1;

Object.defineProperty(obj, "x", {
    value:1,
    writable: true,
    enumerable: true
});

var settings = {
    value:1,
    writable: true,
    enumerable: true
}


Object.defineProperty(obj, "x", settings);


console.log(obj);





var deadline = {};


Object.isExtensible(deadline); //true



deadline.date = "yesterday"; //"yesterday"

Object.preventExtensions(deadline);

Object.isExtensible(deadline); //false

deadline.report = true;
deadline.report; //undefined







console.log(Math.round(22.17)); //22
console.log(Math.round(22.5));  //23
console.log(Math.round(22.78)); //23

console.log(Math.ceil(22.01))   //23    CEIL returns CEIL value - it always increases decimal number
console.log(Math.floor(22.99))  //22    FLOOR returns FLOOR value - it decreases decimal number






function getRandomNumber(max, min){ 
    return Math.round((max - min) * Math.random() + min);
}
console.log(getRandomNumber(12, 1));




var randomNumber = getRandomNumber(12, 1);
console.log(randomNumber);




var today = new Date();

console.log(today);






var today = new Date();
console.log(today.getDay());    //6 because its Saturday
console.log(today.getMonth()); //returns 4 becaus months start from 0, january 0, february 1, march 2...


//timestamp is the number of milliseconds since the UNIX Epox, the January 1st 1970





