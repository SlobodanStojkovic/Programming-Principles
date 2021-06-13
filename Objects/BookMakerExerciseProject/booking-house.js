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
        /* if (continent != "EU" && continent != "AS" && continent != "AF" && continent != "SA" && continent != "NA" && continent != "AU") {
                    throw new Error("Please insert valid continent");
                } this code can be written like this vvv */
        if (!Object.values(CONTINENTS).includes(continent)) {
            throw new Error('Please insert valid continent');
        }
        if (!name || !odds) {
            throw new Error("Country name and odds are required");
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
        if (!betAmount) {
            throw new Error("Invalid bet ammount input");
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
        if (!city || !postalCode || !street || !streetNumber) {
            throw new Error("Please enter city, postal code, street and street number");
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
        if (!competition) {
            throw new Error("Invalid competition input");
        }
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
        this.getBetsByCountry = function (country) {
            var count = 0;
            this.listOfBettingPlaces.forEach(function (bettingPlace) {
                bettingPlace.listOfPlayers.forEach(function (player) {
                    if (player.country.name == country) {
                        count++;
                    }
                })
            });
            return "There are " + count + " bets on " + country + ".";
        }
        this.getFormatedString = function (param) {
            if (!param) {
                param = "Serbia";
            }
            var result = "";
            result += this.competition + ", " + this.listOfBettingPlaces.length + " betting places, " + this.numberOfPlayers() + " bets" + "\n";
            this.listOfBettingPlaces.forEach(function (bettingPlace) {
                result += "\t" + bettingPlace.getFormatedString() + "\n";
                bettingPlace.listOfPlayers.forEach(function (player) {
                    result += "\t\t" + player.getFormatedString() + "\n";
                })
            });
            result += this.getBetsByCountry(param);
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

        console.log(bettingHouse1.getFormatedString("Greece"));
        console.log(bettingHouse1.getFormatedString());

    } catch (error) {
        console.log("Error message: " + error.message);
    }

})();









/*
Bookmaker’s

In your IDE of choice, create a new JavaScript file named booking-house.js and make it so that all code written in the file follows JS strict mode.

Create an anonymous immediately-invoking function that will hold main execution of all program calls. Make sure that functions that you write in this function are pure functions.

Create constructor functions with properties representing the following:
Country - name, odds, continent (EU, AS, AF, SA, NA, AU)
Person - name, surname, date of birth
Player - person, bet amount, country (instance of Country)
Address - country, city, postal code, street and number
BettingPlace - address and list of players (initially empty)
BettingHouse - competition, list of betting places (initially empty) and number of players

Create continents as constants (objects that can not change). So, when passing a continent as a parameter, you should pass Continent.ASIA.

Add a method to Person that returns a formatted string containing the name, surname and date of birth of the person (date of birth in dd.mm.yy format).

Add a method to Address that returns a formatted string like the following one:
    Nemanjina 4, 11000 Beograd, SR

Add a method to Player that returns a formatted string containing a country, expected win amount (odds * bet amount) and person data.
SR, 1050.00 eur, Pera Peric, 29 years

Add a method to BettingPlace that returns a formatted string containing a street (without a number), postal code and city, and sum of all bet amounts of that place.
Nemanjina, 11000 Belgrade, sum of all bets: 50000eur

Add a method to BettingPlace that adds a player to the players list of a betting place.

Inside your immediately-invoking function, add a function that returns a created Player.

Inside your immediately-invoking function, add a function that creates a BettingPlace.

Create an instance of the BettingHouse that receives the name of competition.

Create four players with random data. Create two betting places. Add created players as you wish to Betting places. Add betting places to the betting house.

Display all betting house data in the following manner:




Football World Cup Winner, 2 betting places, 4 bets
    Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
        SR, 1050.00 eur, Pera Peric, 29 years
        SR, 1050.00 eur, Pera Peric, 29 years
Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
        GR, 1050.00 eur, Pera Peric, 29 years
        SR, 1050.00 eur, Pera Peric, 29 years
There are 3 bets on Serbia


*/
