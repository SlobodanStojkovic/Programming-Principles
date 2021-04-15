/*
======================================================================================
1. Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U. 
======================================================================================
*/

function countVowels(string) {
    var count = 0;
    for (i = 0; i < string.length; i++) {
        if (string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u" || string[i] == "A" || string[i] == "E" || string[i] == "I" || string[i] == "O" || string[i] == "U") {
            count++;
        }
    } return count;
}
console.log(countVowels("Vowels are a, e, i, o, and u as well as A, E, I, O, and U"));


/*
======================================================================================
2. Write a function that combines two arrays by alternatingly taking elements.

[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]
======================================================================================
*/

function combineAndAlternateArrays(array1, array2) {
    var result = [];
    index1 = 0;
    index2 = 1;
    for (i = 0; i < array1.length; i++) {
        result[index1] = array1[i];
        index1 += 2;
    }
    for (j = 0; j < array2.length; j++) {
        result[index2] = array2[j];
        index2 += 2;
    } return result;
}
console.log(combineAndAlternateArrays(['a', 'b', 'c'], [1, 2, 3]));


/*
======================================================================================
3. Write a function that rotates a list by k elements.

For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
======================================================================================
*/

function rotateListByElements(list, numberOfElements) {
    var result = [];
    for (i = 0; i < list.length; i++) {
        if (i >= numberOfElements) {
            result[result.length] = list[i];
        }
    }
    for (j = 0; j < list.length; j++) {
        if (j < numberOfElements) {
            result[result.length] = list[j];
        }

    } return result;
}
console.log(rotateListByElements([1, 2, 3, 4, 5, 6], 2));

/*
======================================================================================
4. Write a function that takes a number and returns array of its digits.
======================================================================================
*/

function returnArrayOfDigits(number) {
    var result = [];
    var newNum = "";
    if (typeof number === "number") {
        newNum = number + ""
    }
    for (i = 0; i < newNum.length; i++) {
        result[result.length] = newNum[i];

    } return result;
}
console.log(returnArrayOfDigits(5120));


/*
======================================================================================
5. Write a program that prints a multiplication table for numbers up to 12.
======================================================================================
*/

function multiplicationTable(num) {
    var result = "";
    for (i = 1; i <= num; i++) {
        for (j = 1; j <= num; j++) {
            var j;
            result += (i * j) + " ";
        } result += "\n"
    } return result;
}
console.log(multiplicationTable(12));


/*
======================================================================================
6. Write a function to input temperature in Centigrade and convert to Fahrenheit.
======================================================================================
*/


function centrigradeToFahrenheit(temperature) {
    var result;
    Fahrenheit = temperature * 1.8 + 32;
    result = temperature + " degrees Centrigrade is " + Fahrenheit + " degrees Fahrenheit."
    return result;
}
console.log(centrigradeToFahrenheit(25));



/*
======================================================================================
7. Write a function to find the maximum element in array of numbers. Filter out all non-number elements.
======================================================================================
*/

function maxElementAndFilterNaN(array) {
    var result = [];
    var maxIndex = 0;
    for (i = 0; i < array.length; i++) {
        if (typeof array[i] == "number" && isFinite(array[i])) {
            result[result.length] = array[i];
            if (array[i] >= array[maxIndex]) {
                maxIndex = i;
            }
        }
    } return "Maximum element is " + array[maxIndex] + " and after filtering all non-number elements we have " + result;
}
console.log(maxElementAndFilterNaN([1, 20, 3, 144, 10, "Hello", "string", false, undefined, NaN]));


/*
======================================================================================
8. Write a function to find the maximum and minimum elements. Function returns an array.
======================================================================================
*/


function findMaxAndMin(array) {
    var result = [];
    var max = 0;
    var min = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] >= array[max]) {
            max = i;
        }
        result[0] = array[max]
    }
    for (j = 0; j < array.length; j++)
        if (array[j] <= array[min]) {
            min = j;
        }
    result[1] = array[min];
    return result;
}
console.log(findMaxAndMin([3, -20, 1, 20, 3, 144, 10]));



/*
======================================================================================
9. Write a function to find the median element of array.
======================================================================================
*/

