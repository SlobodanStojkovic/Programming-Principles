//Immediatly Invoked Function Expressions (IIFE-s) with Ivan Balis - 13.04.2021. 18:00




(function () {
    console.log('boo!');
})();




//======================================================================================



(function () {
    console.log('boo!');
}());                           // function can end on two ways - First >>>  )(); adn second >>>  ());




//======================================================================================


var isLoggedIn = false;

var result = (function() {
    
    return isLoggedIn ? "User is authorized" : "User is not authorized";
})();

console.log(result);


//======================================================================================


(function (mood) {
    console.log('Feeling ' + mood + '!');
})('scared by last function');


//======================================================================================


var result = (function() {
    return 'something';
}) ();

console.log(typeof result, result);     //string something


//======================================================================================


var result = (function() {
    return 'something';
});

console.log(result);                    //[Function: result]


//======================================================================================


var result = (function() {
    return 'something';
});

console.log(typeof result, result);     //function [Function: result]



//======================================================================================