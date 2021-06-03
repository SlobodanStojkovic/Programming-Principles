/*
In your IDE of choice, create a new JavaScript file named shopping.js and make it so that all
code written in the file follows strict mode.
*/  //IDE we work on is Visual Studio Code
"use strict";


/*
Create an anonymous immediately-invoking function that will hold the main execution of all
program calls. Writing a simple command console.log(“Hi”) inside this function and running
the code should output “Hi“ in the console.
*/  //WE DO THIS TO SIMULATE INNER SCOPE
/*
(function () {
    console.log("Hi");

})()
*/



(function () {

    function Person(name, surname) {    //we make constructor function to unifie object and to know what it has >>> name and surname
        if (!name || !surname) {
            throw new Error("Fields name and surname are required")
        }
        this.name = name;
        this.surname = surname;
        this.getData = function () {
            return this.name + " " + this.surname
        }
    }

    function Seat(number, category) {
        category = category || "e"; //if exists its category written in function, if it doesnt exists its "e"
        number = number || Math.floor((101 - 10) * Math.random() + 10)  //101 because of Math.floor

        if (!["e", "b"].includes(category)) {
            throw new Error("Invalid category input");
        }
        this.number = number;
        this.category = category;
        this.getData = function () {
            return this.number + ", " + this.category.toUpperCase()
        }
    }

    function Passenger(person, seat) {
        if (!person || !(person instanceof Person)) {
            throw new Error("Invalid person input");
        }
        if (!seat || !(seat instanceof Seat)) {
            throw new Error("Invalid seat input");
        }
        this.person = person;
        this.seat = seat;
        this.getData = function () {
            return this.seat.getData() + ", " + this.person.getData()
        }
    }

    function Flight(relation, date) {
        if (!relation || !date) {
            throw new Error("Fields relation and date are required")
        }
        this.relation = relation;
        this.date = new Date(date); //because passengers will be obliged to enter in certain date format
        this.listOfPassengers = []; //initially empty array
        this.addPassenger = function (passenger) {
            if (!passenger || !(passenger instanceof Passenger)) {
                throw new Error("Invalid person input");
            }
            this.listOfPassengers.push(passenger);
        }
        this.getData = function () {
            var result = "";
            var day = this.date.getDate();
            var month = this.date.getMonth() + 1; //because getMonth() returns from 0-11 > indexes
            var year = this.date.getFullYear();
            result += "\t" + day + "." + month + "." + year + ", " + this.relation + "\n"; // \t   is tab, indented text
            this.listOfPassengers.forEach(function (passenger) {
                result += "\t\t" + passenger.getData() + "\n"
            })
            return result;
        }
        this.numberOfPassengers = function () {
            return this.listOfPassengers.length;
        }
    }
    
    function Airport() {
        this.name = "Nikola Tesla",
            this.listOfFlights = [];
        this.addFlight = function (flight) {
            if (!flight || !(flight instanceof Flight)) {
                throw new Error("Invalid flight")
            }
            this.listOfFlights.push(flight);
        }

        this.getTotalPassengerNumber = function () {
            var count = 0;
            this.listOfFlights.forEach(function (flight) {
                count += flight.numberOfPassengers()
            })
            return count;
        }

        this.getData = function () {
            var result = "Airport: " + this.name + ", total passengers: " + this.getTotalPassengerNumber() + "\n";
            this.listOfFlights.forEach(function (flight) {
                result += flight.getData();
            })
            return result;
        }
    }

    function createFlight(relation, date) {
        return new Flight(relation, date)
    }

    function createPassenger(name, surname, seatNumber, seatCategory) {
        var person = new Person(name, surname);
        var seat = new Seat(seatNumber, seatCategory);
        return new Passenger(person, seat);

    }

    //testing
    try {
        var nikolaTesla = new Airport();
        var flight1 = createFlight("Belgrade - New York", "Oct 25 2017")
        var flight2 = createFlight("Barcelona - Belgrade", "Nov 11 2017")
        var passenger1 = createPassenger("John", "Snow", 1, "b");
        var passenger2 = createPassenger("Cersei", "Lanister", 2, "b");
        var passenger3 = createPassenger("Daenerys", "Targaryen", 14,);
        var passenger4 = createPassenger("Tyrion", "Lannister");

        flight1.addPassenger(passenger1);
        flight1.addPassenger(passenger2);

        flight2.addPassenger(passenger3);
        flight2.addPassenger(passenger4);

        /*
        var person1 = new Person("Pera", "Peric")
        var person2 = new Person("Marko", "Markovic")
        var seat1 = new Seat()
        var seat2 = new Seat(23, "b");
        var passenger1 = new Passenger(person1, seat1)
        var passenger2 = new Passenger(person2, seat2)  CODE bellow vvv CHANGES commented code after createPassenger function
        
        var passenger1 = createPassenger("Pera", "Peric");
        var passenger2 = createPassenger("Marko", "Markovic", 23, "b")
        */

        //var flight1 = new Flight("Belgrade - Paris", "Oct 25 2017") //console.log(flight1.date.getFullYear()); returns 2017
        //var flight1 = createFlight("Belgrade - Paris", "Oct 25 2017")

        //var flight2 = new Flight("Manila - Hong Kong", "Nov 11 2017") this is how we created flights before createFlight function
        //var flight2 = createFlight("Manila - Hong Kong", "Nov 11 2017");


        //console.log(person1.getData()); returns Pera Peric
        //console.log(flight1);

        //console.log(flight1.listOfPassengers[0].seat.category);

        nikolaTesla.addFlight(flight1);
        nikolaTesla.addFlight(flight2);
        console.log(nikolaTesla);
        console.log(nikolaTesla.getData());

    } catch (error) {
        console.log("Error message:" + error.message);
    }

})()


/* passenger1 is multidimenzional object
Passenger {
  person: Person { name: 'Pera', surname: 'Peric' },
  seat: Seat { number: 22, category: 'e' }
}
*/








/*
Create constructor functions with properties representing the following “things”:
● Product - product id (random number of 5 digits generated on every product creation),
name, price (with 2 decimal places), expiration date
● ShoppingBag - a list of products (initially empty; function constructor does not have any
input parameters)
Add getInfo method to Product. It should return a formatted string containing product code
(the first and last letter of the name together with the product id), name and price.
&quot;Banana&quot; -&gt; BA32784, Banana, 129.31
Add addProduct method to ShoppingBag. It should receive a Product and add it to the
product list. You can add a product to the list only if it has a valid expiration date.
Add a method to ShoppingBag that calculates the average product price of products in your
product list and prints out this value with the precision of three decimals.
Add getMostExpensive method that finds the most expensive product and prints out its info.
Add calculateTotalPrice method to ShoppingBag that calculates the total price of products
in the shopping bag list.
Create a constructor function with properties representing the following:
● PaymentCard - account balance (number with 2 decimal places), active or inactive status,
valid until date
Create checkoutAndBuy function which receives shopping bag and payment card and prints if
the purchase is successful or not. Purchase is successful only if the amount on the card is greater
or equal to the total price of products in the shopping bag. If there is not enough money, print out
the amount that is missing to complete the purchase.
*/