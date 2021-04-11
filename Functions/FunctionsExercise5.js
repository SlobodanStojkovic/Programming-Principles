/*
======================================================================================
1. Find the min and max element in the following array and switch their places. 
Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
======================================================================================
*/

function changeMinAndMax(array) {
    {
        result = array;
        var minIndex = 0;
        var minvalue = 0,
        var maxIndex = 0;
        var maxvalue = 0;

        for (i = 0; i < array.length; i++) {
            if (array[i] < array[minIndex]) {
                minIndex = i;
                minvalue = array[minIndex];
            }
        } for (j = 0; j < array.length; j++) {
            if (array[j] > array[maxIndex]) {
                maxIndex = j;
                maxvalue = array[maxIndex];
            }
        }
        result[minIndex] = maxvalue;
        result[maxIndex] = minvalue;
    } return result;
}

console.log(changeMinAndMax([3, 500, 12, 149, 53, 414, 1, 19]));


/*
======================================================================================
2. Use the following array to make a new one by dividing its values by two and adding 5.
If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]
======================================================================================
*/

function divide2Add5Array(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        num = array[i] / 2 + 5;
        if (num !== 0) {
        } else {
            num = 20;
        } result[result.length] = num;
    } return result;
}
console.log(divide2Add5Array([3, 500, -10, 149, 53, 414, 1, 19]));


/*
======================================================================================
3. Initialize two arrays. The first one should contain student names, the second one
the number of points for each student. Display students' names with their corresponding grade.
Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input:
[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output:
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.
======================================================================================
*/



function studentPoints(students, points) {
    var result = [];
    var index1 = 0;
    var index2 = 1;
    for (i = 0; i < students.length; i++) {
        result[index1] = students[i];
        index1 += 2;
        result[index2] = points[i];
        index2 += 2;

    } var x = 0;
    var y = 1;
    var grade = 0;
    var result2 = "";
    for (j = 0; j < result.length / 2; j++) {
        if (result[y] > 50 && result[y] < 60) {
            grade = "earned 6";
        } else if (result[y] > 60 && result[y] < 70) {
            grade = "earned 7";
        } else if (result[y] > 70 && result[y] < 80) {
            grade = "earned 8";
        } else if (result[y] > 80 && result[y] < 90) {
            grade = "earned 9";
        } else if (result[y] > 90 && result[y] < 101) {
            grade = "earned 10";
        } else {
            grade = "failed to complete the exam"
        }
        if (grade) {
            result2 += result[x] + " acquired " + result[y] + " points and " + grade + ". \n \n"
            x += 2;
            y += 2;
        }
    } return result2;
}
console.log(studentPoints(["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"], [50, 39, 63, 72, 99, 51, 83, 59]));



//With SWITCH statement vvv

function studentPoints(students, points) {
    var result = [];
    var index1 = 0;
    var index2 = 1;
    for (i = 0; i < students.length; i++) {
        result[index1] = students[i];
        index1 += 2;
        result[index2] = points[i];
        index2 += 2;

    } var x = 0;
    var y = 1;
    var grade = 0;
    var result2 = "";
    for (j = 0; j < result.length / 2; j++) {
        switch (true) {
            case (result[y] > 50 && result[y] < 60):
                grade = "earned 6";
                break;
            case (result[y] > 60 && result[y] < 70):
                grade = "earned 7";
                break;
            case (result[y] > 70 && result[y] < 80):
                grade = "earned 8";
                break;
            case (result[y] > 80 && result[y] < 90):
                grade = "earned 9";
                break;
            case (result[y] > 90 && result[y] < 101):
                grade = "earned 10";
                break;

            default:
                grade = "failed to complete the exam"
                break;
        }

        if (grade) {
            result2 += result[x] + " acquired " + result[y] + " points and " + grade + ". \n \n"
            x += 2;
            y += 2;
        }
    } return result2;
}
console.log(studentPoints(["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"], [50, 39, 63, 72, 99, 51, 83, 59]));


/*
======================================================================================
4. (skip :))Sort a previously defined array. Place its sorted values into a new array
whose values are equivalent to the first array's values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]
======================================================================================
*/












/*
======================================================================================
5. (skip :))Sort a previously defined array in a descending order and display it in the console.
Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]
======================================================================================
*/










/*
======================================================================================
6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and
subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then
be multiplied by 12.5 and displayed in console.
Output: 2350000
======================================================================================
*/


function loopAddEven(even, odd) {
    var result = 0;
    var sumEven = 0;
    var sumOdd = 0;
    for (i = 0; i <= even; i++) {
        if (i % 2 == 0) {

            sumEven += i;
            console.log(i);
        }
    } for (j = 1; j <= odd; j++) {
        if (j % 2 != 0) {
            sumOdd += j;
            console.log(j);
        }
    } result = (sumEven - sumOdd) * 12.5;
    return result;
}
console.log(loopAddEven(1000, 500));


