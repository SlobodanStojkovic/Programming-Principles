//Exercise with Ivan Balic - 24.04.2021 09:00


typeof console.log;

(function () {
    return console.log;
})()("Boo!")                    //it will print Boo!


//===============================================================================================


function multiply(a, b) {
    var mResult = a * b;
    return function (a, b) {
        return mResult + a + b;
    }
}

var output = multiply(3, 4);
console.log(output);                // [Function (anonymous)]


//===============================================================================================


function multiply(a, b) {
    var mResult = a * b;
    return function (a, b) {
        return mResult + a + b;
    }
}

var output = multiply(3, 4)(5, 5);
console.log(output);                    //22


//===============================================================================================


print("This might work or not?");

var print = (function () {
    return console.log;
})();                               //TypeError: print is not a function, because of HOISTING, var print; goes to top



//===============================================================================================


var print = (function () {
    return console.log;
})();  

print("This might work or not?");   // This might work or not?


//===============================================================================================


var input = [1, undefined, 2, NaN, 3, 4, 5, "six"]

var output = transformArray(input, function (param) {
    return param + "";
});

console.log(output);                //[ '1', 'undefined', '2', 'NaN', '3', '4', '5', 'six' ] It transfers array elements into strings

function transformArray(array, action) {
    var result = [];
    for (var index = 0; index < array.length; index++) {
        var element = array[index];
        result[index] = action(element);
    }
    return result;
}



//===============================================================================================


var PI = 3.1;

function circleSurface(radius) {
    var result = radius * radius * PI;
    var PI = 3.14159;

    return result;
}

var output = circleSurface(5);
console.log(output);            //NaN       because of HOISTING PI is undefined     | If var PI is above var result, then it would work




//===============================================================================================


function circleCalc(radius, calculation) {
    var result = calculation(radius);
    return result;
}


var output = circleCalc(7, function (r) {
    var PI = 3.14159;
    return 2 * r * PI;
});

console.log(output);                        //43.98226


//===============================================================================================

var input = ["one", "1e3", "10e-3", "32", "a15", "12,1"]

function transformArray(array, action) {
    var result = [];
    for (var index = 0; index < array.length; index++) {
        var element = array[index];
        result[index] = action(element);
    }
    return result;
}

var output = transformArray(input, parseFloat); 
console.log(output);                                //[ NaN, 1000, 0.01, 32, NaN, 12 ]

output = transformArray(input, parseInt);
console.log(output);                                //[ NaN, 1, 10, 32, NaN, 12 ]


//===============================================================================================


var cubeVolume = function (a) {
    return a * a * a;
}

function cubeCalculation(a, calc) {
    return calc(a);
}

output = cubeCalculation(10, cubeVolume(6))
console.log(output)                             //TypeError: calc is not a function



//===============================================================================================


function cubeCalculation (a, calc) {
    return calc(a);
}                           

var output = cubeCalculation(10, function (a) {
    6 * a * a;
})
console.log(output);                        //returns undefined because it doesnt have return



//===============================================================================================


function cubeCalculation(a, calc) {
    return calc(a);
}

var output = cubeCalculation(10, function (a) {
    return 6 * a * a;
})
console.log(output);                        //this function has return so it will be 600


//===============================================================================================


function sum(x) {
    return function(y) {
        var res = x + y;
        return function (z) {
            return z + res;
        }
    }
}

console.log(sum(1)(2)(3));      //6         example same as above one




//===============================================================================================


function saySomething(msg1) {
    return function (msg2) {
        var output = msg1 + " " + msg2;
        return function () {
            output += "!";
            console.log(output);
        }
    }
}

saySomething("Hi")("there");                //doesnt print out anything because it dont have third parametar


//===============================================================================================



function saySomething(msg1) {
    function message (msg2) {
        var output = msg1 + " " + msg2;
        var result = function () {
            output += "!";
            console.log(output);
        }
        return result;
    }
    return message;
}

saySomething("Hi")("there")();          //Hi there! 



//===============================================================================================