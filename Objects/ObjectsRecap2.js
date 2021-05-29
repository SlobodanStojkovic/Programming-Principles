//Recap with Andjelka Zecevic - 29.05.2021. 16:00

var user = {
    username: 'pera',
    password: '12345',
    email: 'pera@gmail.com',
    age: 25,
    isAdmin: false
};

console.log(user);
console.log(user.username);     //pera
console.log(user['username']);  //pera
console.log(user.propertyName); //undefined
console.log(typeof user);       //object


var propertyName = 'email';
console.log(user[propertyName]);//

user.password = 'abcde';    //we changed password



console.log(user.address);      //undefined because we added it later vvv

user.address = 'Some street 34';    //we added address
console.log(user);


user.address = {
    street: "Some street",
    streetNumber: 34,
    city: "Belgrade"
};

console.log(user);
console.log(user.address.city);  //Belgrade










//Comparing objects

var x = 10;
var y = '10';

console.log(x == y);    //true
console.log(x === y);   //false


//______<---- .....
var user1 = {
    username: 'pera',
    password: '123'
};

//______<---- .....
var user2 = {
    username: 'pera',
    password: '123'
};

console.log(user1 == user2);        //false because they use different memory space


var user3 = user2;

console.log(user3 == user2); //true because they use same memory space
//if we change password in user 2 it will change also in user 3


function change(x) {
    x += 10;
    console.log(x);     //15
}

var x = 5;
change(x);
console.log(x);         //5





function change(obj) {
    obj.x += 10;
    console.log(obj.x); //15
}

var obj = { x: 5 };
change(obj);
console.log(obj);   //{ x: 15 }





function User(username, password) {
    //this = {}

    this.username = username;
    this.password = password;

    //return this;
}

var user = new User("pera", "123");
console.log(user);      //User { username: 'pera', password: '123' }





function User(username, password) {
    //this = {}

    this.username = username;
    this.password = password;



    //return this;
}

var user = User("pera", "123");     //we removed "new"
console.log(user);      //undefined







function User(username, password) {
    //this = {}

    this.username = username;
    this.password = password;

    this.changePassword = function (newPassword) {
        this.password = newPassword;
    }

    //return this;
}

var user = new User("pera", "123");
console.log(user);

user.changePassword("abcd");        //we changed password
console.log(user);



console.log(global);
console.log(this);




var x = 10;
window.x = 10;

var x = 10;
global.x = 10;




var newUser = {
    username: "pera",
    password: "1234",
    changePassword: function (newPassword) {
        this.password = newPassword;
    }
};

//===============================================================================================


var x = 6;
var y = 5;

var obj = {
    x: 5,
    y: 8,
    sum: function () {
        return x + y;
    }
}
console.log(obj.sum());     //11 because it doesnt have this in front of x: 5, and y: 8


//===============================================================================================


var x = 6;
var y = 5;

var obj = {
    x: 5,
    y: 8,
    sum: function () {
        return this.x + this.y;
    }
}
console.log(obj.sum());     //13   it will use 5 and 8 because of this


//===============================================================================================


var x = 6;
var y = 5;

var obj = {
    x: 5,
    y: 8,
    sum: function (x, y) {
        return x + y;
    }
}
console.log(obj.sum());     //Nan because undefined + undefined


//===============================================================================================



var x = 6;
var y = 5;

var obj = {
    x: 5,
    y: 8,
    sum: function (x, y) {
        return x + y;
    }
}
console.log(obj.sum(2, 3));     //5 it will use given values 2 and 3


//===============================================================================================



var x = 6;
var y = 5;

var obj = {
    x: 5,
    y: 8,
    sum: function (x, y) {
        return this.x + this.y;
    }
}
console.log(obj.sum(2, 3));     //13    because it has this it will use the values from object



//===============================================================================================


var obj = {
    x: 1,
    y: 5
};







var obj = new Object();
//var obj = {};
Object.defineProperty(obj, "x", {
    value: 1,
    writable: true,     //we can change value to x
    enumerable: true,   //x will be visible during writing out of our object 
});
console.log(obj);       //{ x: 1 }


Object.defineProperty(obj, "y", {
    value: 5,
    writable: true,     //we can change value to x
    enumerable: true,   //x will be visible during writing out of our object 
});

obj.x = 10;

console.log(obj);       //{ x: 10, y: 5 }




//===============================================================================================




"use strict";
var obj = new Object();
//var obj = {};
Object.defineProperty(obj, "x", {
    value: 1,
    writable: false,     //we can change value to x
    enumerable: true,   //x will be visible during writing out of our object 
});
console.log(obj);       //{ x: 1 }


Object.defineProperty(obj, "y", {
    value: 5,
    writable: true,     //we can change value to x
    enumerable: true,   //x will be visible during writing out of our object 
});

obj.x = 10;             //TypeError: Cannot assign to read only property 'x' of object '#<Object>' >>> because we used "use strict";

console.log(obj);       



//===============================================================================================



var obj = new Object();
//var obj = {};
Object.defineProperty(obj, "x", {
    value: 1,
    writable: true,     //we can change value to x
    enumerable: true,   //x will be visible during writing out of our object 
});
console.log(obj);       //{ x: 1 }


Object.defineProperty(obj, "y", {
    value: 5,
    writable: true,     //we can change value to x
    enumerable: true,   //x will be visible during writing out of our object 
});

obj.x = 10;

console.log(obj);       //{ x: 10, y: 5 }


for (property in obj) {
    console.log(property, obj[property]);       //x 10    and \n      y 5
}


Object.freeze(obj); //makes it not possible to change properties of object



//===============================================================================================


var output;
output = input[0].toUpperCase().concat(input.substr(1));
///output = input[0].toUpperCase() + input.substr(1);

