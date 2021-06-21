"use strict";

function Genre(genre) {
    this.genre = genre;
}


function Movie(title, length, genre) {
    Genre.call(this, genre);
    this.title = title;
    this.length = parseInt(length);
    this.genre = genre;
}
Movie.prototype = Object.create(Genre.prototype);
Movie.prototype.constructor = Movie;

Movie.prototype.getData = function () {
    return this.title + ", " + this.length + "min" + ", " + this.genre[0] + this.genre[this.genre.length - 1].toUpperCase();
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



var movie1 = new Movie("Titanic", "Drama", 123);
var movie2 = new Movie("Hitman", "Action", 120);

console.log(movie1);
console.log(movie1.getData());

var program1 = new Program("Oct 7 2022");
program1.addMovie(movie1);
program1.addMovie(movie2);


console.log(program1);
console.log(program1.totalMovieDuration());
console.log(program1.totalNumberOfMovies());
console.log(program1.getData());

