/*
======================================================================================
1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
number is odd or even, and display a message to the screen.
======================================================================================
*/

for (var a = 0; a <= 15; a++) {
  if (a % 2 == 0) {
    console.log(a + " is even number");
  } else console.log(a + " is odd number");
}

/*
======================================================================================
2. Write a program to sum the multiples of 3 and 5 under 1000.
======================================================================================
*/

var sum = 0;
for (var x = 0; x < 1000; x++) {
  if (x % 3 === 0 && x % 5 === 0) {
    sum += x; // can also be  sum = sum + x;
  }
}
console.log(sum);

/*
======================================================================================
3. Write a program to compute the sum and product of an array of integers.
======================================================================================
*/

var array = [1, 2, 3, 4, 5];
var sum = 0;
var product = 1;
var i;

for (i = 0; i < array.length; i += 1) {
  sum += array[i];
  product *= array[i];
}
console.log("Sum: " + sum + " Product: " + product);

/* This can also be done on this way:

var array = [5, 6, 7, 8, 9, 10, 11];     
var sum = 0;
var product = 1;
for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
    product = product * array[i];
}
console.log('Sum:'+sum + ' Product:' +product);

i marks the number of my array, when i is 0, that is first number of my array, when i is 1 that is second number of my array and so on...
*/

/*
======================================================================================
4. Write a program which prints the elements of the following array as a single string.
var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
======================================================================================
*/

var x = ["1", "A", "B", "c", "r", true, NaN, undefined];

var string = "";
for (var i = 0; i < x.length; i++) {
  string += x[i] + "\t";
}
console.log(string);

/*
console.log(x.join()); //First way how I did this task
/*

/*
======================================================================================
5. Write a program that prints the elements of the following array.
var a = [

[1, 2, 1, 24],
[8, 11, 9, 4],
[7, 0, 7, 27]
];
======================================================================================
*/

var a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27]
];

var elements = "";

for (var i = 0; i < a[i].length; i++) {
  for (var x = 0; x < a[i].length; x++) {


    elements += a[i][x] + (",");
  }
}
console.log(elements);


/*
======================================================================================
6. Write a program that outputs the sum of squares of the first 20 numbers.
======================================================================================
*/


var sum = 0;
for (var i = 0; i <= 20; i++) {
  sum += (i * i);
  console.log(sum); //This console.log is for control purposes.
}
console.log(sum);







/*
======================================================================================
7. Write a program that computes average marks of the following students. Then use this
average to determine the corresponding grade.

David 80
Marko 77
Dany 88
John 95
Thomas 68
The grades are computed as follows :

< 60%   F
< 70%   D
< 80%   C
< 90%   B
< 100%  A
======================================================================================
*/

var David = 80, Marko = 77, Dany = 88, John = 95, Thomas = 68;
var average;
average = ((David + Marko + Dany + John + Thomas) / 5);

console.log("The average mark for students is " + average);

if (average < 60) {
  console.log("The average grade is F.")
} else if (average < 70) {
  console.log("The average grade is D.")
} else if (average < 80) {
  console.log("The average grade is C.")
} else if (average < 90) {
  console.log("The average grade is B.")
} else if (average <= 100) {
  console.log("The average grade is A.")
}


// Second way how to do this assignment

var marks = [80, 77, 88, 95, 68];
var average = 0;

for (var i = 0; i < marks.length; i++) {
  average = (average + marks[i]);

}

average = average / marks.length;

console.log(average);

if (average < 60) {
  grade = "F";
} else if (average < 70) {
  grade = "D";
} else if (average < 80) {
  grade = "C";
} else if (average < 90) {
  grade = "B";
} else {
  grade = "A";
}

console.log("The average grade is " + grade);


/*
======================================================================================
8. Write a program that uses console.log to print all the numbers from 1 to 100, with two
exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers
divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your
program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print
"Fizz" or "Buzz" for numbers divisible by only one of those).

Note: This is actually an interview question that has been claimed to weed out a significant
percentage of programmer candidates. So if you’ve solved it, you’re now allowed to feel
good about yourself.
======================================================================================
*/

var fizz = "fizz";//divisible with 3
var buzz = "buzz";//divisible with 5, not with 3
var FizzBuzz = "FizzBuzz";//divisible with 3 and 5
for (var i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(FizzBuzz);
  } else if (i % 3 === 0) { console.log(fizz) }
  else if (i % 5 === 0 && i % 3 !==0) { console.log(buzz) }
  else { console.log(i) }
}

/* Second way how to do this assignment */

var fizz = "fizz";
var buzz = "buzz";
var FizzBuzz = "FizzBuzz";

for (var i = 0; i <= 100; i++) {
  switch (true) {
    case (i % 3 === 0 && i % 5 === 0):
      console.log(FizzBuzz);
      break;
    case (i % 3 === 0):
      console.log(fizz);
      break;

    case (i % 5 === 0):
      console.log(buzz);
      break;

    default: console.log(i);
      break;

  }
}








/* SOME CASES AND EXAMPLES OF LOOPS

var i = 0;
while (i < 10) {
    i++;
    console.log(i);
}

This prints numbers from 0 to 10 and its called WHILE LOOP.
*/

/*
var i = 0;
while (i < 10) {
       console.log(i);
       i++;
}

This prints numbers from 0 to 10 and its called WHILE LOOP.
*/

/*
var i = 10;
do {
  i++;
} while (i < 10);

console.log(i);

This prints 11 and is called DO-WHILE LOOP.
*/

/* This is FOR-IN LOOP.

var a = ["a", "b", "c", "x", "y", "z"];

var result = "\n";

for (var i in a) {
  result += "index: " + i + ", value: " + a[i] + "\n";
}
console.log(result);

Result for this loop is:
index: 0, value: a
index: 1, value: b
index: 2, value: c
index: 3, value: x
index: 4, value: y
index: 5, value: z

*/
