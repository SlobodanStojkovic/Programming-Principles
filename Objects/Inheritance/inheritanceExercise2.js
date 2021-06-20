/*
Applications:
1. Create constructor functions with properties representing the following:
○ WebApp: name, url, technologies, licence, stars
○ MobileApp: name, platforms, licence, stars
2. All web applications should inherit methods:
○ getData which prints out all the information
○ reactBased which checks if one of the used technologies is React
3. All mobile applications should inherit methods:
○ getData which prints out all the informations
○ forAndroid which checks if one of the platforms the application is developed for is
Android

4. Both web and mobile applications should inherit methods:
○ isCCLicence which checks if the licence of the application is CC (Creative
Commons)
○ like which increases the number of stars by one
○ showStars which prints out the number of stars
*/

function App(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}

App.prototype.isCCLicence = function () {
    if (this.licence === "CC") {
        return true;
    } else return false;
}

App.prototype.like = function () {
    this.stars++;
}

App.prototype.showStars = function () {
    console.log(this.stars);
}





function WebApp(name, url, technologies, licence, stars) {
    App.call(this, name, licence, stars);

    this.url = url;
    this.technologies = technologies;
}
WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;

WebApp.prototype.getData = function () {
    console.log(this.name + ", " + this.url + ", " + this.technologies + ", " + this.licence + ", " + this.stars)
}

WebApp.prototype.reactBased = function () {
    if (this.technologies.toLowerCase() === "react") {
        return true;
    } else return false;
}





function MobileApp(name, platforms, licence, stars) {
    App.call(this, name, licence, stars);
    this.platforms = platforms;
}
MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;

MobileApp.prototype.getData = function () {
    console.log(this.name + ", " + this.platforms + ", " + this.licence + ", " + this.stars);
}

MobileApp.prototype.forAndroid = function () {
    if (this.platforms === "android") {
        return true;
    } else return false;
}



var web1 = new WebApp("Calendar", "www.calendard.com", "JS", "Freeware", 4.5);
var mob1 = new MobileApp("Viber", "react", "Free", 5);

console.log(web1);
console.log(mob1);









//newer way of writing this code from above is vvv




class App {
    constructor(name, licence, stars) {
        this.name = name;
        this.licence = licence;
        this.stars = stars;
    }

    isCCLicence() {
        if (this.licence === "CC") {
            return true;
        } else return false;
    }

    like() {
        this.stars++;
    }

    showStars() {
        console.log(this.stars);
    }
}



class WebApp extends App {
    constructor(name, url, technologies, licence, stars) {
        super(name, licence, stars)

        this.url = url;
        this.technologies = technologies;
    }

    getData() {
        console.log(this.name + ", " + this.url + ", " + this.technologies + ", " + this.licence + ", " + this.stars)
    }

    reactBased() {
        if (this.technologies === "react") {
            return true;
        } else return false;
    }
}



class MobileApp extends App {
    constructor(name, platforms, licence, stars) {
        super(name, licence, stars);

        this.platforms = platforms;
    }

    getData() {
        console.log(this.name + ", " + this.platforms + ", " + this.licence + ", " + this.stars);
    }

    forAndroid() {
        if (this.platforms === "android") {
            return true;
        } else return false;
    }
}

var app1 = new App("Calendar", "Free", 4);
var web1 = new WebApp("Calendar", "www.calendar.com", "JS", "Freeware", 4.5);
var mob1 = new MobileApp("Calendar", "react", "Free", 4.5);

mob1.getData();
console.log(web1.isCCLicence());
web1.like();

web1.showStars();
web1.getData();
console.log(web1.reactBased());
