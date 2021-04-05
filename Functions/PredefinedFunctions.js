/*
======================================================================================
1. Write a function that converts an array of strings into an array of numbers. Filter
out all non-numeric values.
Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000]
======================================================================================
*/


//Milena Statkic way of completing this task

var array = ["1", "21", undefined, "42", "1e+3", Infinity];

function isNumber(array) {
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


console.log(parseFloat(Infinity)); //Infinity
console.log(isFinite(Infinity)); //false

console.log(typeof (isFinite(5))); //boolean because isFinite(5) = true


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






var array = ["1", "21", undefined, "42", "1e+3", Infinity];

function nonNumeric(array) {
    var result = [];                            //we need an array as result, so that is why we put empty array
    for (var i = 0; i < array.length; i++) {
        var num = parseFloat(array[i]);         //we need parseFloat because it filters only numbers and everything else is NaN num = [1, 21, NaN, 42, 1000, Infinity], so now we are checking variable num to remove the NaN and Infinite
        if (isFinite(num)) {                   //if something is in IF we are checking that it is true
            result[result.length] = num;        // 1 === 0 index, we use result[result.length] to fill in the empty string, so instead of     writing index = 0 => result[index] = num, we write it like this
        }
    } return result;
}

console.log(nonNumeric(array));



/*
======================================================================================
2. Write a program to join all elements of the array into a string skipping elements
that are undefined, null, NaN or Infinity.
Input: [NaN, 0, 15, false, -22, "", undefined, 47, null]
Output: “015false-2247”
======================================================================================
*/

var array = [NaN, 0, 15, false, -22, "", undefined, 47, null];

function joinElements(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (isFinite(array[i]) && array[i] != null) {
            result += array[i];
        }
    } return result;
}

console.log(joinElements(array));



console.log(isFinite(false)); //true
console.log(isFinite(null)); //true
console.log(isNaN("")); 



/*
======================================================================================
3. Write a program to filter out falsy values from the array.
Input: [NaN, 0, 15, false, -22, "", undefined, 47, null]
Output: [15, -22, 47]
======================================================================================
*/

var array = [NaN, 0, 15, false, -22, "", undefined, 47, null];

function isFalsy(array) {
    var result = [];
    var j = 0;
    for (var i = 0; i < array.length; i++) {
        parse = parseInt(array[i]);
        if (!isNaN(parse) && parse != 0) {
            //result[j++] = array[i];
            result[j] = array[i];
            j++;
        }
    } return result;
}

console.log(isFalsy(array));




/*
======================================================================================
4. Write a program that calculates a number of integer values in the array.
Input: [NaN, 23.1, 15, false, -22.5, "", 4, 7, null]
Output: 3
======================================================================================
*/

var array = [NaN, 23.1, 15, false, -22.5, "", 4, 7, null];

function numberOfIntegers(array) {
    var count = 0;
    for (i = 0; i < array.length; i++) {
        var float = parseFloat(array[i]);     //float gives out [NaN, 23.1, 15, NaN, -22.5, NaN, 4, 7, NaN]  
        var int = parseInt(array[i]);         //int gives out   [NaN, 23, 15, NaN, -22, NaN, 4, 7, NaN]
        if (float == int && !isNaN(int)) {    //here we compare those two arrays and we remove the NaN values  
            count++;
        }
    } return count;
}

console.log(numberOfIntegers(array));


/*
======================================================================================
5. Write a program that calculates a number of float values in the array.
Input: [NaN, 23.1, 15, false, -22.5, "", 4, 7, null]
Output: 2
======================================================================================
*/

var array = [NaN, 23.1, 15, false, -22.5, "", 4, 7, null];

function numberOfFloats(array) {
    var count = 0;
    for (i = 0; i < array.length; i++) {
        var int = parseInt(array[i]);
        var float = parseFloat(array[i]);
        if (int != float && !isNaN(int)) {
            count++;
        }
    } return count;
}

console.log(numberOfFloats(array));