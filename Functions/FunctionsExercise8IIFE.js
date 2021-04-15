/*

IIFE = Immediately Invoked Function Expressions
======================================================================================
1. Write IIFE that replaces the first and the last element of the given array and 
prints out its elements. 
Input array: [4, 5, 11, 9]
Output array: [ 9, 5, 11, 4]
======================================================================================
*/


var replaceFirstAndLastElement = (function (array) {
    var result;
    for (i = 0; i < array.length; i++) {
        if (i == 0) {
            result = array;
            first = array[0];
            result[0] = array[array.length - 1];
            result[array.length - 1] = first;
        }
    } return result;
})([4, 5, 11, 9]);

console.log(replaceFirstAndLastElement);



//Aleksandar Bisevac way of solving this task


var output = (function (array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (i === 0) {
            result[result.length] = array[array.length - 1];
        } else if (i === array.length - 1) {
            result[result.length] = array[0];
        } else {
            result[result.length] = array[i];
        }
    } return result;
})([4, 5, 11, 9]);

console.log(output);


/*
======================================================================================
2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
Input: 4 5
Output: 20
======================================================================================
*/


var surfaceArea = (function (a, b) {
    var result = a * b;
    return result;
})(4, 5);

console.log(surfaceArea);


/*
======================================================================================
3. Write IIFE that replaces all appearances of the letters m or M with * and returns
the number of replacements.
Input: prograMming
Output: progra**ing, 2
======================================================================================
*/

var replaceAllLettersM = (function (string) {
    var output = "";
    count = 0;
    for (i = 0; i < string.length; i++) {
        if (string[i] === "m" || string[i] === "M") {
            output += "*"; 
            count++;
        } else {
            output += string[i];
        }
    } return [output, count];

})("prograMming");

console.log(replaceAllLettersM);


/*
======================================================================================
4. Write a function with parameters name and surname that returns a function that
suggests an email in the form name.surname@gmail.com.
Input: pera peric
Output: pera.peric@gmail.com
======================================================================================
*/


var formEmail = (function (name, surname){
    var result = name + "." + surname + "@gmail.com";
    return result;
})("pera", "peric");

console.log(formEmail);


/*
======================================================================================
5. Write a function that returns a function that calculates a decimal value of the
given octal number.
Input: 034
Output: 28
======================================================================================
*/




/*
======================================================================================
6. Write a function that checks if a given string is valid password. The password is
valid if it is at least 6 characters long and contains at least one digit. The function
should receive two callbacks named successCallback and errorCallback that should be called
in case password is correct or invalid.

Input: JSGuru
Output: Your password is invalid!

Input: JSGuru123
Output: Your password is cool!
======================================================================================
*/







/*
======================================================================================
7. Write a function that filters elements of the given array so that they satisfy a
condition given by the callback function.
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3]
======================================================================================
*/