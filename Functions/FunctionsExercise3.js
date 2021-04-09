/*
======================================================================================
Try to solve all assignments on a separate branch of bit-pp repository. Don’t forget to first pull 
changes done at class and push the new repository to remote when done with all the work at the end.

Ignore this if git branching is not presented to you yet.
======================================================================================
======================================================================================
1. Write a program to insert a string within a string at a particular position 
(default is 1, beginning of a string).

"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string"
======================================================================================
*/

function insertStringToPosition(string, insertion, position) {
    var result = [];
    position = position || 1;
    if (position === 1) {
        return insertion + string;
    }
    for (i = 0; i < string.length; i++) {
        if (i === position) {
            result += insertion;
        } result += string[i];
    } return result;
}
console.log(insertStringToPosition("My random string", "JS "));
console.log(insertStringToPosition("My random string", "JS ", 10));




/*
======================================================================================
2. Write a program to join all elements of the array into a string skipping elements 
that are undefined, null, NaN or Infinity.

[NaN, 0, 15, false, -22, '', undefined, 47, null]
======================================================================================
*/

function joinElementsAndSkip(array) {
    var result = "";
    for (i = 0; i < array.length; i++) {
        var float = parseFloat(array[i]);
        var int = parseInt(array[i]);
        if (float == int && !isNaN(int)) {
            result += array[i];
        }
    } return result;
}
console.log(joinElementsAndSkip([NaN, 0, 15, false, -22, '', undefined, 47, null]));





/*
======================================================================================
3. Write a program to filter out falsy values from the array.

[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]
======================================================================================
*/


function filterFalsy(array) {
    var result = [];
    for (i = 0; i < array.length; i++) {
        if (array[i]) {
            result[result.length] = array[i];
        }
    } return result;
}
console.log(filterFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]))



/*
======================================================================================
4. Write a function that reverses a number. The result must be a number.

12345 -> 54321 // Output must be a number
======================================================================================
*/

function reverseNumber(number) {
    var result = 0;
    while (number != 0) {
        result *= 10;
        result += number % 10;
        number -= number % 10;
        number /= 10;
    }
    return result;
}
console.log(reverseNumber(12345));

/*
======================================================================================
5. Write a function to get the last element of an array. Passing a parameter 'n' will
return the last 'n' elements of the array.

[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]
======================================================================================
*/

function getLastElements(array, numberOfLastElements) {
    var result = [];
    if (numberOfLastElements === undefined) {
        numberOfLastElements = 1;
    }
    for (i = array.length - numberOfLastElements; i < array.length; i++) {
        result[result.length] = array[i];
    } return result;
}
console.log(getLastElements([7, 9, 0, -2]));
console.log(getLastElements([7, 9, 0, -2], 2));


/*
======================================================================================
6. Write a function to create a specified number of elements with pre-filled numeric
value array.

6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null]
======================================================================================
*/

function multiplyElements(multiplier, element) {
    var result = [];
    if (typeof multiplier !== "number") {
        return "Please enter number value for multiplier.";
    }
    if (typeof element === "undefined") {
        element = null;
    }
    for (i = 0; i < multiplier; i++) {
        result[i] = element;
    } return result;
}
console.log(multiplyElements(6, 0));
console.log(multiplyElements(2, "none"));
console.log(multiplyElements(2));


/*
======================================================================================
7. Write a function that says whether a number is perfect.

28 -> 28 is a perfect number.


Note: According to Wikipedia: In number theory, a perfect number is a positive integer
that is equal to the sum of its proper positive divisors, that is, the sum of its positive
divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect
number is a number that is half the sum of all of its positive divisors (including itself).

E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors,
and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its
positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14.
This is followed by the perfect numbers 496 and 8128.
======================================================================================
*/

function isPerfect(number) {
    var result = "";
    var divisorsSum = 0;
    for (i = 0; i < number; i++) {
        if (number % i === 0) {
            divisorsSum += i;
        }
        if (divisorsSum === number) {
            result = true;
        } else result = false;
    } return result;
}
console.log(isPerfect(28));
console.log(isPerfect(6));
console.log(isPerfect(496));
console.log(isPerfect(8128));



/*
======================================================================================
8. Write a function to find a word within a string.

'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"
======================================================================================
*/

function findWordInString(string, word) {
    var count = 0;
    var count2 = 0;
    for (i = 0; i < string.length; i++) {
        if (string[i] == word[0]) {
            for (j = i; j < i + word.length; j++) {
                if (string[j] == word[j - i]) {
                    count2++;
                } if (count2 == word.length) {
                    count++;
                }
            } count2 = 0;
        }
    } return word + " was found " + count + " times.";
}
console.log(findWordInString('The quick brown fox', 'fox'));
console.log(findWordInString('aa bb cc dd aa', 'aa'));


/*
======================================================================================
9. Write a function to hide email address.

"myemailaddress@bgit.rs" -> "mye...@bgit.rs"
======================================================================================
*/

function hideEmail(email) {
    var result = "";
    var etindex;
    for (i = 0; i < email.length; i++) {
        if (i < 3) {
            result += email[i];
        }
    } result += "..."
    for (j = 0; j < email.length; j++) {
        if (email[j] == "@") {
            etindex = j;
        }
    }
    for (k = etindex; k < email.length; k++) {
        result += email[k];
    } return result;
}
console.log(hideEmail("myemailaddress@bgit.rs"));


/*
======================================================================================
10. Write a program to find the most frequent item of an array.

[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
======================================================================================
*/

function mostFreequent(array) {
    var result;
    var count = 0;
    var max = 0;
    var mostfreq = 0;

    for (i = 0; i < array.length; i++) {
        for (j = i; j < array.length; j++) {
            if (array[i] == array[j]) {
                max++;
            }
            if (mostfreq < max) {
                mostfreq = max;
                result = array[i];
            }
        } max = 0;
    } return result + " repeats " + mostfreq + " times."
}
console.log(mostFreequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));