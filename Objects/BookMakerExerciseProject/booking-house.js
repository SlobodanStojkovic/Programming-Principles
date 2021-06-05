"use strict";

(function () {

    var CONTINENTS = Object.freeze({
        EUROPE: "EU",
        ASIA: "AS",
        AFRICA: "AF",
        SOUTH_AMERICA: "SA",
        NORTH_AMERICA: "NA",
        AUSTRALIA: "AU",
    })
    function Country(name, odds, continent) {
        if (continent != "EU" && continent != "AS" && continent != "AF" && continent != "SA" && continent != "NA" && continent != "AU") {
            throw new Error("Please insert valid continent");
        }
        this.name = name;
        this.odds = odds;
        this.continent = continent;

    }

    function Person(name, surname, dateOfBirth) {
        if (!name || !surname) {
            throw new Error("Fields name and surname are required");
        }
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = dateOfBirth;
        this.getFormatedString = function () {
            return this.name + ", " + this.surname + ", " + this.dateOfBirth;
        }
    }

    function Player(person, betAmount, country) {
        if (!person || !(person instanceof Person)) {
            throw new Error("Invalid person input");
        }
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;
        var now = new Date;
        var currentYear = now.getFullYear();
        console.log("Current year is " + currentYear);

        this.getFormatedString = function () {
            return this.country.name[0]+this.country.name[2].toUpperCase() + " " + this.betAmount * this.country.odds + ", " + this.person.name +  " " + this.person.surname + ", " + (currentYear - this.person.dateOfBirth.getFullYear()) + " years.";
        }
    }

    function Address(country, city, postalCode, street, streetNumber) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.streetNumber = streetNumber;
        this.getFormatedString = function () {
            var countryLetters = this.country[0] + this.country[2];
            return this.street + " " + this.streetNumber + ", " + this.postalCode + " " + this.city + " " + countryLetters.toUpperCase();
        }
    }

    function BettingPlace(address) {
        this.address = address;
        this.listOfPlayers = [];
    }

    function BettingHouse(competition, numberOfPlayers) {
        this.competition = competition;
        this.listOfBettingPlaces = [];
        this.numberOfPlayers = numberOfPlayers;
    }


    try {

        var serbia = new Country("Serbia", 5, "EU")
        //console.log(serbia);
        //console.log(serbia.continent());

        var person1 = new Person("Pera", "Peric", new Date("07.01.1991"));
        console.log(person1);
        console.log(person1.getFormatedString())

        var address1 = new Address("Serbia", "Belgrade", 11000, "Nemanjina", 4);

        console.log(address1.getFormatedString());
        var player1 = new Player(person1, 500, serbia)

        console.log(player1.getFormatedString());

        console.log(serbia.odds);


    } catch (error) {
        console.log("Error message: " + error.message);
    }


})();