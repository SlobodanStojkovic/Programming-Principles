/*
Try to use built-in object methods to solve some of the problems here

1. Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]
*/

var duplicateArray = function (array) {
    var result = [];
    for (var i = 0; i < array.length; ++i) {
        result.push(array[i], array[i]);
    }
    return result;
}

console.log(duplicateArray([2, 4, 7, 11, -2, 1]));




var duplicateArray = function (array) {
    var result = [];
    array.forEach(function (element) {
        result.push(element, element);
    });
    return result;
}

console.log(duplicateArray([2, 4, 7, 11, -2, 1]));





var array = [2, 4, 7, 11, -2, 1];
var duplicated = array.map(function (item) {
    return [item, item];
}).reduce(function (array, result) {
    return array.concat(result);
});
console.log(duplicated);


//Ivan Balic's way of solving this task

//functional EXPRESSION is var duplicateAllElements
//function DECLARATION is function duplicateAllElements

var duplicateAllElements = function (arr) {
    var duplicated = [];

    arr.forEach(function (elem) {
        console.log("From forEach: ", elem);
        duplicated.push(elem, elem);
    });

    return duplicated;
}

var sample = [2, 4, 7, 11, -2, 1];

var result = duplicateAllElements(sample);

console.log(result);




//when using i in forEach

var duplicateAllElements = function (arr) {
    var duplicated = [];

    arr.forEach(function (elem, i) {    //i shows index
        console.log("From forEach: index " + i + ", value", elem);
        duplicated.push(elem, elem);
    });

    return duplicated;
}

var sample = [2, 4, 7, 11, -2, 1];

var result = duplicateAllElements(sample);

console.log(result);





//Example how to use MAP function >>> MAP has to recieve function

var sample = [2, 4, 7, 11, -2, 1];

var result = sample.map(function (elem) {
    return elem * 2;
});

console.log(result);


//How to use multiple Built-In functions

var text = "ALL UPPERCASE";
var arrayOfChars = text.toLowerCase().split("");    //we can do this because they are METHODS

console.log(arrayOfChars);

//If we have 2 functions DOUBLE that doubles and TRIPLE that triples number we can combine them like this but its not recommended vvv
//var result = sample.map(triple(double()));    


var sum = function (a) {
    return function (b) {
        var sum = a + b;
        return function (c) {
            return sum + c;
        }
    }
}

var sumOfThreeNums = sum(1)(2)(3);
console.log(sumOfThreeNums);



/*
2. Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13]
*/

var arr = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

function removeDuplicates(data) {
    return data.filter((value, index) => data.indexOf(value) === index);
}

console.log(removeDuplicates(arr).sort(function (a, b) { return a - b }));



var a = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
function removeDuplicate(value, index, self) {
    return self.indexOf(value) === index;
}
var unique = a.filter(removeDuplicate).sort(function (a, b) { return a - b });
console.log(unique);



//Ivan Balic's way of solving this task

var removeDuplicates = function (arr) {
    var newArray = [];

    arr.forEach(function (elem) {
        var indexOfCurrent = newArray.indexOf(elem);

        if (indexOfCurrent === -1) {
            newArray.push(elem);
        }
    });

    return newArray.sort(function (a, b) {    //a and b are two neighbouring elements, sort method is Dirty method (it changes array, doesnt make a new one)
        return a - b;
    });
}

//return newArray.sort can be written also as newArray.sort((a, b) => a - b); in ES2015

var sample = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

var result = removeDuplicates(sample);
console.log(result);




var obj = {
    name: "Ivan",
    age: 30,
    lastName: "Balic",
    gender: "male",
    sayHello: function () {
        return "Hello"
    }
};

for (var i in obj) {
    console.log(obj[i]);
}
/*
Ivan
30
Balic
male
[Function: sayHello]
*/
console.log(Object.keys(obj));  //[ 'name', 'age', 'lastName', 'gender', 'sayHello' ]