console.log(output);





var input = "programming in js";
var output;
output = input.substr(-2).toUpperCase();
console.log(output);   //JS




var input = "programming in js";
output = input[0]
.toUpperCase()
.concat(input.slice(1, -2))
.concat(input.substr(-2).toUpperCase());
console.log(output);   //Programming in JS


//===============================================================================================


var greeting = "Hello everyone!";
console.log(greeting.indexOf("o", 5));      //11


//===============================================================================================


var greeting = "Hello everyone!";
console.log(greeting.lastIndexOf("o"));         //11

//===============================================================================================


var greeting = "Hello everyone!";
console.log(greeting.lastIndexOf("o", 5));      //4


//===============================================================================================


var message = "Sunny Saturday";
message.length = 2;
console.log(message);   //Sunny Saturday   >>> because strings are like objects immutable, nepromenljivi, it doesnt change its length



//===============================================================================================



var message = "sunny Saturday";
message[0] = "S";
console.log(message);   //sunny Saturday    it doesnt change


//===============================================================================================



var username = "Pera Peric";
var separator = username.indexOf(" ");
console.log(username.slice(0, separator));  //Pera


//===============================================================================================



var importantMessage = "hmhmhmhm";
importantMessage.toUpperCase();
console.log(importantMessage);  //hmhmhmhm      it changes nothing


//===============================================================================================



var importantMessage = "hmhmhmhm";
var result = importantMessage.toUpperCase();
console.log(result);        //HMHMHMHM



//===============================================================================================


var numbers = "1234567890";
//[0, 1) * 10 --> [0, 10)
var i = Math.round(Math.random() * numbers.length);
console.log(numbers[i]);        //9    8   etc, random numbers


//===============================================================================================


var message = "hi!";
message[0] = "H";
console.log(message); //hi! it stays the same because strings are immutable objects


//===============================================================================================


var name = "pera";
var ime = "pera";
console.log(name == ime);   //true


//===============================================================================================


var name = String("pera");
var ime = String("pera");
console.log(name == ime);   //true


//===============================================================================================


// 1.
var numbers = [1, 2, 3, 4, 5];
var number1 = numbers.pop();    //5
var number2 = numbers.pop();    //4
numbers.push(number1 + number2);
console.log(numbers);   //[ 1, 2, 3, 9 ]    4+5 = 9



// 1.5 ;)
var numbers = [1, 2, 3, 4, 5];
console.log(numbers[10]);



// 2.
var numbers = [1, 2, 3, 4, 5];
numbers[0] = numbers[numbers.length];
console.log(numbers);



// 3.
var numbers = [1, 2, 3, 4, 5];
numbers[0] = numbers[numbers.length - 1];
console.log(numbers);



// 4.
var numbers = [1, 2, 3, 4, 5];
numbers.length = 10;
console.log(numbers);



// 5.
var smallNumbers = [1, 2, 3, 4, 5];
var niceNumbers = [1, 2, 3, 4, 5];
console.log(smallNumbers === niceNumbers);

// comparing by generating string representation >>> poredjenje generisanjem string reprezentacija
console.log(smallNumbers.join('') === niceNumbers.join(''));

// comparing by going around array >>> poredjenje obilaskom niza
var equalArrays = true;
for (var i = 0; i < smallNumbers.length; i++) {
  if (smallNumbers[i] != niceNumbers[i]) {
    equalArrays = false;
    break;
  }
}
console.log(equalArrays);

// 6.
var numbers = [1, 2, 3, 4, 5];
numbers.shift();
console.log(numbers);

// 7.
var numbers = [1, 2, 3, 4, 5];
numbers.push('~');
numbers.unshift('~');
console.log(numbers.join('*'));

// 8.
// sort works in place and does lexigraphic sorting >>> sort radi u mestu (engl. in place) i vrsi leksikografsko sortiranje
var numbers = [1, 89, 3, 4, 10, 20, 50];
numbers.sort();
console.log(numbers);

// 9.
// variant of numeric sorting in ascending order >>> varijanta numerickog sortiranja u rastucem poretku
var numbers = [1, 89, 3, 11, 4, 20, 50];
numbers.sort(function (number1, number2) {
  var number1 = parseInt(number1);
  var number2 = parseInt(number2);

  return number2 - number1;
});
console.log(numbers);

// 10.
var points = [
  { x: 5, y: 10 },
  { x: -1, y: 4 },
  { x: 0, y: 5 },
  { x: 2, y: 12 },
];
points.sort(function (point1, point2) {
  // sorting by value of x coordinate in ascending order >>> sortiranje po vrednosti x koordinate u rastucem poretku
  return point1.x - point2.x;
});
console.log(points);

// 11.
var fruits = ['apple', 'orange', 'lemon', 'grape', 'strawberry'];
var salad = fruits.slice(3, 5);
salad.push('cream');
console.log(salad);

// 12.
var chars = ['a', 'b', 'c', 'd'];
console.log(chars.join(''));

// 13.
var chars = ['a', 'b', 'c', 'd'];
chars[7] = 'm';
console.log(chars.length);

// 14.
function misticFunction(array) {
  var newArray = [];
  // array: ['a', 'b', 'd', 'u']
  // newArray: ['u', 'd', 'b', 'a']

  for (var i = 0; i < array.length; i++) {
    newArray[array.length - 1 - i] = array[i];
  }
  return newArray;
}
var misticResult = misticFunction(['a', 'b', 'd', 'u']);
console.log(misticResult);

// 15. 
function misticFunction(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] += array[i];
  }
}
var numbers = [1, 2, 3, 4, 5];
misticFunction(numbers);
console.log(numbers);