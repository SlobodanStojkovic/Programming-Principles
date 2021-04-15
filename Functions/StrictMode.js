
//Block > Statement > Expression --->>>statement consists of expression, and is greater than it.
//Expression => fragment or part of sentence ->>> Analogy with words
//Statements => Whole sentence
//Block => pasus (few sentences)


//USE STRICT should be on TOP OF THE SCOPE where we want to use it(can be inside a function, on top of scope)



var something = 'something'; //declaration statement and expression at the same time


//declaration statements
var a;
var sumResult;

function sum(a, b) {        //This whole function is also declaration statement (rows 14-17)
    var result = a + b;
    return result;
}                           



//expression statements
a = 22;
sumResult = sum(3, 4);



if (23 > 12) //when we put ; on end of this code we END STATEMENT, and it will be EMPTY CODE that wont print anything
    console.log('Its greater'); //if in CONDITION it has ONLY ONE LINE OF CODE then the { curly brackets } are not neccessary




for (let index = 0; index < 10; index++) {
    console.log(index)
    if (index > 7) continue //continue means MOVE ON TO THE NEXT ITERATION, while BREAK stops the WHOLE LOOP, 8 and 9 wont be printed out as with continue
    console.log('hello')
    console.log('world')
}



var j = 0
do {
    console.log(j);
    j++;
} while (j < 10)    //Do all these statements as long as this expression is correct






outerLoop:  //on This way we give name to this syntax
for (let i = 0; i < 10; i++) {                  //BLOCK CODE is always between { curly brackets }
    for (let j = 0; j < 10; j++) {
        console.log(i, j);
        if (i === 2 && j === 2) {
            continue outerLoop;
        }
    }
}




"use strict" //when we use this chance for errors are smaller because it doesnt allow code bellow to work (without this it would have worked)
//we need to remmember that it generally goes at the beggining of a file or begining of a function

a = 22;

console.log(a);



function myFunc(a, b) {
    "use strict"
    b = 22;
    console.log(b)
}

myFunc()




//Without strict mode this works
a = "string"

console.log(a);



//With STRICT MODE it DON'T WORK
"use strict"
a = "string"

console.log(a);
