
var num1 = 3
var num2 = 2
var num3 = 31


console.log(num1*num2/num3)
console.log(num1-num2*num3)

//5. How many grams weight 1.2kg of bananas? 

var kg = 1000
var banana = 1.2
var result = banana * kg
console.log(result + ' grama')


//6. How many extra seconds we wait for our friend Anna who is being late for 5 minutes? What about Tom who is being late half an hour? It is hard to be on time these days…

var min = 60
var AnaLate = 5 * min
console.log(AnaLate)

var TomLate = 30 * min
console.log(TomLate)


//7. How many MB of additional memory we have if we buy a 4GB USB stick? How many news articles each in size 98KB can fit in it?

var x = 1000
var memoryStick = 4
var result = x * memoryStick
console.log(result)

var newsArticle = 0.098
console.log(Math.floor(result/newsArticle))

//Math.floor() (round down)  - Keep in mind that Math.floor() will increase numerical value when number is negative. Thus Math.floor(-1.2) -> -2 whilst Math.floor(1.2) -> 1. parseInt(-1.2) -> -1 (as mentioned by @FloydPink) will discard decimal part as expected for both positive and negative numbers.





//9. Do you know any other way to write a = a * 2? How about: b = b + 3; c = c / 5; d = d - 7?

//??? Pomocu Compound operatora

a*=2 ;
b+=3

var a = 1
var b = 2
var result = a * b
console.log(result)


/*
10. Create the following variables:
	- a variable containing your name,
	- a variable containing your age,
	- a variable describing if you have a cat or not.
* Each variable has to start with a different type of character.
Print them all out in the console and check their types.
*/

var name = 'Slobodan';
var age = 30;
var cat = false;
console.log(name, age, cat)
console.log(typeof name,typeof age,typeof cat)




/*
11. Check which type are these values:
	- “number”
	- true
	- null
	- “false”
	- 56
*/

console.log(typeof "number")
console.log(typeof true)
console.log(typeof null)
console.log(typeof "false")
console.log(typeof 56)

//Pitati Ivana zašto je null - Object i šta je Object u JavaScriptu