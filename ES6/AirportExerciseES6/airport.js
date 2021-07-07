"use strict";

(function () {

    function Person(name, surname) {    //we make constructor function to unifie object and to know what it has >>> name and surname
        if (!name || !surname) {
            throw new Error("Fields name and surname are required");
        }
        this.name = name;
        this.surname = surname;
        this.getData = function () {
            return `${this.name} ${this.surname}`;
        };
    }

    function Seat(number = Math.floor((101 - 10) * Math.random() + 10), category = "e") { //if exists its category written in function, if it doesnt exists its "e"
        if (!["e", "b"].includes(category)) {
            throw new Error("Invalid category input");
        }
        this.number = number;
        this.category = category;
        this.getData = function () {
            return `${this.number}, ${this.category.toUpperCase()}`;
        };
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
            return `${this.seat.getData()}, ${this.person.getData()}`;
        };
    }

    function Flight(relation, date) {
        if (!relation || !date) {
            throw new Error("Fields relation and date are required");
        }
        this.relation = relation;
        this.date = new Date(date); //because passengers will be obliged to enter in certain date format
        this.listOfPassengers = []; //initially empty array
        this.addPassenger = function (passenger) {
            if (!passenger || !(passenger instanceof Passenger)) {
                throw new Error("Invalid person input");
            }
            this.listOfPassengers.push(passenger);
        };
        this.getData = function () {
            let result = "";
            let day = this.date.getDate();
            let month = this.date.getMonth() + 1; //because getMonth() returns from 0-11 > indexes
            let year = this.date.getFullYear();
            result += `     ${day}.${month}.${year}.${this.relation}
`;
            this.listOfPassengers.forEach(function (passenger) {
                result += `         ${passenger.getData()}
`;
            });
            return result;
        };
        this.numberOfPassengers = function () {
            return this.listOfPassengers.length;
        };
    }

    function Airport() {
        this.name = "Nikola Tesla",
            this.listOfFlights = [];
        this.addFlight = function (flight) {
            if (!flight || !(flight instanceof Flight)) {
                throw new Error("Invalid flight");
            }
            this.listOfFlights.push(flight);
        };

        this.getTotalPassengerNumber = function () {
            let count = 0;
            this.listOfFlights.forEach(function (flight) {
                count += flight.numberOfPassengers();
            });
            return count;
        };

        this.getData = function () {
            let result = `Airport: ${this.name}, total passengers: ${this.getTotalPassengerNumber()}
`;
            this.listOfFlights.forEach(function (flight) {
                result += flight.getData();
            });
            return result;
        };
    }

    function createFlight(relation, date) {
        return new Flight(relation, date);
    }

    function createPassenger(name, surname, seatNumber, seatCategory) {
        let person = new Person(name, surname);
        let seat = new Seat(seatNumber, seatCategory);
        return new Passenger(person, seat);

    }

    //testing
    try {
        let nikolaTesla = new Airport();
        let flight1 = createFlight("Belgrade - New York", "Oct 25 2017");
        let flight2 = createFlight("Barcelona - Belgrade", "Nov 11 2017");
        let passenger1 = createPassenger("John", "Snow", 1, "b");
        let passenger2 = createPassenger("Cersei", "Lanister", 2, "b");
        let passenger3 = createPassenger("Daenerys", "Targaryen", 14);
        let passenger4 = createPassenger("Tyrion", "Lannister");

        flight1.addPassenger(passenger1);
        flight1.addPassenger(passenger2);

        flight2.addPassenger(passenger3);
        flight2.addPassenger(passenger4);

        nikolaTesla.addFlight(flight1);
        nikolaTesla.addFlight(flight2);
        console.log(nikolaTesla);
        console.log(nikolaTesla.getData());

    } catch (error) {
        console.log("Error message:" + error.message);
    }

})();


/* passenger1 is multidimensional object
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