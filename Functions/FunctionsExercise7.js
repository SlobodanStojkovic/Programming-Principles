/*
======================================================================================
1. Why pay a fortune teller when you can just program your fortune yourself?
Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.
======================================================================================
*/




function fortuneTeller (numberOfChildren, partnersName, geographicLocation, jobTitle) {
    var result = "";
    result = "You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnersName + " with " + numberOfChildren +" kids."
    return result;
}
console.log(fortuneTeller("1", "Ana", "New York", "Manager"));
console.log(fortuneTeller("2", "Carole", "Paris", "Programmer"));
console.log(fortuneTeller("3", "Veronica", "Dubai", "CEO"));




/*
======================================================================================
2. You know how old your dog is in human years, but what about dog years? Calculate it!

Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.

Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
======================================================================================
*/



function calculateDogAge (dogAge) {
    result = dogAge * 7;
    return "Your doggie is " + result + " years old in dog years!"
}
console.log(calculateDogAge(1));
console.log(calculateDogAge(2));
console.log(calculateDogAge(3));





//Bonus vvv

function calculateDogAge (dogAge) {
    result = dogAge * 7;
    return "Your dog is " + dogAge + " years old and that is " + result + " in dog's years!"
}
console.log(calculateDogAge(1));
console.log(calculateDogAge(2));
console.log(calculateDogAge(3));




/*
======================================================================================
3. Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.

Bonus: Accept floating point values for amount per day, and round the result to a round number.
======================================================================================
*/


function calculateSupply (age, amountPerDay) {
    var result = "";
    var maxAge = 100;
    var yearlyAmmount = 365 * amountPerDay;
    result = yearlyAmmount * (maxAge - age);
    return "You will need " + result + " candies to last you until the ripe old age of " + maxAge;
}
console.log(calculateSupply(31, 1));
console.log(calculateSupply(15, 3));
console.log(calculateSupply(60, 2));




//Bonus vvv

function calculateSupply (age, minAmountPerDay, maxAmountPerDay) {
    var minResult;
    var maxResult;

    var maxAge = 100;

    var minYearlyAmmount = 365 * minAmountPerDay;
    var maxYearlyAmmount = 365 * maxAmountPerDay;

    minResult = minYearlyAmmount * (maxAge - age);
    maxResult = maxYearlyAmmount * (maxAge - age);

    return "You will need from " + minResult + " to " + maxResult + " candies to last you until the ripe old age of " + maxAge;
}
console.log(calculateSupply(31, 1, 2));
console.log(calculateSupply(15, 3, 5));
console.log(calculateSupply(60, 2, 4));


/*
======================================================================================
4. It's hot out! Let's make a converter based on the steps here.

Create a function called celsiusToFahrenheit:
Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".

Create a function called fahrenheitToCelsius:
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."
======================================================================================
*/



function celsiusToFahrenheit (celsius) {
    var result = 32 + (celsius * 1.8);
    return "The temperature of " + celsius + "°C" + " is equal to the temperature of " + result + "°F.";
}
console.log(celsiusToFahrenheit(30));






function fahrenheitToCelsius (fahrenheit) {
    var result = (fahrenheit - 32) * 5/9;
    return "The temperature of " + fahrenheit + "°F" + " is equal to the temperature of " + result + "°C.";
}
console.log(fahrenheitToCelsius(100));