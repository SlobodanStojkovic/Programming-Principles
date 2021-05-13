//With Dario Stamenkovic 13.05.2021. 18:00

function Hero(n, o) {
    this.firstName = n;
    this.occupation = o;
}

var hero = Hero("donatelo", "ninja");


console.log(hero);//undefined
console.log(firstName);//donatelo
console.log(occupation);//ninja





var someObj = {name: "something", lastName: "something else"}
console.log(someObj);






//Three different ways to create one same thing vvv

function factory(n) {
    var ob = {
        name: n,
    };
    return ob
}



function factory(n) {
    var ob = {};
    ob.name = n;
    return ob
}



function factory(n) {
    return {
        name: n
    };
}

var obj = factory("one");










var a = [];
var b = a;

b[0] = 22

console.log(a); //22
console.log(b); //22







var someObj = { name: "something", lastName: "something else" };    //Object
var someOtherObj = someObj;

someOtherObj.newProperty = 22;

console.log(someObj);       //{ name: 'something', lastName: 'something else', newProperty: 22 }
console.log(someOtherObj);  //{ name: 'something', lastName: 'something else', newProperty: 22 }






var sum = function () {
    return 2 +  2;
};

var somethingElse = function() {
    return 2 + 2;
};

console.log(sum === somethingElse); //false even though its exactly the same because it takes up different memmory space address







var sum = function () {
    return 2 +  2;
};

var somethingElse = sum;

console.log(sum === somethingElse); //true because they take up the same memmory space address






var original = { howmany:  100 };

var nullify = function (obj) { obj.howmany = 0; };

nullify(original);
original.howmany;






var nullify = function (obj) { obj.howmany = 0; };      //this function sets up howmany element on any called object so it will be 0

var original = { howmany:  100 };


nullify(original);
console.log(original.howmany)       // its 0, because nullify changed it from 100 to 0




