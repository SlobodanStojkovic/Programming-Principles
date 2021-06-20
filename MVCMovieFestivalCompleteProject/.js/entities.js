"use strict";




function Movie(title, genre, length) {
/*     if (!genre) {
        throw new Error("Please insert valid genre");
    } */
/*     if (!title) {
        throw new Error("Field title is required");
    } */
/*     if (!length) {
        throw new Error("Field length is required");
    } */
    this.title = title;
    this.genre = genre;
    this.length = parseInt(length);
}

Movie.prototype.getData = function () {
    return this.title + ", " + this.length + "min" + ", " + (this.genre[0] + this.genre[this.genre.length - 1]).toUpperCase();
}



function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];
}

Program.prototype.totalMovieDuration = function () {
    var result = 0;
    this.listOfMovies.forEach(function (movie) {
        result += movie.length;
    });
    return result;
}

Program.prototype.addMovie = function (movie) {
    this.listOfMovies.push(movie);
}

Program.prototype.totalNumberOfMovies = function () {
    return this.listOfMovies.length;
}

Program.prototype.getData = function () {
    var day = this.date.getDate();
    var month = this.date.getMonth();
    var year = this.date.getFullYear();
    var date = day + "." + month + "."+ year + "."
    return date + ", " + this.totalNumberOfMovies() + " movies, duration: " + this.totalMovieDuration() + "min";
}


function createMovie (movieTitle, movieGenre, movieLength) {
    return new Movie(movieTitle, movieGenre, movieLength);
}


function createProgram  (date) {
    return new Program(date);
}



var movie1 = createMovie("Titanic", "Drama", 123);
var movie2 = createMovie("Hitman", "Action", 120);

console.log(movie1);
console.log(movie1.getData());

var program1 = createProgram("Oct 7 2022");
program1.addMovie(movie1);
program1.addMovie(movie2);


console.log(program1);
console.log(program1.totalMovieDuration());
console.log(program1.totalNumberOfMovies());
console.log(program1.getData());

