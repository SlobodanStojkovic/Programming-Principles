//With Nenad Bugaric 15.07.2021. 18:00

function print() {
    console.log("Hello!");
}

print();

function print() {          //this declaration overrides first declaration
    console.log("World!");
}

print();
//World!
//World!    because declaration is overridden



(function () {
    function print() {
        console.log("Hello!");
    }
    print();
})();


(function () {
    function print() {
        console.log("World!");
    }

    print();
})();
//Hello!
//World!





(function () {
    function printHello() {
        console.log("Hello!");
    }
})();


(function () {
    function printWorld() {
        console.log("World!");
    }
})()

printHello();
printWorld();
//ReferenceError: printHello is not defined     because function is unavailable in Global Scope







const printV1 = (function () {
    function printHelper1() {
        console.log("H");
    }

    function printHelper2() {
        console.log("H");
    }

    function printHello() {
        console.log("Hello!");
    }

    return printHello;
})();


(function () {
    function printWorld() {
        console.log("World!");
    }
})();


(function () {
    printV1();
})();
//Hello!  but the problem is if we need more functions to return from printV1 we cant do that 







const module1 = (function () {
    function printHelper1() {
        console.log("H");
    }

    function printHelper2() {
        console.log("H");
    }

    function printHello() {
        console.log("Hello!");
    }

    return {
        print: printHello,
    };
})();


const module2 = (function () {
    function printWorld() {
        console.log("World!");
    }

    return {
        print: printWorld,
    }
})();


(function () {
    module1.print();
    module2.print();
})();
//Hello! 
//World!