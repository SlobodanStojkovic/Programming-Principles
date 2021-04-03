/*
1. Write a function that converts an array of strings into an array of numbers. Filter
out all non-numeric values.
Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000]
*/


//Milena Statkic way of completing this task

var array = ["1", "21", undefined, "42", "1e+3", Infinity];

function isNumber (array) {
    var output = [];
    var j = 0;
    for (var i = 0; i < array.length; i++) {
        var parse = parseFloat(array[i]);
        if (isFinite(parse)) {
            output[j] = parse;
            j++;
        }
    } return output;
}

var result = isNumber(array);
console.log(result);


//Sandra Tasic way of completing this task

var array = ["1", "21", undefined, "42", "1e+3", Infinity];
var result = [];
var index = 0;

for (var i = 0; i < array.length; i++) {
    if (isFinite(array[i])) {
        result[index] = parseFloat(array[i]);
        index++;
    }
}

console.log(result);




/*
2. Write a program to join all elements of the array into a string skipping elements
that are undefined, null, NaN or Infinity.
Input: [NaN, 0, 15, false, -22, "", undefined, 47, null]
Output: “015false-2247”
*/

var array = [NaN, 0, 15, false, -22, "", undefined, 47, null];
var result = [];
var index = 0;

for (var i = 0; i < array.length; i++) {
    if (isFinite(array[i]) !== false) {
        result += array[i];
    }
}

console.log(result); //returns 015false-2247null NULL needs to be removed



/*
3. Write a program to filter out falsy values from the array.
Input: [NaN, 0, 15, false, -22, "", undefined, 47, null]
Output: [15, -22, 47]
*/

var array = [NaN, 0, 15, false, -22, "", undefined, 47, null];




/*
4. Write a program that calculates a number of integer values in the array.
Input: [NaN, 23.1, 15, false, -22.5, "", 4, 7, null]
Output: 3
*/

var array = [NaN, 23.1, 15, false, -22.5, "", 4, 7, null];



/*
5. Write a program that calculates a number of float values in the array.
Input: [NaN, 23.1, 15, false, -22.5, "", 4, 7, null]
Output: 2
*/

var array = [NaN, 23.1, 15, false, -22.5, "", 4, 7, null];

