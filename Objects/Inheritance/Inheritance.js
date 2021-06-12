/* With Dario Stamenkovic 12.06.2021. 14:00

JS uses a prototype-based OOP model which makes its syntax foreign to most developers.

3 Distinguishable types of objects:
1. Native Objects 
2. Host Objects
3. User Objects

Primitive types are not objects, everything else it is.

PRIMITIVES that are not object: 
- numbers, 
- strings, 
- booleans, 
- undefined, 
- null.

Everything else is an OBJECT: 
- Arrays, 
- Functions, 
- Objects, 
- Dates, 
- Wrappers for Numbers, Strings, Booleans.

Object interacting with one another throught methods and properties.

Constructor is function with UpperCase starting Letter from which it can create many instances strucured on same way as Constructor.

PROTOTYPE is Object on which there are methods that every object will have. 

*/

function Person(name, surName) {
    this.name = name;
    this.surName = surName;
}

Person.prototype.getData = function () {
    return this.name + " " + this.surName;
}
var person1 = new Person("Pera", "Peric");

console.log(person1);
console.log(person1.toString());