/*
======================================================================================
7. Define a 10 element array. Take the first two letters from every string
(that has at least 2 letters) in the array and create a new string from them.
Print it out in the console.

Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]
Output: AnStJoJoDaMa
======================================================================================
*/

function make2LetterString(array) {
    var result = "";
    for (i = 0; i < array.length; i++) {
        if (array[i].length >= 2) {
            result += array[i].slice(0, 2);     //.slice(0, 2); prints only the first two letters
        }
    } return result;
}
console.log(make2LetterString(["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"]));


/*
======================================================================================
8. Write a program that takes a string and prints its characters out in reversed order in the console.
Input:  Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB
======================================================================================
*/

function revertCharacters(string) {
    var result = [];
    for (i = 1; i < string.length + 1; i++) {
        if (typeof string === "string") {
            result += string[string.length - i];
        }
    } return result;
}
console.log(revertCharacters("Belgrade Institute of Technology"));




//Dario's way of solving this assignment

function revertCharacters(string) {
    var result = [];
    if (typeof string !== "string") {
        return "Please insert string";
    }
    for (i = string.length - 1; i >= 0; i--)
        result += string[i];
    return result;
}

console.log(revertCharacters("Belgrade Institute of Technology"));


/*
======================================================================================
9. Write a program that displays all the combinations of two numbers between 1 and 7.
Don't display two of the same numbers at the same time. Display the number of possible
combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).
======================================================================================
*/

function allCombinations(num1, num2) {
    var result = [];
    var count = 0;

    for (i = 1; i <= num2; i++) {
        for (j = 1; j <= num2; j++) {
            if (i !== j) {
                count++;
                result[result.length] = [i, j];
            }
        }
    } return [result, "Number of possible combinations is " + count];
}
console.log(allCombinations(1, 7));




/*The function UP is made presuming that first number is lesser than second number. 
The function DOWN vvv changes their places if first number is larger than second number.*/


function allCombinations(num1, num2) {
    var result = [];
    var count = 0;
    if (num1 > num2) {
        [num1, num2] = [num2, num1]
        console.log(num1, num2);
    }
    for (i = 1; i <= num2; i++) {
        for (j = 1; j <= num2; j++) {
            if (i !== j) {
                count++;
                result[result.length] = [i, j];
            }
        }
    } return [result, "Number of possible combinations is " + count];
}
console.log(allCombinations(1, 7));


/*
======================================================================================
10. Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
Input:  17    | 15
Output: true  | false
======================================================================================
*/

function isPrime(num) {
    var result;
    if (num < 0) {
        return "Please use positive numbers."
    }
    if (num === 1) {
        result = "The number 1 is not a prime nor a composite number.";

    } else if (num === 2) {
        result = "The number 2 is a prime number.";
    }
    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            result = "The number " + num + " is a composite number.";
            break;
        } else result = "The number " + num + " is a prime number.";
    } return result;
}
console.log(isPrime(17));
console.log(isPrime(15));



/*
======================================================================================
11. Check if a given string is a palindrome (spaces are ignored).
Input:  eye  | Geek  | a nut for a jar of tuna
Output: true | false | true
======================================================================================
*/


function removeBlankSpaces(string) {
    var result = [];
    for (i = 0; i < string.length; i++) {
        if (string[i] != " ") {
            result += string[i];
        }
    } return result;
}
console.log(removeBlankSpaces("Remove    all     blank   spaces"));





function isPalindrome(string) {
    var resultWithBlanks = [];
    if (typeof string !== "string") {
        return "Please insert string";
    }
    for (i = string.length - 1; i >= 0; i--) {
        resultWithBlanks += string[i];
    } 
    var resultWithoutBlanks = [];                                   
    for (i = 0; i < resultWithBlanks.length; i++) {                   
        if (resultWithBlanks[i] != " ") {                             
            resultWithoutBlanks += resultWithBlanks[i];                               
        }  
        var result = "";
        for (i = 0; i < resultWithBlanks.length; i++) {
            for (var j = (resultWithBlanks.length - 1); j >= 0; j--) {
                if (resultWithBlanks[i] == resultWithBlanks[j]) {
                    result = true;
                } else {
                    result = false;
                }
            }
        }                                                    
    } return result;                                              
}

console.log(isPalindrome("eye"));
console.log(isPalindrome("Geek"));
console.log(isPalindrome("a nut for a jar of tuna"));

/*
======================================================================================
12. Write a program that calculates the greatest common divisor of two integers.
Note: The greatest common divisor of two non-zero integers is the greatest positive
number that divides both numbers with no remainder.
Input:  192 42 | 81 9
Output: 6      | 9
======================================================================================
*/

function greatestDivisor(num1, num2) {
    var divisors = [];
    var max;
    if (num1 > num2) {
        max = num1;
    } else max = num2;
    for (i = 1; i < max; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            result = "Greatest common divisor for given two integers is " + i + ".";
        }
    } return result;
}
console.log(greatestDivisor(192, 42));
console.log(greatestDivisor(81, 9));