Object.keys(obj).forEach(function (elem, i, array) {
    console.log(elem, i, array);
});
/*
name 0 [ 'name', 'age', 'lastName', 'gender', 'sayHello' ]
age 1 [ 'name', 'age', 'lastName', 'gender', 'sayHello' ]
lastName 2 [ 'name', 'age', 'lastName', 'gender', 'sayHello' ]
gender 3 [ 'name', 'age', 'lastName', 'gender', 'sayHello' ]
sayHello 4 [ 'name', 'age', 'lastName', 'gender', 'sayHello' ]
*/

var sample = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

sample.forEach(function (elem, i, array, next) {
    console.log("native: ", elem, i, array, next);
});

function ourForEach(callBack, array) {
    for (var i = 0; i < array.length; i++) {
        var current = array[i];
        callBack(current, i, array);
    }
}

ourForEach(function (elem) {
    console.log("our: ", elem);
}, sample)
/*
native:  8 0 [
  8, 13, 8, 9, 12,
  8,  1, 1, 4, 13
] undefined
native:  13 1 [
  8, 13, 8, 9, 12,
  8,  1, 1, 4, 13
] undefined
native:  8 2 [
  8, 13, 8, 9, 12,
  8,  1, 1, 4, 13
] undefined
native:  9 3 [
  8, 13, 8, 9, 12,
  8,  1, 1, 4, 13
] undefined
native:  12 4 [
  8, 13, 8, 9, 12,
  8,  1, 1, 4, 13
] undefined
native:  8 5 [
  8, 13, 8, 9, 12,
  8,  1, 1, 4, 13
] undefined
native:  1 6 [
  8, 13, 8, 9, 12,
  8,  1, 1, 4, 13
] undefined
native:  1 7 [
  8, 13, 8, 9, 12,
  8,  1, 1, 4, 13
] undefined
native:  4 8 [
  8, 13, 8, 9, 12,
  8,  1, 1, 4, 13
] undefined
native:  13 9 [
  8, 13, 8, 9, 12,
  8,  1, 1, 4, 13
] undefined
our:  8
our:  13
our:  8
our:  9
our:  12
our:  8
our:  1
our:  1
our:  4
our:  13
*/




/*
3.
a. Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true

b. Write a function that counts the number of elements less than the middle
element. If the given array has an even number of elements, print out an error
message.
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4
*/


function isOddNumberOfElements(array) {
    return array.length % 2 !== 0;
}
console.log(isOddNumberOfElements([1, 2, 9, 2, 1]));



function countNumberOfElementsLessThanMiddle(array) {
    if (array.length % 2 === 0) {
        console.log("Array has even number of elements");
        return;
    }
    var count = 0;
    var midIndex = Math.floor(array.length / 2);

    array.forEach(function (element) {      //element is each element of array
        if (element < array[midIndex]) {
            count++;
        }
    });
    return count;
}
console.log(countNumberOfElementsLessThanMiddle([-1, 8.1, 3, 6, 2.3, 44, 2.11]));



/*
4. Write a function that finds the smallest element of a given array. The function should
return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output: { minValue: -2, minLastIndex: 6 }
*/



function returnSmallest(array) {
    var min = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    var lastIndex = array.lastIndexOf(min);
    return {
        minElement: min,
        lastIndex: lastIndex,
    }
}

var something = returnSmallest([1, 4, -2, 11, 8, 1, -2, 3]);
console.log(something);





function returnSmallest(array) {
    var min = array[0];
    array.forEach(function (element) {
        if (element < min) {
            min = element;
        }
    });
    var lastIndex = array.lastIndexOf(min);
    return {
        minElement: min,
        lastIndex: lastIndex,
    }
}

var something = returnSmallest([1, 4, -2, 11, 8, 1, -2, 3]);
console.log(something);



//Borislav Ivanisevic's way of solving this task


var a = [1, 4, -2, 11, 8, 1, -2, 3];

function minValue(a) {
    return Math.min.apply(Math, a);
}

function indexOfSmallest(a) {
    return a.lastIndexOf(minValue(a));
}

console.log(minValue(a));
console.log(indexOfSmallest(a));



