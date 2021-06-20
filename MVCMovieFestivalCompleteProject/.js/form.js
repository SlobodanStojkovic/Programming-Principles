var titleValue = document.getElementById("titleInput").value;
var titleLength = document.getElementById("titleLength").value;
var titleGenre = document.getElementById("genre");
var titleGenreValue = titleGenre.options[titleGenre.selectedIndex].value
var titleGenreText=titleGenre.options[titleGenre.selectedIndex].text;

function getCreateMovie1 () {
    console.log(titleValue, titleLength, titleGenreText);
    return new Movie (titleValue, titleLength, titleGenreText);
}