//Exercise with Ivan - 10.04.2021 09:00
//This is standard algoritm for writing Fibonacci's array 


var f = 0, g = 1;

for (var i = 0; i <= 15; i++) {
    console.log(f);
    f = f + g;
    g = f - g;
}

/* This will return vvv . The sum of previous two numbers will return next number.
0
1
1
2
3
5
8
13
21
34
55
89
144
233
377
610
*/


//===============================================================================================


var x = 5;
var y = 3;
var min = (x < y) ? x : y;  //If it is x < y then min = x; if its not x < y then min = y

console.log(min);



//===============================================================================================


function sum(num1, num2) {
    num1 = num1 || 0;
    num2 = num2 || 0;

    return num1 + num2;
}

var result = sum(5);
console.log(result);    //returns 5 because for num2 value we take 0 since its not defined (|| (OR) operator returns first TRUTHY value - this is called LAZY EVALUATION)



//===============================================================================================


function square(num) {
    num *= num;
}

var result = square(10);
console.log(result);        //undefined because we dont have RETURN inside function



//===============================================================================================


function sumNumbers(num1, num2) {
    var result = num1 + num2;
    return 10;
}
var result = sumNumbers(10, 1);
console.log(result);                //it will give 10, because we have written that it RETURN 10, this function will return 10 what ever arguments we give it




//===============================================================================================


function myFunc(a, b) {
    var a;
    var b;
    //once we define function, its like we have declared these 2 variables, so thats why we dont have to write var a and var b
    a = 3;
    b = 5;
    //once we pass the arguments to the function its like we have written this 
}




var a = 3;
function myFunc(a, b) {
    var result = a + b;
    return result;
}
console.log(myFunc(5, 5));  //returns 10, because variable from local scope has PRECEDENCE (prednost)



//===============================================================================================

//if we write
var a = 3;

//first thing what javascript does is vvv | Variable is first declared => var a; all VARs go to the top of scope, while initializations stay down where variable is initialized => a = 3
var a;
a = 3;


//===============================================================================================

var result = true;

function subtract(first, second) {
    return first - second;
}

//result = subtract(12, -10);     //22
result = subtract(22, 2);         //20

console.log(result);


//===============================================================================================

'use strict'

myVar = "random";

function addOne(num) {
    return num + 1;
}

var result = addOne(4);
console.log(result);        //ReferenceError: myVar is not defined  --->>> because we use use strict mode, we have to use var myVar = ..., without it it would work.


//===============================================================================================

var global = 123;

var resetGlobal = function () {
    global = -1;
};

console.log(global);    //123 --->>> because we haven't called the function to be executed


//but if we do this vvv


var global = 123;

var resetGlobal = function () {
    global = -1;
};

console.log("Before: ", global);

resetGlobal();                  //calling the function to be executed

console.log("After ", global);


//===============================================================================================

var global = 123;

var resetGlobal = function () {
    global = -1;
};

resetGlobal;                //function isnt executed because we havent put brackets () after function
console.log(global);        //123 


//===============================================================================================


var global = 123;

var resetGlobal = function () {
    global = arguments[0] || -1;
}

resetGlobal(10);
console.log(global);            //10

resetGlobal(0);
console.log(global);            //-1 because 0 is by default FALSY value, so it returns -1


//===============================================================================================


'use strict';

var result = square(10);
console.log(result);

function square(num) {
    num *= num;
}                           //returns UNDEFINED because we dont have RETURN in this function


//===============================================================================================

'use strict';

var result = square(10);
console.log(result);

function square(num) {
    return num *= num;
}                           //returns 100


//===============================================================================================


function toString(num) {
    result = num + "";
    return result;
}

console.log(result);    //ReferenceError: result is not defined because we havent called the function so result is not defined




function toString(num) {
    result = num + "";
    return result;
}

toString(123);

console.log(result);    // 123 when we call the function --->>> result is defined GLOBALLY because we didnt used VAR


//===============================================================================================



function toString(num) {
    'use strict'
    var result = num + "";
    return result;
}

toString(123);

console.log(result);        //ReferenceError: result is not defined --->>> because we have USE STRICT and we defined result inside function


//===============================================================================================

var output = toString(0.15);
console.log(output);

var toString = function (num) {
    var result = num + '';
    return result;
}                               //TypeError: toString is not a function --->>> because of HOISTING


//===============================================================================================


var toString = function (num) {
    var result = num + '';
    return result;
}        

var output = toString(0.15);
console.log(output);                    //0.15  --->>> with type of STRING


//===============================================================================================


var toString = function (num) {
    num = num || '';
    var result = num + '';
    return result;
}        

var output = toString;
console.log(output);            //[Function: toString]


//===============================================================================================

var global = parseInt("1e2");

incrementGlobal = function () {
    global++
};

incrementGlobal ();

console.log(global);            //2
console.log(typeof global);     //number


//===============================================================================================


function sum(num1, num2) {
    num1 = num1 || 0;
    num2 = num2 || 0;

    if (!num1 && !num2) {
        return -1;
    }

    return num1 + num2;
}

var sumNumbers = sum;
var result = sumNumbers();

console.log(result);            //-1        because both num1 and num2 are 0


//===============================================================================================


var x = 21;

var girl = function () {
    console.log(x);
    var x = 20;
};

girl();                     //undefined because of the hoisting


//this is how HOISTING for this looks like vvv
var x;
var girl;
x = 21;

girl = function () {
    console.log(x);
    var x = 20;
};

girl();                     //undefined because of the hoisting --->>> its the same expression as UP, just showing how JS sees it      



//===============================================================================================


function test() {
    console.log(a);
    console.log(foo());

    var a = 1;
    function foo() {
        return 2;
    }
}

test ();                 //undefined
                         //2