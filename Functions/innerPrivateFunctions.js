/* Inner (Private) Functions - with Dario Stamenkovic - 22.04.2021. 18:00 */




function init() {
    console.log('hello world')
}
init();                                 //We write a function, and we call it immediatly.



//======================================================================================



(function () {
    console.log('hello world')
})()                                    //this is completely same as above, only this is anonimous, self invoked function



//======================================================================================

function init() {

    function sum(num1, num2) {
        return num1 + num2;
    }

    var result = sum(22, 44);
    console.log(result);

}

init();                             //once we call this function then it starts doing its own code, and declaring it


//======================================================================================


function payService() {
    console.log('takes wallet')
    console.log('takes out money')
    console.log('gives money')
}

function goToTheDentis() {

    function mouthWash() {
        console.log('takes sprinkler GH344')
        console.log('cleans mouth')
        console.log('returns sprinkler')
    }

    function removeCaries() {
        console.log('takes drill')
        console.log('remove caries')
        console.log('returns drill')
    }

    mouthWash();

    removeCaries();

    mouthWash();

    console.log('makes compound for filling')
    console.log('puts filling')
    console.log('heats filling')

    mouthWash();                                //refactored code (Refaktorisani kod) - written on same code

    payService();
}

goToTheDentis();


//======================================================================================

var a = 22;                 //what we set inside variable is data

var result = 12 * a;            // * operator. We have variables where we keep values, data. Relations between them we define by operators

console.log(result);




var a = function () {
    return function () {
        return 15;
    }
}

var result = a();

console.log(result);


//======================================================================================


var a = function (condition) {
    if (condition) {
        return 'one thing'
    }
    return 'second thing'
}

var result = a();

console.log(result);


//======================================================================================


function a() {
    console.log('A!');
    return function () {
        console.log(('B!'));
    };
}

var result = a()

console.log(result);    //returns A! \n [Function (anonymous)]


//======================================================================================


function a() {
    console.log('A!');
    return function () {
        console.log('B!');
    };
}
var bigB = a();
bigB();

a()();      //a() this always evaluates in what function returns and then second (); returns other function



//======================================================================================


function invokeAdd(a, b) {
    return a() + b();
}

var result = invokeAdd(function () { return 3 }, function () { return 6 })

console.log(result);


//======================================================================================


function returnTwo() {
    return 2
}

function returnSix() {
    return 6
}


function returnTen() {
    return 10
}

function returnNine() {
    return 9
}



function invokeAdd(a, b) {
    return a() + b();
}

var result = invokeAdd(returnTen, returnTwo)

console.log(result);


//======================================================================================



function returnSum(num1, num2) {
    return num1 + num2;

}

function returnMinus(num1, num2) {
    return num1 - num2;
}

function invokeAdd(a, b) {
    return a(22, 33) + b(15, 23);
}

var result = invokeAdd(returnSum, returnMinus)

console.log(result);


//======================================================================================



var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function doubleArrayElements(array) {
    var resultArray = [];
    for (var index = 0; index < array.length; index++) {
        var element = array[index];
        resultArray[index] = element * 2;

    } return resultArray;
}

var result = doubleArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9])

console.log(result);


//Instead of all this we have a built in function

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var result = array.map(function (number) { return number * 3 })   //each time we need to do something with each element we will use MAP

console.log(result);





var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var result = array.map(function () { return "test" })

console.log(result);


//======================================================================================


var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var result = array.map(function (number) {
    if (number % 2 === 0) {
        return number * 2;
    }
    return number;
})

console.log(result);


//======================================================================================


var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var result = array.map(function (number) {

})

console.log(result);            //it will return undefined for each element


//======================================================================================



var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function filterEven(array) {
    var resultArray = [];
    for (var index = 0; index < array.length; index++) {
        var element = array[index];
        if (element % 2 === 0) {
            resultArray[resultArray.length] = element;
        }

    } return resultArray;
}

var result = filterEven(array)

console.log(result);




//new way vvv


var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var result = array.filter(function(number) { return number % 2 === 0})

console.log(result);


//======================================================================================


