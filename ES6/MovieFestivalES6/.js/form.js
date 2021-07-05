const festival = new Festival();
let titleOfTheMovie = document.getElementById("titleInput");
let titleLength = document.getElementById("titleLength");
let titleGenre = document.getElementById("genre");
let createMovieBtn = document.getElementById("createMovieBtn");
let dateInputField = document.getElementById("dateInput");
let createProgramBtn = document.getElementById("createProgramBtn");
let addMovieToProgramBtn = document.getElementById("addMovieToProgramBtn");
let errorMovie = document.getElementById("errorMovie");
let newMoviesList = document.getElementById("newMoviesList");
let newProgramList = document.getElementById("newProgramList");
let selectMovie = document.getElementById("selectMovie");
let selectProgram = document.getElementById("selectProgram");



function createNewMovie() {
    let title = titleOfTheMovie.value;
    let length = titleLength.value;
    let genre = titleGenre.value;

    if (!title || !length || !genre) {
        errorMovie.textContent = "Please fill out all required fields."
        return;
    }

    //This deletes values in create movie fields, it MUST BE WRITTEN LIKE THIS titleOfTheMovie.value = ""; BECAUSE title = "" DONT WORK, that is how we set it again.
    titleOfTheMovie.value = "";
    titleLength.value = "";
    titleGenre.value = "-";

    errorMovie.textContent = "";

    let movie = new Movie(title, length, genre)
    festival.listOfAllMovies.push(movie);
    let movieIndex = festival.listOfAllMovies.length - 1;   //this creates index of a movie when we create a new movie -> Then later we use it to connect and insert movie to Program

    let pMovie = document.createElement("p");
    let movieGetData = movie.getData();
    let newMovieInListText = document.createTextNode(movieGetData);
    pMovie.appendChild(newMovieInListText);
    newMoviesList.appendChild(pMovie);

    let sel = document.getElementById("selectMovie");

    // create new option element
    let opt = document.createElement("option");

    // create text node to add to option element (opt)
    opt.appendChild(document.createTextNode(title));

    // set value property of opt
    opt.value = movieIndex;

    // add opt to end of select box (sel)
    sel.appendChild(opt);
}

function createNewProgram() {
    const date = new Date(dateInputField.value);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let ddmmyyyy = `${day}.${month}.${year}.`;

    let now = new Date;
    if (date < now) {
        errorCreateProgram.textContent = "Please enter valid date in future";
        return;
    }


    //some goes through each element of array and returns true or false if at least SOME element has same value
    let hasProgramWithSameDate = festival.listOfAllPrograms.some(function (program) {
        return date.getTime() === program.date.getTime();
    });

    if (hasProgramWithSameDate) {
        errorCreateProgram.textContent = 'Program for same date already exists';
        return;
    }

    
    errorCreateProgram.textContent = "";

    let program = new Program(date);
    festival.listOfAllPrograms.push(program);
    let programIndex = festival.listOfAllPrograms.length - 1;

    let pProgram = document.createElement("p");
    let programGetData = program.getData();
    let newProgramInListText = document.createTextNode(programGetData);

    pProgram.setAttribute("id", "id-" + programIndex);
    pProgram.appendChild(newProgramInListText);
    newProgramList.appendChild(pProgram);

    let sel = document.getElementById("selectProgram");

    // create new option element
    let opt = document.createElement("option");

    // create text node to add to option element (opt)
    opt.appendChild(document.createTextNode(ddmmyyyy));

    // set value property of opt
    opt.value = programIndex;

    // add opt to end of select box (sel)
    sel.appendChild(opt);
}

function addMovieToProgram() {
    let movieValue = selectMovie.value;
    let movieObject = festival.listOfAllMovies[movieValue];

    let programValue = selectProgram.value;
    let programObject = festival.listOfAllPrograms[programValue];
    programObject.addMovie(movieObject);

    //this selects paragraph where program get Data informations are and then appends new text to id -> updates it with number of movies and their lenght
    let p = document.querySelector("#id-" + programValue);
    p.textContent = programObject.getData();
}

createMovieBtn.addEventListener("click", createNewMovie);
createProgramBtn.addEventListener("click", createNewProgram);
addMovieToProgramBtn.addEventListener("click", addMovieToProgram);