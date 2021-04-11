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


function square (num) {
    num *= num;
}

var result = square(10);
console.log(result);        //undefined because we dont have RETURN inside function



//===============================================================================================


function sumNumbers (num1, num2) {
    var result = num1 + num2;
    return 10;
}
var result = sumNumbers (10, 1);
console.log(result);                //it will give 10, because we have written that it RETURN 10, this function will return 10 what ever arguments we give it




//===============================================================================================


function myFunc (a, b) {
    var a;
    var b;
    //once we define function, its like we have declared these 2 variables, so thats why we dont have to write var a and var b
    a = 3;
    b = 5; 
    //once we pass the arguments to the function its like we have written this 
}




var a = 3;
function myFunc (a, b) {
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




