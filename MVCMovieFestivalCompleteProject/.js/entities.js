"use strict";


class Movie {
    constructor(title, genre, length) {
        if (!genre) {
            throw new Error("Please insert valid genre");
        }
        if (!title || !length) {
            throw new Error("Fields title and length are required");
        }
        this.title = title;
        this.genre = genre;
        this.length = parseInt(length);
    }

    getGenreShort() {
        return this.genre[0] + this.genre[this.genre.length-1];
    }

}

class Program {
    constructor(date) {
        this.date = new Date(date);
        this.listOfMovies = [];
        this.totalNumberOfMovies = this.listOfMovies.length;
    }

    addMovie(movie) {
        if (!movie) {
            throw new Error("Please insert valid movie");
        }
        this.listOfMovies.push(movie);
    }

    getData() {
        var now = new Date(date);
        var day = now.getDate();
        var month = now.getMonth() + 1;
        var year = now.getFullYear();
        var ddmmyy = day + "." + month + "." + year;

        function totalLength () {
            var result = 0;
            this.listOfMovies.forEach(function (movie) {
                result += movie.length;
            });
            return result;
        }

        function movieList() {
            var result = "";
            this.listOfMovies.forEach(function (movie) {
                result += "\t\t\t\t" + movie.title + ", " + movie.length + " min" + ", " + movie.genre.name + "\n";
            });
            return result;
        }
        return "\t\t" + ddmmyy + ", Program duration is " + this.totalLength() + " min" + "\n" + this.movieList();
    }
}


class Festival {
    constructor(name) {
        this.name = name;
        this.listOfPrograms = [];
    }

    numberOfMovies() {
        var count = 0;
        this.listOfPrograms.forEach(function (program) {
            count += program.totalNumberOfMovies;
        });
        return count;
    }

    addProgram(program) {
        if (!program) {
            throw new Error("Please insert valid program");
        }
        this.listOfPrograms.push(program);
    }

    getData() {
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


