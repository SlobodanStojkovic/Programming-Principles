/*
======================================================================================
Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [5, 32, -11, 8, 4, 2, 2, -1, 6, -100]
Output: -100, 9
======================================================================================
*/


var num = [5, 32, -11, 8, 4, 2, 2, -1, 6, -100];
var out = "";
var min = num[0];
var index = 0;



for (i = 0; i < num.length; i++) {
    if (num[i] < min) {
        min = num[i];
        index = i;
    }
}
console.log("Lowest number is " + min + "\n" + "Index of lowest number is " + index)



/*
======================================================================================
4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [32, 56, 88, 4, 2, 0, -1, 6, -10, 10, 22, -100, -33]
Output: 2
======================================================================================
*/

var array = [32, 56, 88, 4, 2, 0, -1, 6, -10, 10, 22, -100, -33];
var min = array[0];
var min2 = array[1];
var index = 0;

for (i=0; i < array.length; i++) {
    if(min > array[i]) {
        min = array[i];
        index = i;
    }
  
} 

for (i=0; i < array.length; i++) {
    if(array[i] < min2 && array[i] !== min) {
        min2 = array[i];
    }
}
console.log("First element larger than minimum is " + min2);




/*
======================================================================================
7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
======================================================================================
*/

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var c = [];
var j = 0;


for (var i = 0; i < a.length; i++) {
    j = 2*i; //because the index needs to be 2 times bigger in c[]
    c[j] = a[i]; //c[j] is written first because we want to give it number from a[i]
    c[j+1] = b[i]; //j+1 because we want it on second place in array
}
console.log(c);


