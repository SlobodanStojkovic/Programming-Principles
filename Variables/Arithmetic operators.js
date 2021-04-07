
var num1 = 3
var num2 = 2
var num3 = 31


console.log(num1*num2/num3)
console.log(num1-num2*num3)		//-59 because it will first multiply num2 and num3




/*
======================================================================================
5. How many grams weight 1.2kg of bananas? 
======================================================================================
*/

var kg = 1000
var banana = 1.2
var result = banana * kg
console.log(result + ' grams')

/*
======================================================================================
6. How many extra seconds we wait for our friend Anna who is being late for 5 minutes? 
What about Tom who is being late half an hour? It is hard to be on time these days…
======================================================================================
*/

var min = 60
var AnaLate = 5 * min
console.log(AnaLate)

var TomLate = 30 * min
console.log(TomLate)




/*
======================================================================================
7. How many MB of additional memory we have if we buy a 4GB USB stick? 
How many news articles each in size 98KB can fit in it?
======================================================================================
*/

var x = 1000
var memoryStick = 4
var result = x * memoryStick
console.log(result)

var newsArticle = 0.098
console.log(Math.floor(result/newsArticle))

//Math.floor() (round down)  - Keep in mind that Math.floor() will increase numerical value when number is negative. Thus Math.floor(-1.2) -> -2 whilst Math.floor(1.2) -> 1. parseInt(-1.2) -> -1 (as mentioned by @FloydPink) will discard decimal part as expected for both positive and negative numbers.



/*
======================================================================================
9. Do you know any other way to write a = a * 2? How about: b = b + 3; c = c / 5; d = d - 7?
======================================================================================
*/

var a = 1;					
var b = 2;
var c = 3;
var d = 4;

/*If we use in this way we will 
assign values to the variables

==>		console.log(b =+ 3);	//  3
==>		console.log(d =- 7);	// -7
*/

console.log(a *= 2);	//2
console.log(b += 3);	//5
console.log(c /= 5);	//0.6
console.log(d -= 7);	//-3




a *= 2 			//a = a * 2			
b += 3			//b = b + 3
c /=5			//c = c / 5
d -=7			//d = d - 7





/*
======================================================================================
10. Create the following variables:
	- a variable containing your name,
	- a variable containing your age,
	- a variable describing if you have a cat or not.
* Each variable has to start with a different type of character.
Print them all out in the console and check their types.
======================================================================================
*/

var name = 'Slobodan';
var age = 30;
var cat = false;
console.log(name, age, cat);
console.log(typeof name,typeof age,typeof cat);




/*
======================================================================================
11. Check which type are these values:
	- “number”
	- true
	- null
	- “false”
	- 56
======================================================================================
*/

console.log(typeof "number");	// string
console.log(typeof true);		// boolean
console.log(typeof null);		// object
console.log(typeof "false");	// string
console.log(typeof 56);			// number