function findMedian(array) {
    var result = [];
    divisor1 = 0;
    divisor2 = 0;
    if (array.length % 2 != 0) {
        divisor1 = ((array.length / 2) - 0.5);
        result[result.length] = array[divisor1]
    } else {
        divisor2 = (array.length / 2);
        result[result.length] = array[divisor2];
    }
    return "Median element of array is " + result;
}
console.log(findMedian([3, 5, 7, 11, 15, 20, 24, -10, 30, 31]));


/*
======================================================================================
10. Write a function to find the element that occurs most frequently.
======================================================================================
*/

function mostFrequently(array) {
    var result = "";
    var max = 0;
    var mostFreq = 0;
    for (i = 0; i < array.length; i++) {
        for (j = i; j < array.length; j++) {
            if (array[i] == array[j]) {
                max++;
            }
            if (mostFreq < max) {
                mostFreq = max;
                result = array[i];
            }
        } max = 0;
    } return result;
}
console.log(mostFrequently([3, 10, 7, -10, 11, 7, 20, 24, -10, 30, 31, -10, 8]));



/*
======================================================================================
11. Write a function to find and return the first, middle and last element of an array 
if the array has odd number of elements. If number of elements is even, return just the 
first and the last. In other cases (empty array), input array should be returned.
======================================================================================
*/

function returnFirstMidLast(array) {
    var result = "";
    var firstEl = array[0];
    var lastEl = array[array.length - 1];
    var midEl;
    if (array.length % 2 === 0) {
        midEl = false;
        result = "\nFirst element is " + firstEl + "\nLast element is " + lastEl
    } else {
        midEl = array[(array.length / 2) - 0.5];
        result = "First element is " + firstEl + "\nMiddle element is " + midEl + " \nLast element is " + lastEl
    } return result;
}
console.log(returnFirstMidLast([1, 2, 3, 4, 5, 6]));
console.log(returnFirstMidLast([1, 2, 3, 4, 5, 6, 7]));


//Aleksandar Bisevac way of solving this task

function firstMiddleLast(array) {
    var firstEl = array[0];
    var lastEl = array[array.length - 1];
    var midEl;
    var result;
    if (array.length % 2 !== 0) {
        midEl = array[array.length / 2 - 0.5];
        result = firstEl + " " + midEl + " " + lastEl;
        return result;
    } else {
        result = firstEl + " " + lastEl;
        return result;
    }
}
console.log(firstMiddleLast([1, 2, 3, 4, 5, 6, 7, 8, 9]));


/*
======================================================================================
12. Write a function to find the average of N elements. 
Make the function flexible to receive dynamic number of parameters.
======================================================================================
*/

function averageOfNElements(array, n) {
    var result = 0;
    var sum = 0;
    for (var i = 0; i < n; i++) {
        if (typeof array[n] === "number") {
            sum += array[i];
            result = (sum / n);
        }
    } return "The average of first " + n + " elements is " + result;
}
console.log(averageOfNElements([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));



//Aleksandar Bisevac way of solving this task

function findAverageOfNElements() {
    var sum = 0;
    var avrg;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];        //sum needs to be number because if its undefined it can not be summed with number
    }
    avrg = sum / arguments.length;
    return avrg;
}
console.log(findAverageOfNElements(3, 7, 5, 15, 20, 10));


/*
======================================================================================
13. Write a function to find all the numbers greater than the average.
======================================================================================
*/

function findGreatherThanAverage(array) {
    var result = [];
    var average = 0;
    var sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
        average = (sum / array.length);
    }

    for (j = 0; j < array.length; j++) {
        if (array[j] > average) {
            result[result.length] = array[j];
        }
    } return "Average is " + average + "\nNumbers greather than average are " + result;
}
console.log(findGreatherThanAverage([3, 7, 5, 15, 20, 10]));




//Aleksandar Bisevac way of solving this task

//with nested function vvv


function findAverageOfNElements(nums) {
    var sum = 0;
    var avrg;
    for (i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    avrg = sum / nums.length;
    return avrg;
}

function numbersGreaterThanAverage() {
    var result = [];
    var average = findAverageOfNElements(arguments);
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > average) {
            result[result.length] = arguments[i];
        }
    } return result;
}
console.log(numbersGreaterThanAverage(3, 5, 7, 9, 11));

//without nested function vvv

function numbersGreaterThanAverage() {      //if in () is (arguments) the code DONT WORK
    var result = [];
    var sum = 0;
    var average = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
        average = sum / arguments.length;
    } for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > average) {
            result[result.length] = arguments[i];
        }
    } return result;
}