/*
5.
a. Write a function that finds all the elements in a given array less than a given
element.
Input: [2, 3, 8, -2, 11, 4], 6
Output: [2, 3, -2, 4]

b. Write a function that finds all the elements in a given array that start with the “pro”
substring. The function should be case insensitive.
Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
Output: [’Programming’, ‘product’]

c. Write a function that expects an array and a callback function that filters out
some of the elements. Use functions defined in a) or b) to test it.
*/


function findLesserElement(array, less) {
    var result = [];
    array.forEach(function (element) {
        if (element < less) {
            result[result.length] = element;
        }
    })
    return result;
}
console.log(findLesserElement([2, 3, 8, -2, 11, 4], 6));





function findElementsThatStart(array) {
    var result = [];
    array.forEach(function (element) {
        if (element.startsWith("pro") || element.startsWith("Pro")) {
            result[result.length] = element;
        }
    })
    return result;
}
console.log(findElementsThatStart(["JavaScript", "Programming", "fun", "product"]));




// Dario suggests that we practice out these functions forEach, map, filter, join, split, include, indexOf, lastIndexOf

/*
6.
a. Write a list (array) of products you usually buy in the supermarket. Write a price
and name for each product. For example,
[
{name: ‘apples’, price: 100},
{name: ‘milk’, price: 80},
{name:’bananas’, price: 150}
]

b. Write a function that calculates the total price of your shopping list.
c. Write a function that calculates the average product price of your shopping list.
Print this value with the precision of three decimals.
d. Write a function that prints out the name of the most expensive product on your
shopping list. Write the name in uppercase.
*/

function Groccery(name, price) {
    this.name = name;
    this.price = price;
}

var apple = new Groccery("apple", 100);
console.log(apple);
var milk = new Groccery("milk", 80);
var bananas = new Groccery("bananas", 150);

var usualShoppingList = [apple, milk, bananas];
console.log(usualShoppingList);


function sumPrices(array) {
    var sum = 0;
    sum = apple.price + milk.price + bananas.price;
    return sum;
}
console.log(sumPrices(usualShoppingList));
//we can do it on this way when we know how many groceries we have and their names, but when we dont know that then we use methods bellow






var basket =
    [
        { name: "apples", price: 100 },
        { name: "milk", price: 80 },
        { name: "bananas", price: 150 }
    ];

function sumBasket(array) {
    var sum = 0;
    array.forEach(function (element) {
        sum += element.price;
    })
    return sum;
}
console.log(sumBasket(basket));




function getAverageProductPrice(array) {
    var result = 0;
    var sum = 0;
    var count = 0;
    array.forEach(function (element) {
        sum += element.price;
        count++;
    })
    result = sum / count;       //can be aslo written sum / array.lenth without count
    return result.toFixed(3);
}
console.log(getAverageProductPrice(basket));



function getAverageProductPrice2(array) {
    var result = 0;
    var sum = 0;
    array.forEach(function (element) {
        sum += element.price;
    })
    result = sum / array.length;      //this is another way without count
    return result.toFixed(3);
}
console.log(getAverageProductPrice2(basket));






function getMostExpensiveProduct(array) {
    var mostExpensive = array[0].price;            //from first Object price value >>> 100
    var product;
    for (var i in array) {                         //i is iterator in parametars
        if (array[i].price > mostExpensive) {
            mostExpensive = array[i].price;
            product = array[i].name;
        }
    }
    return product.toUpperCase();
}
console.log(getMostExpensiveProduct(basket));




// To find the maximum price value of the objects in array: vvv
//Math.max.apply(Math, array.map(function(o) { return o.price; }))

function getMostExpensiveProduct2(array) {
    var mostExpensive = Math.max.apply(Math, array.map(function (element) {
        return element.price;
    }))
    var product;
    product = array.find(x => x.price === mostExpensive);   //{ name: 'bananas', price: 150 } This returnds product as an object
    return product.name.toUpperCase();
}
console.log(getMostExpensiveProduct2(basket));





