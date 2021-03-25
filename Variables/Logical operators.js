/*


13. Use the console to check the results you think should go in the following table:



15. Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour. If we store the current speed value in the variable speed. Write an expression which will check if we are driving drive safely or not? (true if we are driving safe and false if not)   
*/

/*
Logical operators
12. Check how good you are at guessing the Boolean equivalent of different values using the console. Do you remember how to check for a Boolean equivalent of a value?
*/

typeof -Infinity
console.log(typeof -Infinity) //Number
console.log(typeof undefined) //undefined
console.log(typeof !undefined) //Boolean
console.log(typeof !!undefined) //Boolean     Pitati Ivana Da li je undefined po defaultu Truthy vrednost???

//In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN).





/*
14. If the variable age stores the information about user’s age, how we can check whether it contains a correct value? Write expressions for checking:
Is age negative value
Is age greater than 120 
*/

var age = 30
if (age < 0 || age > 120) {
    message = 'Incorrect value'
} else {
    message = 'Value is correct'
}

console.log(message)




/*
15. Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour. If we store the current speed value in the variable speed. Write an expression which will check if we are driving drive safely or not? (true if we are driving safe and false if not) 
*/







