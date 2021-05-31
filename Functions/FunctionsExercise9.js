/*
======================================================================================
1. Write a function that checks if a given string contains digit 5.
Input: “1b895abd” 
Output: true


Input: “1bser9re”
Output: false
======================================================================================
*/


function checkForFive(string) {
    var result;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === "5") {
            result = true;
            break;
        } else {
            result = false;
        }
    } return result;
}
console.log(checkForFive("1b895abd"));
console.log(checkForFive("1bser9re"));



/*
======================================================================================
2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’.
Input: “Programming in JS is super interesting!”
Output: “Programming in ** is super interesting!”
======================================================================================
*/


function replaceJSWithStars(string) {           //This function replaces string "JS" in each string whenever they are found
    var result = "";
    for (var i = 0; i < string.length; i++) {
        if (string[i] != "J" && string[i] != "S") {
            result += string[i];
            for (var j = i; j < i + 2; j++) {
                if (string[j] == "J" && string[j + 1] == "S") {
                    result += "**";
                }
            }
        }
    } return result;
}
console.log(replaceJSWithStars("Programming in JS is super interesting!"))
console.log(replaceJSWithStars("ProgJSrammiJSng JSin JS is super interesting!"))





function replaceJandSWithStars(string) {   //This function replaces J and S separately in each string whenever they are found
    var result = "";
    for (var i = 0; i < string.length; i++) {
        if (string[i] != "J" && string[i] != "S") {
            result += string[i];
        } else {
            result += "*";
        }
    } return result;
}
console.log(replaceJandSWithStars("Programming in JS is super interesting!"))


/*
======================================================================================
3. Write a function that inserts a given character on a given position in the string.
Input: “Goo morning”, 4, ‘d’
Output: “Good morning”
======================================================================================
*/


function insertCharacterOnPosition(string, position, character) {
    var result = "";
    for (var i = 0; i < string.length; i++) {
        if (i < (position - 1)) {
            result += string[i];
        } else if (i == (position - 1)) {
            result += character;
            result += string[i];
            //we need to write result += string[i]; because after it includes character on that position it needs to also   add a character that was previously on that position
        } else {
            result += string[i];
        }
    }
    if (position > string.length) {         //this IF code includes case when we want to add character on the end of string
        result += character;

    } return result;
}
console.log(insertCharacterOnPosition("Goo morning", 4, "d"));
console.log(insertCharacterOnPosition("This is a funcio", 17, "n"));


/*
======================================================================================
4. Write a function that deletes a character from the given position in the string.
Input: “Goodd morning!”, 3
Output: “Good morning!”
======================================================================================
*/

function deleteCharacterFromPosition(string, position) {
    var result = "";
    for (var i = 0; i < string.length; i++) {
        if (i != position) {
            result += string[i];
        }
    } return result;
}
console.log(deleteCharacterFromPosition("Goodd morning!", 3))



/*
======================================================================================
5. Write a function that deletes every second element of the given array.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
Output: [3, 1, 90, 23, 67]
======================================================================================
*/

function deleteEverySecond(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            result[result.length] = array[i];
        }
    }
    return result;
}
console.log(deleteEverySecond([3, 5, 1, 8, 90, -4, 23, 1, 67]));


/*
======================================================================================
6. Write a function that replaces the elements of the given array between two positions with their doubled values.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6
Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]
======================================================================================
*/


