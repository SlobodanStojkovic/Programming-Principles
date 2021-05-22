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

var removeDuplicates = function(arr) {
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

sample.forEach(function (elem, i, array, next){
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
8. Write a function that calculates a number of days to your birthday.

Input: 25 February
Output: 5 days
*/





/*
9. Write a function that for a given departure and arrival time calculates the time the trip
takes.
Input: 8:22:13 11:43:22
Output: 3 hours 21 minutes 9 seconds
*/






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