/*
7.
a. Write a function that checks if a given string is written in all capitals.
b. Write a function that checks if a given string contains any digits.
c. Write a function that checks if a given string is a valid hexadecimal color.
d. Write a function that checks if a given number belongs to the interval from 1900
to 2018.
e. Write a function named validator that returns an object with properties
stringValidator, passwordValidator, colorValidator, and yearValidator referencing
the functions from a) to d).
*/


/*
The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.
const str = 'hello world!';
const result = /^hello/.test(str);

console.log(result); // true
*/

function checkIfStringIsWrittenInCapitals(string) {
    var string1 = string.toUpperCase();
    if (string == string1) {
        return true;
    }
    return false;
}
console.log(checkIfStringIsWrittenInCapitals("One capital letter"));
console.log(checkIfStringIsWrittenInCapitals("ALL CAPITAL LETTERS"));
console.log(checkIfStringIsWrittenInCapitals("no capital letters"));








function checkIfStringContainsDigits(string) {
    var result;
    for (var i = 0; i < string.length; i++) {
        if (isFinite(parseInt(string[i]))) {
            result = true;
            break;
        } else {
            result = false;
        }
    }
    return result;
}
console.log(checkIfStringContainsDigits("This string contains number 9"));
console.log(checkIfStringContainsDigits("This string doesn't contain numbers."));


//c. Write a function that checks if a given string is a valid hexadecimal color.
//Hexadecimal colors can have letters from A-F and numbers from 0-9

function checkIfStringIsValidHexadecimalColor(string) {
    var result = true;
    if (string[0] != "#") {
        result = false;
        return result;
    }
    if (string.length < 4 || string.length > 7) {
        result = false;
        return result;
    }
    //     for (var i = 0; i < string.length - 1; i++) {
    //         if (string[i + 1] == ("A" || "a" || "B" || "b" || "C" || "c" || "D" || "d" || "E" || "e" || "F" || "f")) {
    //             string1 += string[i + 1];
    //         }
    //         console.log("string1: " + string1);
    //     }
    //     if (string1 == string) {
    //         result = true;
    //     } else {
    //         result = false;
    //     }

    var listOfValid = ['a', 'b', 'c', 'd', 'e', 'f', "1", "2"];

    var stringWithoutHashTag = string.split('#')[1];
    if (!isFinite(Number("0x" + stringWithoutHashTag))) {
        result = false;
    }
    //     stringWithoutHashTag.split("").forEach(function (elem){
    //         var indexOfCurrent = listOfValid.indexOf(elem.toLowerCase());
    //         console.log(elem, indexOfCurrent);
    //        if(indexOfCurrent === -1){
    //             result = false;
    //         }
    //     });

    return result;
}
console.log(checkIfStringIsValidHexadecimalColor("#AACCFF"));
console.log(checkIfStringIsValidHexadecimalColor("#AZ00FF"));




/* Explanation vvv
^          -> match beginning
#          -> a hash
[0-9A-F]   -> any integer from 0 to 9 and any letter from A to F
{6}        -> the previous group appears exactly 6 times
$          -> match end
i          -> ignore case
*/

function checkIfStringIsValidHexadecimalColor(string) {
    var result = /^#[0-9A-F]{6}$/i.test(string);
    return result;
}

console.log(checkIfStringIsValidHexadecimalColor("#AACCFF"));
console.log(checkIfStringIsValidHexadecimalColor("#CD5C5C"));
console.log(checkIfStringIsValidHexadecimalColor("#CD5c5c"));
console.log(checkIfStringIsValidHexadecimalColor("#AZ00FF"));
console.log(checkIfStringIsValidHexadecimalColor("AACCFF#"));
console.log(checkIfStringIsValidHexadecimalColor("STRING"));




//Here we need to enter a split method to delete a #

function isHexa(string) {
    var validHex = false;
    var numLength = string.length;
    var parsedNum = parseInt(string, 16);
    console.log(parsedNum);
    if (!isNaN(parsedNum)) {
        validHex = true;
    }
    return validHex;
}

console.log(isHexa("CD5C5C"));








