var titleOfTheMovie = document.getElementById("titleInput");
var titleLength = document.getElementById("titleLength");
var titleGenre = document.getElementById("genre");
var createMovieBtn = document.getElementById("createMovieBtn");
var dateInputField = document.getElementById("dateInput");
var createProgramBtn = document.getElementById("createProgramBtn");
var addMovieToProgramBtn = document.getElementById("addMovieToProgramBtn");
var errorMovie = document.getElementById("errorMovie");
var movieArray = [];
var programArray = [];
var newMoviesList = document.getElementById("newMoviesList");





function createNewMovie() {
    var title = titleOfTheMovie.value;
    var length = titleLength.value;
    var genre = titleGenre.value;

    if (!title || !length || !genre) {
        errorMovie.textContent = "Please fill out all required fields."
        //This deletes values in create movie fields
        title = "";
        length = "";
        genre = "-";

    } else {
        errorMovie.textContent = "";

        var movie = new Movie(title, length, genre)
        movieArray.push(movie);

        var p = document.createElement("p");
        var movieGetData = movie.getData();
        var newMovieInListText = document.createTextNode(movieGetData);
        p.appendChild(newMovieInListText);
        newMoviesList.appendChild(p);
    }

}

function createNewProgram() {
    var date = new Date(dateInputField.value);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var ddmmyyyy = day + "." + month + "." + year + "."
    return ddmmyyyy + ", " + Program.prototype.totalNumberOfMovies() + " movies, duration: " + Program.prototype.totalMovieDuration() + "min";
}

/* function addMovieToProgram() {
    var 
} */

createMovieBtn.addEventListener("click", createNewMovie);
createProgramBtn.addEventListener("click", createNewProgram);
/* addMovieToProgramBtn.addEventListener("click", addMovieToProgram); */