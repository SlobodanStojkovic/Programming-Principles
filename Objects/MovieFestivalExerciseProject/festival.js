"use strict";

(function () {

    function Genre(name) {
        if (!name) {
            throw new Error("Field name is required");
        }
        this.name = name;

        this.getData = function () {
            return (this.name[0] + this.name[this.name.length - 1]).toUpperCase();
        }
    }

    function Movie(title, genre, length) {
        if (!genre && genre instanceof Genre) {
            throw new Error("Please insert valid genre");
        }
        if (!title || !length) {
            throw new Error("Fields title and length are required");
        }
        this.title = title;
        this.genre = genre;
        this.length = length;

        this.getData = function () {
            return this.title + ", " + this.length + "min" + ", " + genre.getData();
        }
    }

    function Program(date) {
        this.date = new Date(date);
        this.listOfMovies = [];
        this.totalNumberOfMovies = this.listOfMovies.length;
        this.addMovie = function (movie) {
            if (!movie && movie instanceof Movie) {
                throw new Error("Please insert valid movie");
            }
            this.listOfMovies.push(movie);
        }
        this.getData = function () {
            var now = new Date(date);
            var day = now.getDate();
            var month = now.getMonth() + 1;
            var year = now.getFullYear();
            var ddmmyy = day + "." + month + "." + year;
            this.totalLength = function () {
                var result = 0;
                this.listOfMovies.forEach(function (movie) {
                    result += movie.length;
                });
                return result;
            };
            this.movieList = function () {
                var result = "";
                this.listOfMovies.forEach(function (movie) {
                    result += "\t\t\t\t" + movie.title + ", " + movie.length + " min" + ", " + movie.genre.name + "\n";
                });
                return result;
            }
            return "\t\t" + ddmmyy + ", Program duration is " + this.totalLength() + " min" + "\n" + this.movieList();
        }
    }

    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
        this.numberOfMovies = function () {
            var count = 0;
            this.listOfPrograms.forEach(function (program) {
                count += program.totalNumberOfMovies;
            });
            return count;
        }
        this.addProgram = function (program) {
            if (!program && program instanceof Program) {
                throw new Error("Please insert valid program");
            }
            this.listOfPrograms.push(program);
        }
        this.getData = function () {
            this.programData = function () {
                var result = "";
                this.listOfPrograms.forEach(function (program) {
                    result += program.getData();
                })
                return result + "\n";
            }
            return this.name + " has " + this.numberOfMovies() + " movie titles" + "\n" + this.programData();
        }
    }

    function createMovie(movieTitle, movieGenre, movieLength) {
        return new Movie(movieTitle, movieGenre, movieLength);
    }

    function createProgram(date) {
        return new Program(date);
    }

    try {

        var festival1 = new Festival("Cannes");

        var program1 = createProgram("Oct 7 2021");
        var program2 = createProgram("Oct 8 2021");

        var genre1 = new Genre("Action");
        var genre2 = new Genre("Drama");
        var genre3 = new Genre("Comedy");

        var movie1 = createMovie("The Shawshank Redemption", genre2, 130);
        var movie2 = createMovie("Fast and Furious 7", genre1, 150);
        var movie3 = createMovie("The Transporter", genre1, 93);
        var movie4 = createMovie("Stuart Little", genre3, 92);

        program1.addMovie(movie1);
        program1.addMovie(movie2);
        program2.addMovie(movie3);
        program2.addMovie(movie4);

        festival1.addProgram(program1);
        festival1.addProgram(program2);

        console.log(festival1.getData());

    } catch (error) {
        console.log("Error message: " + error.message)
    }

})()





/*
Festival
In your IDE of choice, create a new JavaScript file named festival.js and make it so that all
code written in the file follows strict mode.
Create an anonymous immediately-invoking function that will hold the main execution of all
program calls. Writing a simple command console.log(“Hi”) inside this function and running
code should output “Hi“ in the console.
Create constructor functions with properties representing the following:
● Genre - name
● Movie - title, genre (instance of Genre), length
● Program - date, list of movies (initially empty) and total number of movies
● Festival - name, list of programs (initially empty), and number of movies in all programs
Add method getData to Genre which returns formatted string as first and last letter of genre
name
&quot;Action&quot; -&gt; AN
&quot;Drama&quot; -&gt; DA
&quot;Comedy&quot; -&gt; CY
Add getData method to Movie. It should return a formatted string consisting of the movie title,
length and genre acronym.
The Shawshank Redemption, 130min, AN
Add addMovie method to Program. It should receive a Movie and add the movie to the movie
list of a given program.
Add addProgram method to Festival. It should receive a Program and add the program to the
list of the given festival’s programs.
Add getData method to Program. It should return a formatted string of all data related to the
program. The string should contain date, program length (calculated from length of all movies in a
list) and data about movies in a list (see the example below). To display movie data, use Movie’s
getData method.
Date, program length from all movies
First movie title, length and genre
Second movie title, length and genre
Third movie title, length and genre
Fourth movie name and length and genre

Add method getData to Festival which return formatted string like festival name, number of
movies in all programs and all programs listed. Use Programs getData method to list all
programs. (example output is shown below)
Weekend festival has 4 movie titles
28.10.2017, program duration 368min
Spider-Man: Homecoming, 133min, AN
War for the Planet of the Apes, 140min, DA
The Dark Tower, 95min, WN
29.10.2017, program duration 108min
Deadpool, 108min, CY

Inside your immediately-invoking function, add createMovie function that receives a movie title,
movie length and genre (as a string) as parameters and returns a created Movie.
Inside your immediately-invoking function, add createProgram function that receives a date and
returns a created Program.
Start creating your movie festival.
In your main program function, create an instance of the Festival object.
Create two instances of Program using createProgram function.
Create four instances of Movie object using createMovie function. Add all created movies to
both programs using the addMovie method.
Add the created program instances to the created festival instance using festival’s addProgram
method.
Display festival’s data using getData method.
Hints
● List is a synonym for array, so when we say a list of movies, it’s actually an array of movie
objects
● Use JS built-in Date()object to create Date object
● Use \t and \n special strings to format output
● Use built-in String methods to transform text from lowercase to uppercase
● Use Array’s built-in methods to add and remove elements from an array
*/

