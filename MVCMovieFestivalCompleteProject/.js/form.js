var festival = new Festival();
var titleOfTheMovie = document.getElementById("titleInput");
var titleLength = document.getElementById("titleLength");
var titleGenre = document.getElementById("genre");
var createMovieBtn = document.getElementById("createMovieBtn");
var dateInputField = document.getElementById("dateInput");
var createProgramBtn = document.getElementById("createProgramBtn");
var addMovieToProgramBtn = document.getElementById("addMovieToProgramBtn");
var errorMovie = document.getElementById("errorMovie");
var newMoviesList = document.getElementById("newMoviesList");
var newProgramList = document.getElementById("newProgramList");
var selectMovie = document.getElementById("selectMovie");
var selectProgram = document.getElementById("selectProgram");



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
        festival.listOfAllMovies.push(movie);
        var movieIndex = festival.listOfAllMovies.length - 1;   //this creates index of a movie when we create a new movie -> Then later we use it to connect and insert movie to Program

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
        opt.value = movieIndex;

        // add opt to end of select box (sel)
        sel.appendChild(opt);
    }
}

function createNewProgram() {
    var date = new Date(dateInputField.value);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var ddmmyyyy = day + "." + month + "." + year + ".";

    var program = new Program(date);
    festival.listOfAllPrograms.push(program);
    var programIndex = festival.listOfAllPrograms.length - 1;

    var pProgram = document.createElement("p");
    var programGetData = program.getData();
    var newProgramInListText = document.createTextNode(programGetData);

    pProgram.setAttribute("id", "id-" + programIndex);
    pProgram.appendChild(newProgramInListText);
    newProgramList.appendChild(pProgram);

    var sel = document.getElementById("selectProgram");

    // create new option element
    var opt = document.createElement("option");

    // create text node to add to option element (opt)
    opt.appendChild(document.createTextNode(ddmmyyyy));

    // set value property of opt
    opt.value = programIndex;

    // add opt to end of select box (sel)
    sel.appendChild(opt);
}

function addMovieToProgram() {
    var movieValue = selectMovie.value;
    var movieObject = festival.listOfAllMovies[movieValue];

    var programValue = selectProgram.value;
    var programObject = festival.listOfAllPrograms[programValue];
    programObject.addMovie(movieObject);

    //this selects paragraph where program get Data informations are and then appends new text to id -> updates it with number of movies and their lenght
    var p = document.querySelector("#id-" + programValue);
    p.textContent = programObject.getData();
}

createMovieBtn.addEventListener("click", createNewMovie);
createProgramBtn.addEventListener("click", createNewProgram);
addMovieToProgramBtn.addEventListener("click", addMovieToProgram);