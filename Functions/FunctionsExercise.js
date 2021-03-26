/*
1. Write a program that calculates the maximum of two given numbers.
*/

function maxNum(num1, num2) {
    if(num1 >= num2) {
        return num1;
    } else {
        return num2
    }
}

console.log(maxNum (10, 22))



/*
2. Write a program that checks if a given number is odd.
*/



function isOdd(num) {
    var odd = "Number is odd"
    var even = "Number is even"
    if(num % 2 !== 0) {
        return odd;
    } else {
        return even;
    }
}

console.log(isOdd(27));



/*
3. Write a program that checks if a given number is a three digit long number.
*/


function is3digit(num) {
    if(num / 100 >= 1 && num / 100 < 0) {
        return "Broj " + num + " is a three digit long.";
    }
    else return "Number " + num + " is not three digit long."
}

console.log(is3digit(-999));

//This function needs to be writted otherwise if its meant to include negative numbers.  


/*
4. Write a program that calculates an arithmetic mean of four numbers.
*/












/*
5. Write a program that draws a square of a given size. For example, if the size of square
is 5 the program should draw:
*****
* *
* *
* *
*****
*/











/*
6. Write a program that draws a horizontal chart representing three given values. For
example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * *
*/





/*
7. Write a program that calculates a number of digits of a given number.
*/





/*
8. Write a program that calculates a number of appearances of a given number in a given
array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3
*/

var a = [2, 4, 7, 8, 7, 7, 1], e = 7;

function numberOfApeareances(array, number) {

}



/*
9. Write a program that calculates the sum of odd elements of a given array.
*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;

function sumOdd(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i[arr] % 2 != 0) {
           return sum = sum + i[arr];
        }    else return "All numbers are even"
    } 
}
console.log(sumOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // Function needs to be corrected

/*
10. Write a program that calculates the number of appearances of a letter a in a given string.
Modify the program so it calculates the number of both letters a and A.
*/





/*
11. Write a program that concatenates a given string given number of times. For example, if
“abc” and 4 are given values, the program prints out abcabcabcabc.
*/
