"use strict"

var c = 10;

function myFunc(a, b) {
    var c = 22;
    console.log(c);
    var something = 20;     //Something is defined in LOCAL SCOPE, Local scope see outside, but global scope doesnt see local ->something is not seen because its defined inside function
}

if (true) {
    var j = 'ddd';
}

myFunc();
console.log(c);
console.log(j);

/*If we want to read more about Variable SCOPE we can see it at this link vvv
https://www.digitalocean.com/community/tutorials/understanding-hoisting-in-javascript#:~:text=Hoisting%20is%20a%20JavaScript%20mechanism,scope%20is%20global%20or%20local
*/





var a = 44;


function myFunc(a, b) {
    console.log(a);
}

myFunc(1, 2);           //Function parametars are also called locally (In this example a is 1)
console.log(a);



//VAR has FUNCTION SCOPE, from outside we dont see whats happening inside function | LET has BLOCK SCOPE, variable won't be seen outside 

var j = 'first'
if (true) {
    var j = 'something';
}

console.log(j); //something



var j = 'first'
if (true) {
    let j = 'something';
}

console.log(j); //first