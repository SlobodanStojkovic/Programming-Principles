/*
======================================================================================
1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no
======================================================================================
*/

var e = 3;
var a = [5, -4.2, 3, 7];
var result = 'no';

for (var i = 0; i < a.length; i++) {
    if (e === a[i]) {
        result = "yes";
        break;
    }
}
console.log(result);


/*
======================================================================================
2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
======================================================================================
*/

var array = [-3, 11, 5, 3.4, -8];

for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        array[i] = array[i] * 2;
    }
}
console.log(array);

/*
======================================================================================
3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
======================================================================================
*/

var array = [4, 2, 2, -1, 6];

var minIndex = 0;

for (var i = 0; i < array.length; i++) {
    if (array[i] < array[minIndex]) {
        minIndex = i;
    }
}

console.log(array[minIndex], minIndex);

console.log({ minValue: array[minIndex], minIndex: minIndex }); //Other way how we can call console.log

/*
======================================================================================
4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2
======================================================================================
*/

var array = [4, 2, 2, -1, 6];
var minIndex = 0;
var secondIndex = 0;
// minIndex is defined as 0, that is the starting point for comparisson

for (var i = 0; i < array.length; i++) {   // First for finds smallest element , and for each smaller number it changes value of minIndex who takes that value
    if (array[i] < array[minIndex]) {
        minIndex = i;
    } for (var x = 0; x < array.length; x++) { // Second for looks for number that is bigger than the smallest number and smaller than others, it also starts from proposition that it is the first number                                                        
        if ((array[x] < array[secondIndex]) && (array[x] > array[minIndex])) {
            secondIndex = x;
        }
    }
}
console.log(array[secondIndex]);


/*
======================================================================================
5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16
======================================================================================
*/


var array = [3, 11, 5, -3, 2];
var sum = 0;
for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        sum += array[i];
    }
}
console.log(sum);


/*
======================================================================================
6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric.
======================================================================================
*/

var array = [2, 4, -2, 7, -2, 4, 2];
var x = (array.length) - 1;
var z = 0;

for (var i = 0; i < array.length; i++) {
    if (array[i] == array[x]) {
        z++;
        x--;
    }
}

if (z == array.length) {
    console.log("yes")
} else {
    console.log("no")
}


/* Dario's way of doing it */

var arr = [1, 3, 4, 7, 4, 3, 1];

var result = true;

for (var start = 0, end = arr.length - 1; start < end; start++, end--) {
    if (arr[start] !== arr[end]) {
        result = false;
    }
}

result ? console.log('Array is symetric') : console.log('Array is not symetric');


/*
======================================================================================
7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
======================================================================================
*/

var array1 = [4, 5, 6, 2];
var array2 = [3, 8, 11, 9];
var newArray = [];
var x = 1;
var z = 0;

for (var i = 0; i < array1.length; i++) {
    newArray[z] = array1[i];
    newArray[x] = array2[i];
    x += 2; // x = x + 2       This can also be typed as x++      x++   -> TWICE
    z += 2; // z = z + 2
}
console.log(newArray);

//Second way of solving this 

var array1 = [4, 5, 6, 2];
var array2 = [3, 8, 11, 9];
var newArray = [];

for (var i = 0; i < array1.length; i++) {
    newArray[newArray.length] = array1[i];
    newArray[newArray.length] = array2[i];
}
console.log(newArray);



/*
======================================================================================
8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
======================================================================================
*/

var array1 = [4, 5, 6, 2];
var array2 = [3, 8, 11, 9];
var x = 0;
var newArray = [];

for (var i = 0; i < array1.length; i++) {
    newArray[x] = array1[i];
    x++;
} for (var z = 0; z < array2.length; z++) {
    newArray[newArray.length] = array2[z];
}
console.log(newArray);



/*
======================================================================================
9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]

Output array: [4, 6, 8]
======================================================================================
*/

var a = [4, 6, 2, 8, 2, 2];
var e = 2;
var x = 0;//1,2
var a2 = []

for (var i = 0; i < a.length; i++) {
    if (e !== a[i]) {
        a2[x] = a[i];
        x++;
    }
}

a = a2;
console.log(a);


/*
======================================================================================
10. Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
======================================================================================
*/


var a = [2, -2, 33, 12, 5, 8];
var p = 3;
var e = 78;


if (p > a.length) {
    console.log("error");
} else {
    a[p] = e;
    console.log(a);
}

