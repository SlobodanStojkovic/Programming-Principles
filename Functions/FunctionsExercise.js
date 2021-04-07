/*
=========================================================================================================
1. Write a program that calculates the maximum of two given numbers.
=========================================================================================================
*/

function maxNum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        "Numbers are equal."
    }
}

console.log(maxNum(10, 22))


// Ivan Balic way of doing this task

function max(a, b) {
    var max;

    if (a > b) {
        return a;
    }

    if (b > a) {
        return b;
    }

    return 'Numbers are equal';             //It is possible to write like this, shorter way because return acts like a break

}

console.log(max(5, 10));



/*
=========================================================================================================
2. Write a program that checks if a given number is odd.
=========================================================================================================
*/



function isOdd(num) {
    var odd = "Number is odd"
    var even = "Number is even"
    if (num % 2 !== 0) {
        return odd;
    } else {
        return even;
    }
}

console.log(isOdd(27));




// Ivan Balic way of doing this task

function isOdd(num) {
    if(num % 2 !== 0) {
        return true;
    }

    return false;
}

console.log(isOdd(3));


//we can add more code like this

var someValue = 3;

if(isOdd(someValue)) {
    console.log('Odd');
} else {
    console.log('Even')
}



/*
=========================================================================================================
3. Write a program that checks if a given number is a three digit long number.
=========================================================================================================
*/


function is3digit(num) {
    if (num / 100 >= 1 && num / 100 < 10) {
        return "Broj " + num + " is a three digit long.";
    }
    else return "Number " + num + " is not three digit long."
}

console.log(is3digit(325));

//This function needs to be writted otherwise if its meant to include negative numbers.  



// Ivan Balic way of doing this task

function isThreeDigit(num) {
    var abs = num;
    if(abs < 0){
        abs *= -1;
    }
    if(abs >99 && abs < 1000) {
        return true;
    }

    return false;
}

console.log(isThreeDigit(-123));





/*
=========================================================================================================
4. Write a program that calculates an arithmetic mean of four numbers.
=========================================================================================================
*/

function arithmeticMean(num1, num2, num3, num4) {
    return ((num1 + num2 + num3 + num4) / 4);
}

console.log(arithmeticMean(5, 10, 15, 10));




// Ivan Balic way of doing this task

function avg(a, b, c, d) {
    var sum = (a + b + c + d);
    var avg = sum / 4;

    return avg;
}

console.log(avg(5, 10, 15, 20));


/*
=========================================================================================================
5. Write a program that draws a square of a given size. For example, if the size of square
is 5 the program should draw:
*****
*   *
*   *
*   *
*****
=========================================================================================================
*/

function drawSquare(n) {
    var square = '';
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (i === 0 || i === n - 1) {
                square += '* ';
            } else if (j === 0 || j === n - 1) {
                square += '* ';
            } else {
                square += '  ';
            }
        }
        square += '\n';
    }
    return square;
}

var square1 = drawSquare(5);

console.log(square1);


/*
=========================================================================================================
6. Write a program that draws a horizontal chart representing three given values. For
example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * *
=========================================================================================================
*/

function horizontalChart(num1, num2, num3) {
    var star = '*';
    return star.repeat(num1) + "\n" + star.repeat(num2) + "\n" + star.repeat(num3);
}

console.log(horizontalChart(5, 3, 7));



//Another way of doing this assignment

function horizontalChart2(num1, num2, num3) {
    var star = '';
    for (var i = 0; i < num1; i++) {
        star += '*';
    }
    star += '\n';
    for (var i = 0; i < num2; i++) {
        star += '*';
    }
    star += '\n';
    for (var i = 0; i < num3; i++) {
        star += '*';
    }
    return star;
}

console.log(horizontalChart2(3, 3, 3));



//Doing it with ARGUMENTS

function horizontalChart3() {
    var star = '';
    for (var i = 0; i < arguments.length; i++) {
        for (j = 0; j < arguments[i]; j++) {
            star += "*";
        }
        star += '\n';
    }
    return star;
}

console.log(horizontalChart3(2, 3, 5, 3));


//Ivan Balic way of doing this assignment vvv

function chart(x, y, z) {
    var result = '';
    for (var i = 0; i < x; i++) {
        result += '*';
    }
    result += '\n';

    for (var i = 0; i < y; i++) {
        result += '*';
    }
    result += '\n';
    for (var i = 0; i < z; i++) {
        result += '*';
    }
    result += '\n';
    return result;
}

console.log(chart(3, 5, 7));



//Ivan Balic way of doing this assignment with ARGUMENTS vvv

function chart(x, y, z) {
    var result = '';
    var numOfArgs = arguments.length;

    for (var i = 0; i < numOfArgs; i++) {
        for (var j = 0; j < arguments[i]; j++) {
            result += '*';
        }
        result += '\n';
    }
    return result;
}

console.log(chart(3, 1, 5, 2, 7));











/*
=========================================================================================================
7. Write a program that calculates a number of digits of a given number.
=========================================================================================================
*/

function numberOfDigits(num) {
    var count = 0;
    while (num != 0) {
        num = Math.floor(num / 10);
        ++count;
    }
    return count;
}

console.log(numberOfDigits(32));


// Simpler way of doing it without Math.floor

function numberOfDigits(num) {
    var count = 0;
    while (num >= 1) {
        num = (num / 10);
        count++;
    }
    return count;
}

console.log(numberOfDigits(100));



//Ivan Balic way of doing this task

/*Solution steps:
num = 150, num(150) > 1(true), digitCounter++(1), num = num / 10 (15.0)       
num = 15.0, num(15.0) > 1(true), digitCounter++(2), num = num / 10 (1.50)
num = 1.50, num(1.50) > 1(true), digitCounter++(3), num = num / 10 (0.150)
num = 0.150, num(0.150) > 1(false), return digitCounter

var numAsString = num + ''; //this gives out '123' for example
*/


//Solution implementation:

function numOfDigits(num) {
    var digitCounter = 0;

    if (num < 0) {
        num = num * -1; //if number is negative on this way we make it positive again (can also be written num *= -1;)
    }
    for (var i = num; i >= 1; i /= 10) {
        digitCounter++;
    }
    return digitCounter;
}

console.log(numOfDigits(-100));



/*
=========================================================================================================
8. Write a program that calculates a number of appearances of a given number in a given
array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3
=========================================================================================================
*/

var a = [2, 4, 7, 8, 7, 7, 1];
var e = 7;


function numberOfApeareances(array, number) {
    var count = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] === number) {
            count++;
        }
    }
    return count;
}

console.log(numberOfApeareances([2, 4, 7, 8, 7, 7, 1], 4));


/*
=========================================================================================================
9. Write a program that calculates the sum of odd elements of a given array.
=========================================================================================================
*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumOdd(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(sumOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14]));


/*
=========================================================================================================
10. Write a program that calculates the number of appearances of a letter a in a given string.
Modify the program so it calculates the number of both letters a and A.
=========================================================================================================
*/

function letterA(string) {
    count = 0;
    for (var i = 0; i < string.length; i++) {
        var letter = string[i];
        if (letter === 'a' || letter === 'A') {
            count++;
        }
    }
    return count;
}

console.log(letterA('Banana'));




/*
=========================================================================================================
11. Write a program that concatenates a given string given number of times. For example, if
“abc” and 4 are given values, the program prints out abcabcabcabc.
=========================================================================================================
*/

function concatenateString(string, num) {
    var result = "";
    for (var i = 0; i < num; i++) {
        result += string;
    }
    return result;
}

console.log(concatenateString('abc', 4));


