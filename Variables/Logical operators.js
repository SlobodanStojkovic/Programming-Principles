/*
======================================================================================
Logical operators
12. Check how good you are at guessing the Boolean equivalent of different values using the console. 
Do you remember how to check for a Boolean equivalent of a value?
======================================================================================
*/


console.log(typeof -Infinity); //Number
console.log(typeof undefined); //undefined
console.log(typeof !undefined); //Boolean
console.log(typeof !!undefined); //Boolean     

//In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN).

/*
======================================================================================
13. Use the console to check the results you think should go in the following table:

p q                 p && q          p || q
true    true          true          true                  
true    false         false         true                  
false   true          false         true                 
false   false         false         false
======================================================================================                    
*/

console.log(true && true);
console.log(true || true);

console.log(true && false);
console.log(true || false);

console.log(false && true);     
console.log(false || true);

console.log(false && false);
console.log(false || false);

/*
======================================================================================
14. If the variable age stores the information about user’s age, how we can check 
whether it contains a correct value? Write expressions for checking:
Is age negative value
Is age greater than 120 
======================================================================================
*/

var age = 30;
if (age < 0 || age > 120) {
    message = 'Incorrect value'
} else {
    message = 'Value is correct'
}

console.log(message);


/*
======================================================================================
15. Let’s say there are speed limitations on a motorway from 60 to 120 kilometers 
per hour. If we store the current speed value in the variable speed. 
Write an expression which will check if we are driving drive safely or not? 
(true if we are driving safe and false if not) 
======================================================================================
*/

var speed = 100;
if (speed < 120 && speed > 60) {
    message = 'We are driving safe.'
} else {
    message = 'We are not driving safe'
}

console.log(message);