function isHexa(string) {
    var validHex = false;
    var stringWithoutHashtag;
    var parsedNum;
    stringWithoutHashtag = string.split("#")[1];        //CD5C5C
    parsedNum = parseInt(stringWithoutHashtag, 16);
    if (!isNaN(parsedNum)) {
        validHex = true;
    }
    return validHex;
}

console.log(isHexa("#CD5C5C"));






//d. Write a function that checks if a given number belongs to the interval from 1900 to 2018.

function checkIfInInterval(year) {
    var result;
    if (year >= 1900 && year <= 2018) {
        result = true;
    } else {
        result = false;
    }
    return result;
}
console.log(checkIfInInterval(2000));
console.log(checkIfInInterval(2130));

//math.Random




/*
e. Write a function named validator that returns an object with properties
stringValidator, passwordValidator, colorValidator, and yearValidator referencing
the functions from a) to d).
*/


function validator(stringValidator, passwordValidator, colorValidator, yearValidator) {
    var newObject = {};
    newObject.stringValidator = stringValidator;
    newObject.passwordValidator = passwordValidator;
    newObject.colorValidator = colorValidator;
    newObject.yearValidator = yearValidator;
    return newObject;
}

var someObject = validator(checkIfStringIsWrittenInCapitals("STRING"), checkIfStringContainsDigits("number 3"), checkIfStringIsValidHexadecimalColor("AACCFF"), checkIfInInterval(2005));



/*
8. Write a function that calculates a number of days to your birthday.

Input: 25 February
Output: 5 days
*/



function getDaysUntilBirthday(birthday) {
    var result;
    var b = birthday.split(".");
    var today = new Date();
    var birthD = new Date();

    birthD.setDate(b[0]);
    birthD.setMonth(b[1] - 1);

    result = birthD - today;
    if (result < 0) {
        result = 365 * 24 * 60 * 60 * 1000 - (today - birthD);
    }

    var daysUntilBirthday = (result / 1000) / (60 * 60 * 24);
    return console.log(daysUntilBirthday);
}
getDaysUntilBirthday(("25.5.1991"));




/*
9. Write a function that for a given departure and arrival time calculates the time the trip
takes.
Input: 8:22:13 11:43:22
Output: 3 hours 21 minutes 9 seconds
*/



var start = "08:22:13"
var end = "11:43:22"

function calculateFlightTime(start, end) {
    var startTimeAsArray = start.split(":");    // [ '08', '22', '13' ]
    var endTimeAsArray = end.split(":");        // [ '11', '43', '22' ]
    var s = new Date();
    var e = new Date();

    s.setHours(startTimeAsArray[0]);
    s.setMinutes(startTimeAsArray[1]);
    s.setSeconds(startTimeAsArray[2]);               //console.log(s);     2021-05-26T06:22:13.520Z

    e.setHours(endTimeAsArray[0]);
    e.setMinutes(endTimeAsArray[1]);
    e.setSeconds(endTimeAsArray[2]);                 //console.log(e);     2021-05-26T09:43:22.520Z

    var difference = e - s;      //difference in miliseconds between those two dates

    if (difference < 0) {
        difference = 24 * 60 * 60 * 1000 - Math.abs(difference);
    }

    var differenceInSeconds = difference / 1000;
    var hours = parseInt(differenceInSeconds / (60 * 60));
    var minutes = parseInt(differenceInSeconds % (60 * 60) / 60);
    var seconds = differenceInSeconds - ((hours * 60 * 60) + (minutes * 60));

    console.log("Flight time is: " + hours + ":" + minutes + ":" + seconds);
}

calculateFlightTime(start, end);



/*
10.
a. Write a constructor function that creates points in space. Each point in space has
its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.
b. Write a function that calculates the distance between two points in the space.
*/





/*
11.
a. Write a function that generates a random integer value between 5 and 20.
b. Write a function that generates a random integer value between 50 and 100.
c. Write a function which expects a number and a callback generator function and
returns an array of numbers produced by the generator function.
*/






/*
12. Write a function that shuffles the elements of a given array.

Input: [3, 6, 11, 2, 9, 1]

Output: [6, 2, 9, 1, 3, 11] (it can be any random permutation of the given array)
*/