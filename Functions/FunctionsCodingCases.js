//coding with Andjelka Zecevic - 24.04.2021. 16:00

var year = 2021;

function vacationStartDate(day, month) {
    var date;
    var year = 2022;

    date = day + "." + month + "." + year + ".";

    return date;
}

var startDate = vacationStartDate(5, 7);
console.log(startDate);




//===============================================================================================


console.log(x)      //ReferenceError: x is not defined



//===============================================================================================


console.log(x);                 //undefined because of HOISTING, this happens vvv
var x = 10;

/*

var x ;
console.log(x);
x = 10;

*/

//===============================================================================================

var c = 10;

function f(a, b) {  //a <- 3, b <- 4
    console.log(a);
    console.log(b);
    console.log(c);
}

f(3, 4);            //3, 4, 10


//===============================================================================================


function f(a, b) {  //a <- 3, b <- 4
    console.log(a);
    console.log(b);
    console.log(c);
}

f(3, 4);                    //3, 4, undefined

var c = 10;

//===============================================================================================


function f(a, b) {
    console.log(a);
    console.log(b);
    c = 5;

    console.log(c);
}

var c = 10;

f(3, 4);

console.log(c);                 //3, 4, 5, 5            when in function is written VAR c = 5, then it will be 3, 4, 5, 10



//===============================================================================================


for (var i = 0; i < 5; i++) {
    console.log(i);
}



//===============================================================================================


function smthImportantAndPrivate(input) {
    "use strict"                                //we can protect ourselves from errors like this by using STRICT MODE
    result = 2 * input;                         //we may endanger data if we dont put var result here

    if (result > 10) {
        return true;
    } else {
        return false;
    }
}

console.log(smthImportantAndPrivate(8));
console.log(result);


//===============================================================================================

var b = 5;

function f(a, a, c) {
    return a + b + c;
}

var result = f(1, 2, 3)
console.log(result);            //10 because it will use 2 as a
//if we USE STRICT then it will give SyntaxError: Duplicate parameter name not allowed in this context


//===============================================================================================


var sum = function (a, b) {
    return a + b;
};

var result = sum(3, 4);

console.log(result);            //7
console.log(typeof sum);        //function



//===============================================================================================



var sum = (function (a, b) {
    return a + b;
})();

console.log(typeof sum);        //number
console.log(sum);               //NaN




//===============================================================================================


function mathToolkit(a, b) {
    var sum = function (x, y) {
        return x + y;
    };

    var mul = function (x, y) {
        return x * y;
    };

    return sum(a, b) + mul(a, b);
}

var result = mathToolkit(3, 4);
console.log(result);                //19


//===============================================================================================



function mathToolkit(a, b) {
    var offset = 10;
    var sum = function (x, y) {
        return x + y + offset;
    };

    var mul = function (x, y) {
        return x * y;
    };

    return sum(a, b) + mul(a, b);
}

var result = mathToolkit(3, 4);
console.log(result);                          //29


//===============================================================================================


var isValidUsername = function (username) {
    return username.length > 5;
};

var isValidPassword = function (password) {
    return password.indexOf('*') != -1;
};

var checkUser = function (userdata, validator) {
    return validator(userdata);
};

var username = 'pera';
var password = 'ab*c';

console.log(checkUser(username, isValidUsername));   //we initiated check of username with function isValidUsername
console.log(checkUser(password, isValidPassword));   //we initiated check of password with function isValidPassword


//===============================================================================================


var f = 5;

function f(){
    console.log('here we are')
}

f();                                //f is not a function

/* Here is what happens because of HOISTING

var f;

function f(){
    console.log('here we are')
}

f(); 

*/

//===============================================================================================