//With Ivan Balic - 24.04.2021. 11:50

/*Object is a representation of a "thing" (someone or something), and this representation is expressed with the help of a programming language. The thing can be anything - a real-life object, or a more convoluted concept.

Taking a common object like a cat for example, you can see that it has certain characteristics (color, name, weight, and so on) and can perform some actions(meow, sleep, hide, escape, and so on).

The characteristics of the object are called PROPERTIES in Object Oriented Programming - speak, and the actions are called METHODS.
*/

var cat = {};                   //for objects we use CURLY BRACKETS NOTATION

console.log(typeof cat);        //object


/*
There is also an analogy with the spoken language:
Objects are most ofthen named using nouns (book, person...)
Methods are verbs (read, run, and so on);
Values of the properties are adjectives (gray, black)

"The black cat sleeps on the mat".

"The cat" (a noun) is the object, "black" (adjective) is the value of the color property and "sleeps" (verb) is method.
*/

var myArr = ["red", "blue", "yellow", "purple"];


/* camelCase - each word in name of variable starts with big letter
    kebab-case - a line between words
    snake_case - underscore between words
*/

var hero = {
    name: 'Leonardo',
    kind: 'Turtle',
    occupation: 'Ninja'
};

/* It is reccomended that you dont quote the names of the properties, but there are cases when you must use qoutes:

1. If the property name is one of the reserved words in JavaScript.
2. If it contains spaces or special characters (anything other than letters, numbers and the _ and $ characters)
3. If it starts with a number

If the name you have chosen for a property is not a valid name for a variable in JS then you need to wrap it in "" or ''.

Defining an array with [] is called ARRAY LITERAL NOTATION, defining an object with {} is called OBJECT LITERAL NOTATION.

Arrays contain ELEMENTS, Objects contain PROPERTIES.

Properties that point to functions are also called METHODS.



REGULAR ARRAY - keys are numbers
ASSOCIATIVE ARRAY - keys are strings.


Accessing an Objects Properties: vvv

1. Using the square bracket notation:
hero['occupation']


2. Using the DOT NOTATION, for example:        USED IN 99% cases, but cannot be always used - if the name of the property is not a valid variable name then we must use square bracket notation.

hero.occupation




Calling an Objects Methods

Calling (invoking) a method is the same as calling any other function.
*/


var a = {name: 'Dario', age: 50}
b = a;

b.hasDog = false;

console.log(a); //Both give same result { name: 'Dario', age: 50, hasDog: false }
console.log(b); //This gives out the same result because they reference to the same space in memory so changes in one affect other also.






var a = ["Dario", 50, false, false];

console.log(a[0]);          //in arrays we access data like this
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);



var person = {name: "Dario", age:50, hasDog:false, hasCat:false, talk:function() {console.log("bla bla bla")}};

console.log(person.name);   //in Objects we access data like this
console.log(person.age);
console.log(person.hasDog);
console.log(person.hasCat);
person.talk()





var c = 33;

function sum(num1, num2) {
    c = 44; //this changes the c in global scope (it was 33, now is 44) and that is why this function is NOT CLEAN
    return num1 + num2;
}





function addElement(arr, element) {
    arr[arr.length] = element;
}

var someArray = [1, 2, 3];

addElement(someArray, 100);     //this function also is NOT CLEAN because it changed something outside its scope

console.log(someArray);

//PURE FUNCTIONS are those that dont affect anything in the outside scope as pure functions.






var a = [1, 2, 3]
var b = a;

b[b.length] = 20;

console.log(a); //[ 1, 2, 3, 20 ]
console.log(b); //[ 1, 2, 3, 20 ]





//This way we can evade changing a vvv

var a = [1, 2, 3]

function copyArray(arr) {
    var copy = [];
    for (var index = 0; index < arr.length; index++) {
        copy[index] = arr[index];
    }
    return copy;
}

var b = copyArray(a);

b[b.length] = 20;

console.log(a); //[ 1, 2, 3]
console.log(b); //[ 1, 2, 3, 20 ]





// PUSH adds elements on end of array - PUSH is built-in method on array    PUSH returns new array lenght if called

var someArray = [12, 33, 44];

var newLenght = someArray.push(100);

console.log(someArray);
console.log(newLenght);

//POP throws out last element of array

var someArray = [12, 33, 44];

var deletedElement = someArray.pop();

console.log(someArray);
console.log(deletedElement);            //POP returns element we deleted




//SHIFT deletes first element and returns deleted element

var someArray = [12, 33, 44];

var deletedElement = someArray.shift();

console.log(someArray);
console.log(deletedElement);


//indexOf

//includes

//slice is pure function because it returns new array that returns sliced piece of original array. Slice without parametars returns a new array same as we choose and it is a great way how to copy an array

//toString

//SPLIT calls upon a string and separates that string into multiple strings that will be put into array. if we put a letter inside brackets ("0") then it will not display that letter in array.

//MAP