function replaceElementsWithDouble(array, position1, position2) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (i >= position1 && i <= position2) {
            result[result.length] = array[i] * 2;
        } else result[result.length] = array[i];
    }
    return result;
}
console.log(replaceElementsWithDouble([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6));


/*
======================================================================================
7. Write a function that checks if a given object has a given property with the given value.
Input: {x: 20, y: 30}, “x”, 20
Output: true


Input: {x: 20, y: 30}, “z”, 20
Output: false

Input: {x: 20, y: 30}, “x”, 10
Output: false
======================================================================================
*/


function checkIfObjectValuesIsCorrect (object, property, value) {
    this.object = object;
    if(object[property] == value) {
        return true;
    } else {
        return false;
    }

}
console.log(checkIfObjectValuesIsCorrect({x: 20, y: 30}, "x", 20));
console.log(checkIfObjectValuesIsCorrect({x: 20, y: 30}, "z", 20));
console.log(checkIfObjectValuesIsCorrect({x: 20, y: 30}, "x", 10));


/*
======================================================================================
8. Write a function that checks if every element of the first array is contained in
the second array. Be careful with repetitions!
Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
Output: true
======================================================================================
*/







/*
======================================================================================
9. Write a function that sorts an array of strings by the number of appearances of the letter ‘a’ or ‘A’.
Input: [‘apple’, ‘tea’,  ‘amazing’, ‘morning’, ‘JavaScript’]
Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]
======================================================================================
*/

function sortByNumberOfA(array) {
    var result = [];
    var prevCount = 0;
    var count = 0;
    var change;
    result = array;
    for (var i = 0; i < result.length; i++) {
        for (var j = 0; j < 6; j++) {
            if (result[j] == "a" || result[j] == "A") {
                count++;
                count = prevCount;
                console.log(j);
                if (prevCount > count) {
                    result[j] = change;
                    result[j] = result[j - 1];
                    result[j - 1] = change;

                }
                count = 0;
            }
        }
    }
    return result;
}
console.log(sortByNumberOfA(["apple", "tea", "amazing", "morning", "JavaScript"]));


/*
======================================================================================
10. Write a function that prints out the date of the next day.
Output:  25. 10. 2018.
======================================================================================
*/

function printNextDay(day, month, year) {
    var result;

    if (day > 32 || day < 1 || month > 13 || month < 1 || year < 0) {
        result = "Please insert valid values."
    }
    if (day === 31) {
        day = 0;
        month = month + 1;
    }
    if (month === 13) {
        month = 1;
        year = year + 1;
    }
    if (month === 2 && day === 28) {
        day = 0;
        month = month + 1;
    }
    if ((month === 4 || month === 6 || month === 9 || month === 11) && day === 30) {
        day = 0;
        month = month + 1;
    }
    result = (day + 1) + "." + month + "." + year + "."
    return result;
}
console.log(printNextDay(31, 5, 2021));

/*
======================================================================================
11. Write a function that prints out the date of the previous day.
Output:  23. 10. 2018.
======================================================================================
*/


function printPreviousDay(day, month, year) {
    var result;
    if (day === 1 && (month === 1 || month === 2 || month === 4 || month === 6 || month === 8 || month === 9 || month === 11)) {
        day = 32;
        month = month - 1;
    }
    if (day === 1 && month === 3) {
        day = 29;
        month = month - 1;
    }
    if (day === 1 && (month === 3 || month === 5 || month === 7 || month === 10 || month === 12)) {
        day = 31;
        month = month - 1;
    }
    if (month === 0) {
        month = 12;
        year = year - 1;
    }
    result = (day - 1) + "." + month + "." + year + "."
    return result;
}
console.log(printPreviousDay(1, 3, 2021));


/*
======================================================================================
12. Write a function that prints out an array of the numbers aligned from the right side.
Input: [78, 111, 4, 4321]
Output:
     78
    111
      4
   4321
======================================================================================
*/

function printAllignedRight(array) {
    var result = "";
    var maxChar = 0;
    generateString = function (numSpaces) {
        var result = "";
        for (var i = 0; i < numSpaces; i++) {
            result += " ";
        }
        return result;
    }
    for (var i = 0; i < array.length; i++) {
        array[i] += "";
        if (array[i].length > maxChar) {
            maxChar = array[i].length;
        }
    }
    for (var j = 0; j < array.length; j++) {
        array[j] += "";
        var numberOfSpaces = maxChar - array[j].length;
        var spaceString = generateString(numberOfSpaces);
        result += spaceString + array[j] + "\n";
    }
    return result;
}
console.log(printAllignedRight([78, 111, 4, 4321]));