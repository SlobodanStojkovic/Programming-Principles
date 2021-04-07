/*
======================================================================================
1. Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no
======================================================================================
*/

var e = 3;
var a = [5, -4.2, 3, 7];

function isElementInArray(element, array) {
    var result = "";
    for (i = 0; i < array.length; i++) {
        if (element === array[i]) {
            result = "yes";
            break;
        } else {
            result = "no";
        }
    } return result;
}

console.log(isElementInArray(3, [5, -4.2, 3, 7]));
console.log(isElementInArray(3, [5, -4.2, 18, 7]));


/*
======================================================================================
2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
======================================================================================
*/

var array = [-3, 11, 5, 3.4, -8];

function multiplyPositive(array) {
    result = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            result[i] = + array[i] * 2;
        } else {
            result[i] = + array[i];
        }
    } return result;
}

console.log(multiplyPositive([-3, 11, 5, 3.4, -8])); // [ -3, 22, 10, 6.8, -8 ]


/*
======================================================================================
3. Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
======================================================================================
*/

var array = [4, 2, 2, -1, 6];

function minimumAndItsIndex(array) {
    var minIndex = 0;
    var result = "";
    for (i = 0; i < array.length; i++) {
        if (array[i] <= array[minIndex]) {
            minIndex = i;
            result = "Minimum is " + array[minIndex] + " and its index is " + minIndex + " .";
        }
    } return result;
}

console.log(minimumAndItsIndex([4, 2, 2, -1, 6]));

/*
======================================================================================
4. Write a program that finds the second smallest number and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2
======================================================================================
*/

var array = [4, 2, 2, -1, 6];

function secondSmallest(array) {
    var minIndex = 0;
    var secondMin = 0;

    for (i = 0; i < array.length; i++) {
        if (array[i] < array[minIndex]) {
            minIndex = i;

        } for (var j = 0; j < array.length; j++)
            if (array[j] < array[secondMin] && array[j] > array[minIndex])
                secondMin = j;

    } return "The seconds smallest number is " + array[secondMin];
}
console.log(secondSmallest([4, 2, 2, -1, 6]));                                          //EXTRA ATTENTION FOR THIS TASK




/*
======================================================================================
5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16
======================================================================================
*/

var array = [3, 11, -5, -3, 2];

function sumPositive(array) {
    var result = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            result += array[i];
        }
    } return result;
}

console.log(sumPositive([3, 11, -5, -3, 2]));


/*
======================================================================================
6. Write a program that checks if a given array is symmetric. An array is symmetric
if it can be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric.

======================================================================================
*/

var array = [2, 4, -2, 7, -2, 4, 2];

function isSymetric(array) {
    var result = "";
    for (i = 0; i < array.length; i++) {
        for (var j = (array.length - 1); j >= 0; j--) {
            if (array[i] == array[j]) {
                result = "The arrays are symmetric";
            } else {
                result = "The arrays are not symmetric";
            }
        }
    } return result;
}

console.log(isSymetric([2, 4, -2, 7, -2, 4, 2]));
console.log(isSymetric([3, 4, 12, 8]));


/*
======================================================================================
7. Write a program that intertwines two arrays. You can assume the arrays are of the same length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
======================================================================================
*/

function interwineArrays(array1, array2) {
    var result = [];
    var index1 = 0;
    var index2 = 1;
    for (i = 0; i < array1.length; i++) {
        result[index1] = array1[i];
        index1 = index1 + 2;
    } for (j = 0; j < array2.length; j++) {
        result[index2] = array2[j];
        index2 = index2 + 2;
    } return result;
}

console.log(interwineArrays([4, 5, 6, 2], [3, 8, 11, 9]));


/*
======================================================================================
8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
======================================================================================
*/

function concatenateArrays(array1, array2) {
    var result = [];
    for (i = 0; i < array1.length; i++) {
        result[i] = array1[i];
    } for (j = 0; j < array2.length; j++) {
        result[result.length] = array2[j];
    } return result;
}
console.log(concatenateArrays([4, 5, 6, 2], [3, 8, 11, 9]));


/*
======================================================================================
9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]
======================================================================================
*/

function deleteElement(element, array) {
    var result = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] != element) {
            result[result.length] = + array[i];
        }
    } return result;
}

console.log(deleteElement(2, [4, 6, 2, 8, 2, 2]));

/*
======================================================================================
10. Write a program that inserts a given element e on the given position p in the array a.
If the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
======================================================================================
*/

function insertElement(element, position, array) {
    var result = [];
    if (position > array.length - 1) {
        result = "Error, the position is greater than the array lenght."
    } else {
        for (i = 0; i < array.length; i++) {
            if (i === position) {
                result[result.length] = element;        //element is 78
                result[result.length] = array[i];       //this writes numbers from array a
            } else {
                result[result.length] = array[i];
            }
        }
    } return result;
}   

console.log(insertElement(78, 3, [2, -2, 33, 12, 5, 8]));



