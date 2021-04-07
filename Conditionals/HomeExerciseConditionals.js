/* Vezbe sa prezentacija 

Write a program to check if the
number is divisible by 2. If it
is, print even, if not, print
odd.

Sample numbers: 3, 4, 9 (check one at the time)

Output: odd, even, odd
*/

var a = 9;
if (a % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

/*
Write a program to check if the
number is divisible by 3 and 5.
If it is, print that number.

Sample numbers: 15, 12 (check one at the time)

Output: 15
*/

var b = 12;
if (b % 3 === 0 && b % 5 === 0) {
  console.log(b);
} else {
  console.log(b + " is not divisible by 3 and 5");
}

/*
Write a conditional statement to
find the sign of product of
three numbers. Display the
result in the console with the
specified sign.

Sample numbers: 3, -7, 2

Output: The sign is -
*/

var x = 3;
var y = -7;
var z = 2;

var result;
result = x * y * z;

if (result < 0) {
  console.log("-");
} else {
  console.log("+");
}

/*
Write a program to check if the
variable is a number. If it’s a
number, check if it is divisible
by 2. If it is, print the
result, if not, show “X”

Sample numbers: 10 | 7 (check one at the time)

Output: 10 / 2 = 5 | X
*/

var c = 7;
if (typeof c === "number") {
  if (c % 2 === 0) {
    console.log(c / 2);
  } else {
    console.log("X");
  }
}


/*
Write a conditional statement to
find the largest of five
numbers. Display the result in
console.

Sample numbers: -5, -2, -6, 0, -1

Output: 0
*/

var d = -5;
var e = -2;
var f = -6;
var g = 0;
var h = -1;

console.log(Math.max (d, e, f, g, h));


/*
Write a conditional statement to
sort three numbers.

Sample numbers : 0, -1, 4

Output : 4, 0, -1
*/

var j = 0;
var k = -1;
var l = 4;

if (j >= k && j >= l && k >= l) {
    console.log(j, k, l)
} else if (j >= k && j >= l && l >= k) {
    console.log(j, l, k)
} else if (k >= j && k >= l && j >= l) {
    console.log(k, j, l)
} else if (k >= j && k >= l && l >= j) {
    console.log(k, l, j) 
} else if (l >= k && l >= j && k >= j) {
    console.log(l, k, j)
} else if (l >= k && l >= j && j >= k) {
    console.log(l, j, k)
}



