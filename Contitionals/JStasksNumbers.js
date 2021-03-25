
/*
Task 4. Write a program to check if the variable is a number and if it’s a number, check if it is
divisible by 2. If it is, print the result, if not, show “X”.
Sample input: 10 Sample input: 7
Output: 10 / 2 = 5 Output: X
*/

var isNum = 10;
if (typeof isNum === "number") {
    if (isNum % 2 === 0) {
        console.log(isNum)
    }
    else (console.log("X"));
}






/*
Task 5. Write a program that compares two numbers and displays the larger. Display the result in
the console.
*/

var a = 5
var b = -5

if (a > b) {
    console.log("a je vece od b")
} else if(b > a) {
    console.log("b je vece od a")
} else {
    console.log("a je jednako b")
}





/*
Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two
values are same, then returns triple their sum.
Sample Input: 12,5 Sample Input: 8,8
Output : 17 Output : 48
*/

var a = 12;
var b = 5;
var result = 0;

if (a !== b) {
    console.log (result = a + b)
} else if(a === b) {
    console.log ((result = (a + b)*3))
}


/*
Task 9. Write a JavaScript program to check two given numbers and print “true” if one of
the number is 50 or if their sum is 50.
Sample Input: 5,54 Sample Input: 6,50 Sample Input: 40,10

Output : - Output : true Output : true
*/

var a = 40;
var b = 10;

if (a === 50 || b === 50 || a + b === 50) {
    console.log("true");
}

/*
Task 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400,
and print range in which number belongs.
Sample Input: 13 Sample Input: 34 Sample Input: 256
Output : - Output : 20 ⇔ 100 Output : 100 ⇔ 400
*/

 var num = 101
 
 if (num >= 20 && num <= 100) {
     console.log("20 of 100")
 } else if (num >= 101 && num <= 400) {
    console.log("100 of 400")
 }











  