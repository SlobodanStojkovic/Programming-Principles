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




