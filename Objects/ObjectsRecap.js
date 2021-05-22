var book = {
    title: "A Game Of Thrones",
    author: author
};

var author = {
    name: "George R.R. Martin",
    quotes: [
    "Sleep is good but books are better."
]
};

console.log(book.author.name);      //TypeError: Cannot read property 'name' of undefined because of HOISTING vvv

/* 
var author;
var book;

book = {
    title: "A Game Of Thrones",
    author: author
};

author = {
    name: "George R.R. Martin",
    quotes: [
    "Sleep is good but books are better."
]
};
*/


//===============================================================================================



var author = {
    name: "George R.R. Martin",
    quotes: [
    "Sleep is good but books are better."
]
};

var book = {
    title: "A Game Of Thrones",
    author: author
};

console.log(book.author.name);          //George R.R. Martin



//===============================================================================================


var author = {
    name: "George R.R. Martin",
    yearOfBirth: 1948,
    age: function() {
        2018 - author.yearOfBirth;
    }
};

var yearsOld = author.age;

console.log(yearsOld);      //[Function: age]
console.log(yearsOld());    //undefined  because function doesnt have RETURN



//===============================================================================================


var author = {
    name: "George R.R. Martin",
    yearOfBirth: 1948,
    age: function() {
        return 2018 - author.yearOfBirth;
    }
};

var yearsOld = author.age;

console.log(yearsOld);      //[Function: age]
console.log(yearsOld());    //70


//===============================================================================================


var author = {
    name: "George R.R. Martin",
    yearOfBirth: 1948,
    quotes: [
        "Sleep is good but books are better."
    ],
    age: function() {
        return 2018 - author.yearOfBirth;
    }
};

var quote = author.quotes[1];

console.log(quote);      //


//CHECK UP ON THIS!!!






//===============================================================================================



var author = {
    name: "George R.R. Martin",
    yearOfBirth: 1948,
    quotes: [
        "Sleep is good but books are better."
    ]
}









//===============================================================================================

//....
author.write;   //"Writing...." >>> This is immediatly invoked function








//===============================================================================================


function Author(name, yearOfBirth){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.age = (function() {
        console.log("Writing...");
        return 2021 - yearOfBirth;
    })()
}
var author1 = new Author("George", 1948);
console.log(author1.age);                       // Writing...
                                                //73        Because we used Constructors function





//===============================================================================================



var author = {
    name: "George R.R. Martin",
    yearOfBirth: 1948,
    write: (function() {
        return function () {
            console.log("Writing...");
        };
    })(),
};

author.write;       //doesnt return anything
author.write();     //Writing... because write is function     
console.log(author.write());    //Writing...
                                //Undefined      because of console.log because the second function doesnt have return     



//===============================================================================================



var author = {
    name: "George R.R. Martin",
    yearOfBirth: 1948,
    write: (function() {
        return function () {
            console.log("Writing...");
            return "Something..."
        };
    })(),
};

author.write;       //doesnt return anything
author.write();     //Writing... because write is function     
console.log(author.write());    //Writing...
                                //Something...      now is Something... instead of undefined because we have RETURN in function now



//===============================================================================================



var author = {
    name: "George R.R. Martin",
    gender: "male",
    country: "US",
    quotes: [
        "Sleep is good but books are better."
    ]
};

delete quotes[0];
delete country;

console.log(author);    //ReferenceError: quotes is not defined



//===============================================================================================


var author = {
    name: "George R.R. Martin",
    gender: "male",
    country: "US",
    quotes: [
        "Sleep is good but books are better."
    ]
};

delete author.quotes[0];
delete author.country;

console.log(author.quotes);     //[ <1 empty item> ]
console.log(author.country);    //undefined



//===============================================================================================



var arr = new Array(1, 2, 3, "four", "5");      //Built-In Constructor function

console.log(arr);       



//===============================================================================================


var arr = new Array(4);
console.log(arr);           //[ <4 empty items> ]



//===============================================================================================