"use strict";

function Festival() {
    this.listOfAllMovies = [];
    this.listOfAllPrograms = [];
}



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
    return `${this.title},  ${this.length}min, ${this.genre[0]}${this.genre[this.genre.length - 1].toUpperCase()}`;
}



function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];
}

Program.prototype.totalMovieDuration = function () {
    let result = 0;
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
    const date = new Date(this.date);
    let day = this.date.getDate();
    let month = this.date.getMonth();
    let year = this.date.getFullYear();
    let ddmmyyyy = `${day}.${month}.${year}.`;
    return `${ddmmyyyy}, ${this.totalNumberOfMovies()} movies, duration: ${this.totalMovieDuration()}min`;
}


