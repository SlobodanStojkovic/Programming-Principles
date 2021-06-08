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
        if (!name || !surname || !dateOfBirth) {
            throw new Error("Fields name, surname and date of birth are required");
        }
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = new Date(dateOfBirth);
        this.getFormatedString = function () {
            return this.name + ", " + this.surname + ", " + this.dateOfBirth;
        }
    }

    function Player(person, betAmount, country) {
        if (!person || !(person instanceof Person)) {
            throw new Error("Invalid person input");
        }
        if (!country || !(country instanceof Country)) {
            throw new Error("Invalid country input");
        }
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;
        var now = new Date;
        var currentYear = now.getFullYear();
        var personAge = currentYear - this.person.dateOfBirth.getFullYear();

        function secondLetterConsonant() {
            var name2 = country.name.toUpperCase();
            for (var i = 1; i < name2.length; i++) {
                var result = "";
                if (name2[i] === "A" || name2[i] === "E" || name2[i] === "I" || name2[i] === "O" || name2[i] === "U") {
                    continue
                } else {
                    result = name2[i];
                }
                return result;
            }
        }
        this.getFormatedString = function () {
            return this.country.name[0] + secondLetterConsonant() + ", " + (this.betAmount * this.country.odds).toFixed(2) + ", " + this.person.name + " " + this.person.surname + ", " + personAge + " years."
        }
    }

    function Address(country, city, postalCode, street, streetNumber) {
        if (!country || !(country instanceof Country)) {
            throw new Error("Invalid country input");
        }
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.streetNumber = streetNumber;

        function secondLetterConsonant() {
            var name2 = country.name.toUpperCase();
            for (var i = 1; i < name2.length; i++) {
                var result = "";
                if (name2[i] === "A" || name2[i] === "E" || name2[i] === "I" || name2[i] === "O" || name2[i] === "U") {
                    continue
                } else {
                    result = name2[i];
                }
                return result;
            }
        }
        this.getFormatedString = function () {
            return this.street + " " + this.streetNumber + ", " + this.postalCode + " " + this.city + " " + this.country.name[0] + secondLetterConsonant();
        }
    }

    function BettingPlace(address) {
        if (!address || !(address instanceof Address)) {
            throw new Error("Invalid address input");
        }
        this.address = address;
        this.listOfPlayers = [];
        this.addPlayer = function (player) {
            this.listOfPlayers.push(player);
        }
        this.sumOfAllBets = function () {
            var sum = 0;
            this.listOfPlayers.forEach(function (player) {
                sum += player.betAmount;
            });
            return sum;
        }
        this.getFormatedString = function () {
            return address.street + ", " + address.postalCode + " " + address.city + ", " + "sum of all bets: " + this.sumOfAllBets() + "eur";
        }
    }

    function BettingHouse(competition) {
        this.competition = competition;
        this.listOfBettingPlaces = [];
        this.numberOfPlayers = function () {
            var totalPlayers = 0;
            this.listOfBettingPlaces.forEach(function (bettingPlace) {
                totalPlayers += bettingPlace.listOfPlayers.length;
            })
            return totalPlayers;
        }
        this.addBettingPlace = function (bettingPlace) {
            this.listOfBettingPlaces.push(bettingPlace);
        }


        function getSR(bettingHouse) {
            var count = 0;

            bettingHouse.listOfBettingPlaces.forEach(function (bettingPlace) {

                bettingPlace.listOfPlayers.forEach(function (player) {
                    if (player.country == "Serbia") {
                        count++;
                    }
                })
            });
            return count;
        }

        this.getFormatedString = function () {
            var result = "";
            result += this.competition + ", " + this.listOfBettingPlaces.length + " betting places, " + this.numberOfPlayers() + " bets" + "\n";
            this.listOfBettingPlaces.forEach(function (bettingPlace) {
                result += "\t" + bettingPlace.getFormatedString() + "\n";
                bettingPlace.listOfPlayers.forEach(function (player) {
                    result += "\t\t" + player.getFormatedString() + "\n";
                })
            });

            result += "There are " + getSR() + " bets on Serbia";
            return result;
        }
    }



    function createPlayer(person, bet, country) {
        return new Player(person, bet, country);
    }

    function createBettingPlace(address) {
        return new BettingPlace(address);
    }

    try {


        var serbia = new Country("Serbia", 3, "EU");
        var greece = new Country("Greece", 5, "EU");

        var person1 = new Person("Pera", "Peric", ("Jan 7 1991"));
        var person2 = new Person("Majda", "Jankovic", ("Jun 13 1999"));
        var person3 = new Person("Jova", "Jovanovic", ("Nov 26 1997"));
        var person4 = new Person("Slavica", "Milanovic", ("Sep 30 1983"));

        var address1 = new Address(serbia, "Belgrade", 11000, "Nemanjina", 4);
        var address2 = new Address(serbia, "Belgrade", 11000, "Kneza Milosa", 35);

        var player1 = new Player(person1, 500, serbia);
        var player2 = new Player(person2, 1000, serbia);
        var player3 = new Player(person3, 2500, greece);
        var player4 = new Player(person4, 800, serbia);

        var bettingPlace1 = new BettingPlace(address1);
        var bettingPlace2 = new BettingPlace(address2);

        bettingPlace1.addPlayer(player1);
        bettingPlace1.addPlayer(player2);

        bettingPlace2.addPlayer(player3);
        bettingPlace2.addPlayer(player4);

        var bettingHouse1 = new BettingHouse("Football World Cup Winner");

        bettingHouse1.addBettingPlace(bettingPlace1);
        bettingHouse1.addBettingPlace(bettingPlace2);

        console.log(bettingHouse1.getFormatedString());


    } catch (error) {
        console.log("Error message: " + error.message);
    }

})();

