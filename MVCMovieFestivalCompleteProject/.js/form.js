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
var newProgramList = document.getElementById("newProgramList");





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

        var pMovie = document.createElement("p");
        var movieGetData = movie.getData();
        var newMovieInListText = document.createTextNode(movieGetData);
        pMovie.appendChild(newMovieInListText);
        newMoviesList.appendChild(pMovie);

        var sel = document.getElementById("selectMovie");

        // create new option element
        var opt = document.createElement("option");

        // create text node to add to option element (opt)
        opt.appendChild(document.createTextNode(title));

        // set value property of opt
        opt.value = movie;

        // add opt to end of select box (sel)
        sel.appendChild(opt);
    }

}

function createNewProgram() {
    var date = new Date(dateInputField.value);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var ddmmyyyy = day + "." + month + "." + year + "."
    console.log(ddmmyyyy);

    var program = new Program(date);
    programArray.push(program);

    var pProgram = document.createElement("p");
    var programGetData = program.getData();
    var newProgramInListText = document.createTextNode(programGetData);
    pProgram.appendChild(newProgramInListText);
    newProgramList.appendChild(pProgram);


    var sel = document.getElementById("selectProgram");

    // create new option element
    var opt = document.createElement("option");

    // create text node to add to option element (opt)
    opt.appendChild(document.createTextNode(ddmmyyyy));

    // set value property of opt
    opt.value = date;

    // add opt to end of select box (sel)
    sel.appendChild(opt);
}

function addMovieToProgram() {
    /*     var movieSelect = 
        
        var programSelect =  */
}

createMovieBtn.addEventListener("click", createNewMovie);
createProgramBtn.addEventListener("click", createNewProgram);
/* addMovieToProgramBtn.addEventListener("click", addMovieToProgram); */