console.log(numbersGreaterThanAverage(3, 5, 7, 9, 11));



/*
======================================================================================
14. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to 
the square of the height (in meters). Write a function that takes two parameters, 
weight and height, computes the BMI, and prints the corresponding BMI category:
 
Starvation: less than 15
Anorexic: less than 17.5
Underweight: less than 18.5
Ideal: greater than or equal to 18.5 but less than 25
Overweight: greater than or equal to 25 but less than 30
Obese: greater than or equal to 30 but less than 40
Morbidly obese: greater than or equal to 40
======================================================================================
*/

function calculateBMI(weight, height) {
    var BMI = weight / (height * height);
    var result = "";
    console.log(BMI);
    if (height > 3 || height < 1) {
        return "Please insert your height in meters."
    }
    switch (true) {
        case (BMI <= 15):
            result = "Starvation: less than 15";
            break;
        case (BMI > 15 && BMI <= 17.5):
            result = "Anorexic: less than 17.5";
            break;
        case (BMI > 17.5 && BMI <= 18.5):
            result = "Underweight: less than 18.5";
            break;
        case (BMI > 18.5 && BMI <= 25):
            result = "Ideal: greater than or equal to 18.5 but less than 25";
            break;
        case (BMI > 25 && BMI <= 30):
            result = "Overweight: greater than or equal to 25 but less than 30";
            break;
        case (BMI > 30 && BMI < 40):
            result = "Obese: greater than or equal to 30 but less than 40";
            break;
        case (BMI >= 40):
            result = "Morbidly obese: greater than or equal to 40";
            break;

        default:
            result = "Please insert valid height and weight."
            break;

    } return "Your BMI is " + BMI + " and you are " + result;
}
console.log(calculateBMI(85, 1.85));




//Aleksandar Bisevac and myself solved this task like this

function calculateBMI(weight, height) {
    var result = weight / (height * height);
    var message = "";
    switch (true) {
        case (result <= 15):
            message = "Starvation: less than 15";
            break;
        case (result > 15 && result <= 17.5):
            message = "Anorexic: less than 17.5";
            break;
        case (result > 17.5 && result <= 18.5):
            message = "Underweight: less than 18.5";
            break;
        case (result > 18.5 && result <= 25):
            message = "Ideal: greater than or equal to 18.5 but less than 25";
            break;
        case (result > 25 && result <= 30):
            message = "Overweight: greater than or equal to 25 but less than 30";
            break;
        case (result > 30 && result < 40):
            message = "Obese: greater than or equal to 30 but less than 40";
            break;
        case (result >= 40):
            message = "Morbidly obese: greater than or equal to 40";
            break;

        default:
            message = "Please insert valid height and weight."
            break;
    } return message;
}
console.log(calculateBMI(85, 1.85));


/*
======================================================================================
15. Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:
 
For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********
======================================================================================
*/

function printListOfStringsInRectangularFrame(array) {
    var result = "";
    var count = 0;
    var maxChar = 0;
    var maxStars = "";

    for (i = 0; i < array.length; i++) {
        while (array[i].length < maxChar) {
            array[i] += " "
        }
        result += "\n* " + array[i] + " *"
        for (j = 0; j < array.length; j++) {
            count++;
            maxChar = count;
        } count = 0;
    }
    while (maxChar > 0) {
        maxStars += "*";
        maxChar--;
        var row = "**" + maxStars + "**";
    }
    return row + result + "\n" + row;
}
console.log(printListOfStringsInRectangularFrame(["Hello", "World", "in", "a", "frame"]));






function printListOfStringsInRectangularFrame(array) {
    var result = "";
    var maxChar = 0;
    var maxStars = "*";

    for (i = 0; i < array.length; i++) {
        while (array[i].length < maxChar) {
            array[i] += " ";
        }
        result += "\n* " + array[i] + " *";

        for (ј = 0; ј < array.length; ј++) {
            if (array[ј].length > maxChar) {
                maxChar = array[ј].length;
            }
        }
    }
    while (maxChar > 0) {
        maxStars += "*";
        maxChar--;
        var row = "**" + maxStars + "*";
    } return row + result + "\n" + row;
}
console.log(printListOfStringsInRectangularFrame(["My", "name", "is", "Slobodan", "Stojkovic"]));
