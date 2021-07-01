//With Dario Stamenkovic, 01.07.2021. 19:25

var dudeObj = {
    job: "Ninja",
    say: function (who) {
        return "Hey " + who + ", I am a " + this.job;
    }
}

dudeObj.say("Dude"); // "Hey Dude, I am a Ninja"

var programmerObj = { job: " Scripting guru" };
dudeObj.say.call(programmerObj, "Dude"); //"Hey Dude, I am a Scripting guru"


//APPLY allows you to call another function while overwriting the other functions THIS value.

var dudeObj = {
    job: "Ninja",
    say: function (who, greeting) {
        console.log(greeting + " " + who + ", I am a " + this.job);
    }
}



dudeObj.say("Dude", "Hello"); // "Hello Dude, I am a Ninja"



var programmerObj = { job: " Scripting guru" };
dudeObj.say.call(programmerObj, "Dude", "Hey");     // can have infinite number of parametars
dudeObj.say.apply(programmerObj, ["Dude", "Hey"]);  // always has 2 parametars, second one is array with needed parametars.     
//Other than that, FUNCTIONALITY of APPLY function IS THE SAME as CALL function


var astronaut = { job: "astronaut" };
var bindedFunction = dudeObj.say.bind(astronaut, "Boss", "Good Morning");
bindedFunction();   //Good Morning Boss, I am a astronaut





