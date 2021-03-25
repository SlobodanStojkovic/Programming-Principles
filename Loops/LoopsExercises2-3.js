/* LOOPS with Dario - 25.03.2021.


=========================================================================================
3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [222, 3, -4, 55, -12, 120]
=========================================================================================
*/

var arr = [222, 3, -4, 55, -12, 120];

var min = arr[0];
var index = 0;

for (var i =1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
        index = i;
    }
}

console.log("Minimum number is " + min, "\n" + "Index of minimum number is " + index);





/*
=========================================================================================
4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [222, 3, -4, 55, -12, 120, -6]
=========================================================================================
*/
var arr = [222, 3, -4, 55, -12, 120, -6];

var min = Infinity;
var nextMin = Infinity; // because infinity is biggest number

for (var i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
        nextMin = min;
        min = arr[i];
    } else if (nextMin > arr[i]) {
        nextMin = arr[i];
    }
}

console.log("Minimum number is " + min,"Next minimum number is " + nextMin);



//NESTED LOOP


for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 2; j++) {
        console.log("Counter of inner loop is (j): " + j);
    }
    console.log("Counter of outter loop is (i): " + i);
}





//Nested loop example


var array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
]

for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
    var innerArray = array[i];
    for (var j = 0; j < innerArray.length; j++) {
        console.log(element[j]);
    }
}




/*
======================================================================================
10. Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
======================================================================================
*/

//Dario's way

var arr = [2, -2, 33, 12, 5, 8], e= 78, p = 3;

var resArr = [];

for (var i = 0; i < arr.length; i++) {
    if (i === p) {
        resArr [resArr.length] = e; //This is how we include some element (član) on some place
    }
    resArr[resArr.length] = arr[i];
}

console.log(resArr);



//Borislav Ivanisevic

var a = [2, -2, 33, 12, 5, 8];
var p = 3;
var e = 78;

for(i = a.length; i >p; i--) {
    a[i] = a[i-1];
}
a[p] = e;

console.log(a);




