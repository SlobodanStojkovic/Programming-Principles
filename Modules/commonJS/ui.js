(function () {
    function print() {
        console.log("print!");
    }

    function helloWorld() {
        console.log("Hello World!");
    }

    return {
        print: print
    }
})();

//Instead of doing all above, we can do this vvv


function print() {
    console.log("print!");
}

function helloWorld() {
    console.log("Hello World!");
}

module.exports = { print };     //here we export what we want to use in main.js file where we will write const ui = require("./ui");

