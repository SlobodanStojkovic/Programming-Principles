//25.3.2021. 

//This is loop which we will use to create function

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

//This is how function is created

function getMinElementFromArray(array) {
    var min = array[0];
    var index = 0;
    for (var i =1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            index = i;
        }
    }
    return min;
}

var arr = [222, 3, -4, 55, -12, 120];       //First array that we will use
var result = getMinElementFromArray(arr);

console.log(result);


var arr1 = [-222, 3, -4, 333, -122, 120, -6]; //Second array that we will use
var result1 = getMinElementFromArray(arr1);

console.log(result1);

console.log(getMinElementFromArray([-22, 3, -4, 37, -12, 12, -6])); /* Function can be also called on this way, 
                                                                         we are giving array in console.log immediatly*/








//Is number EVEN function


function isEven(broj) {
    if (broj % 2 === 0) {
        return true 
    } else {
        return false
    }
}

console.log(isEven(10));
console.log(isEven(9));
console.log(isEven(223));
console.log(isEven(12));






//Is Number INSIDE ARRAY function

function isInArray(niz, element) {
    for (var i = 0; i < niz.length; i++) {
        if (niz [i] === element) {
            return true;
        }
    }
    return false //If it passes loop and doesn't find anything, then it will return false
}

console.log(isInArray([1, 2, 3], 2)); //here 2 is element that is check inside array [1, 2, 3]

// or simpler

var arr1 = [1, 2, 3];
var element1 = 2; 
var result1 = isInArray(arr1, element1);
console.log(result1)


//When we do it like this, then running this function will show "Some text" as a result

function someFunction() {
    console.log("Some text")
}

someFunction()



//ADD function

function add(number1, number2) {
   return console.log(number1 + number2);
}

add(12, 49)


//SUM function

function sum(a, b) {
    var c = a + b;
    return c;
}

var result = sum(23, 44);
console.log(result);



//CONCATENATE function

function concatenate(string1, string2) {    //string1 and string2 are PARAMETARS
    var c = string1 + string2;
    return c;
}

var result = concatenate("aaa", "bbb");     //"aaa" and "bbb" are ARGUMENTS
console.log(result);



//SUM function using ARGUMENTS

function sum() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

var result = sum(3, 4, 5, 12);
console.log(result)



// WHAT ARE ARGUMENTS

function args() {
    return arguments
}

var result = args(3, 4, 5, 12);
console.log(result)                 // [Arguments] { '0': 3, '1': 4, '2': 5, '3': 12 }   this is what it returns