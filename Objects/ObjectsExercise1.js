/*
1. Create an object that represents your favourite coffee. Please include coffee name,
strength, flavour, milk, sugar, … everything you like!
*/

var coffee = {
    name: "nescaffe",
    strenght: "light",
    flavour: "vanilla",
    milk: true,
    sugar: true,
}

console.log(coffee.flavour);


/*
2. Create an object that represents your favourite movie. Please include title, actors,
director, genre, popularity.
*/



var movie = {
    title: "Titanic",
    actors: {
        actor1: {
            firstName: "Leonardo",
            lastName: "Di Caprio",
        },
        actor2: {
            firstName: "Kate",
            lastName: "Winslet",
        }
    },
    director: {
        firstName: "James",
        lastName: "Cameron",
    },
    genre: "thriller",
    popularity: "7.8/10 IMDB reference"
}


console.log(movie);
console.log(movie.actors);
console.log(movie.actors.actor1.firstName);
console.log(movie.actors.actor2);






//Here we will see for what are used constructors functions

var titanic = {
    tittle: "Titanic",
    director: "James Cameron",
    genre: "thriller",
    imdbGrade: 7.8,
}

var reservoirOfDogs = {
    tittle: "Reservoir of Dogs",
    director: "Quentin Tarantino",
    genre: "thriller",
    imdbGrade: 8.3,
}

var theLordOfTheRings = {
    tittle: "The Lord of the Rings",
    director: "Peter Jackson",
    genre: "Fantasy/Adventure",
    imdbGrade: 8.7,
}




//This function is used to create a movie - its a constructors function

function createMovie(t, d, g, im) {
    var movie = {
        title: t,
        director: d,
        genre: g,
        imdbGrade: im,
    }
    return movie;
}


var titanic = createMovie("Titanic", "James Cameron", "thriller", 7.8);
console.log(titanic);



/*
3. Write a function that creates an object that represents a project. Each project is
described by: description, programming language, git repository, boolean status that
says if the project is in development or not. Add a method that prints out the project's
repository, a method that checks if the project is written in JavaScript as well as a
method that checks if the project is in development or not.
*/

function testProject(desc, lang, git, dev) {
    var project = {
        description: desc,
        language: lang,
        gitRepository: git,
        inDevelopment: dev,
        printGit: function () {
            return console.log(git);
        },
        isJavaScript: function () {
            if (project.language === "JavaScript") {                 //instead of project.language we can also use lang
                return "Project is written in JavaScript";
            } else "Project is written in " + project.language;     //instead of project.language we can also use lang
        },
        isInDevelopment: function () {
            if (this.inDevelopment === true) {                       //This object that we are located in >>> third way that we can use
                return "Project is in development";
            } else {
                return "Project is not in development";
            }
        }
    }
    return project;
}

var login = testProject("Login form for app", "JavaScript", "https://www.github.com/SlobodanStojkovic", true);
console.log(login);

login.printGit();
console.log(login.isJavaScript());
console.log(login.isInDevelopment());

var myJavascript = testProject("some description", "JavaScript", "www.github.com/SlobodanStojkovic", true);
console.log(myJavascript);



//Dario Stamenkovic's way of solving this task

function createProject(desc, lang, url, dev) {
    var project = {
        description: desc,
        language: lang,
        gitUrl: url,
        isInDev: dev,
        printRepository: function () {
            console.log(url);
        },
        isJavaScript: function () {
            return lang === 'JavaScript';
        },
        isDevelopment: function () {
            return dev ? 'project is in development' : 'project is not in development'
        }
    }
    return project;
}

var calculator = createProject('program that calculates..', 'Java Script', 'https:/github', true);
var blog = createProject('blog portal', 'wordpress', 'https:/github', false);
console.log(calculator);
console.log(blog);
calculator.printRepository();
blog.printRepository();
console.log(calculator.isDevelopment());
console.log(blog.isDevelopment());

/*
4. Write a function that creates an object that represents a culinary recipe. Each recipe is
described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
preparing time, preparing instruction.

○ Add a method that prints out all the ingredients necessary for the meal
preparation.
○ Add a method that checks if a meal can be prepared for 15 minutes.
○ Add a method that changes the type of cuisine to the given value.     //this we skip for now
○ Add a method that delete a given ingredient from the list of ingredients.
*/


function testRecipe(name, type, complexity, arrIngredients, time, instructions) {
    if (complexity < 1 || complexity > 5) {
        return "Please enter value between 1 and 5"
    }
    var recipe = {
        name: name,
        typeOfCuisine: type,
        complexity: complexity,
        ingredientsList: arrIngredients,
        prepTime: time,
        prepInstructions: instructions,
        printIngredients: function () {
            console.log(arrIngredients);
        },
        checkTime: function () {
            if (time < 15) {
                console.log("This meal can be prepared in less than 15 minutes");
            } else {
                console.log("This meal is prepared longer than 15 minutes");
            }
        },
        deleteIngredient: function (deleteIngr) {
            var newIngredientsList = [];
            for (var i = 0; i < arrIngredients.length; i++) {
                if (arrIngredients[i] != deleteIngr) {
                    newIngredientsList[newIngredientsList.length] = arrIngredients[i];
                }
            }
            this.arrIngredients = newIngredientsList;
        }
    }
    return recipe;
}


var Pizza = new testRecipe(
    "Pizza",
    "pasta",
    3,
    ["cheese",
        "eggs", "ketchup", "flour", "ham", "olive oil"],
    60,
    "Mix everything and add ham and cheese on top"
);

console.log(Pizza);
console.log(Pizza.prepTime);

Pizza.deleteIngredient("olive oil");
console.log(Pizza);
