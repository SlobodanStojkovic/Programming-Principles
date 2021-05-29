/*
The built-in objects can be divided into 3 groups:
1. Data wrapper objects:
- Object, Array, Function, Boolean, Number and String.
- These objects correspond to the different data types in JavaScript. Exception of "undefined" and "null".
2. Utility objects
- Math, Date and RegExp.
3. Error objects
- Generic Error object as well as other specific objects.

Constructors are functions that are called up with "new".

Usually, a script "dies" (immediately stops) in case of an error, printing it to console.

It is good that our programs have a mechanism that if an error happens they can recover from it in a graceful manner. (If error happens that code continues to execute).

Error objects are created by using one of the built-in constructors:
- EvalError
- RangeError
- ReferenceError
- SyntaxError
- TypeError
- URIError

In order to trap the error is the try statement followed by a catch statement.

*/


console.log(1 + 5);

console.log(44 + 66);




var sum = function () {
    console.log(a);
}



/*
var sum = function () {
    throw {name: "SomeOurError", message: "There was an catastrophic error"}    //we are throwing error
}

sum();
*/

//best would be to use new constructor

/*
var sum = function () {
    throw new Error ("There was an catastrophic ERROR in our CODE")    //we are throwing error
    //throw{name: "SomeOurError", message: "There was an catastrophic ERROR"}
}

sum();
*/


try {
    console.log("something else");
    sum();                           //a is not defined, but the something error will not be shown if this is written before it.
    console.log(something);          // First error is always shown, thats why this wont execute
    console.log("again something else"); //this wont be executed because its in try after error
} catch (error) {
    console.log("There was an error");
    console.log(error.message); //"something is not defined" If error happens it executes everything that is in the CATCH block
} finally {                     // finally will execute in any case > complete that thing even if all dies
    console.log("Bye");
}

//most ofthen in TRY CATCH block we put FETCHing from servers

console.log("Ciao");
console.log("Here I am");


//try...catch only works for runtime erors.
//Syntax error will break the code immediatly

//JavaScript engine first reads the code and then runs it. The errors that occur in the reading phrase are called "parse-time" errors and are unrecoverable (from inside that code). That is because the engine cant understand the code.

//When an error occurs, JS generates an object containing the details about it. The object is then passed as an argument to catch block.

//The Error object inside catch block has two main properties:
// - name (Error name. For an undefined variable that is "Reference Error")

// - message (Textual message about error details)

// error.stack  - prints the whole error

// error.name   - prints error name example RefferenceError



//EXERCISES vvv

var s = 10;
var b = 5;

try {
    console.log(s);
    console.log(s + c);
    console.log("This will never execute because of error above.")
} catch (err) {
    console.log("There was an error");
    console.log(err.name, err.message);   //ReferenceError c is not defined

} finally {
    console.log("Hello from FINALLY");
}

console.log(s + b);

/*
throw {
    name: "My error",
    message: "Some kind of error"
}
*/

throw new Error ("something happened");
console.log(s + b);




