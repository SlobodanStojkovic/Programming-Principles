//with Ivan Balic 08.06.2021. - 18:00
/*

An object - entity, caries inside itself some informations for the entity it represents. 

Method is a function inside object while property is a representation of one of objects characteristic. 

this.data = data; >>> PROPERTY

this.getLetters = function () {...} >>> METHOD

CLASS of object in OOP is a blueprint, or a recipe for an object.

CLASS is actually a Constructor Function that creates the objects of same CLASS >>> var person1 = new Person; each person is created using Person class.


Another name for OBJECT is INSTANCE, so we say that the eagle is one concrete instance of the general class Birds.

A CLASS is just a template, while the objects are CONCRETE INSTANCES based on the template.


In JAVASCRIPT EVERYTHING is based on OBJECTS.

ENCAPSULATION concept offers protection of access to some properties. For example, everybody cant access the bank account information about ammount of money on account.

in JavaScript all methods and properties are public, but there are ways to protect the data inside an object and achieve privacy.

AGGREGATION or COMPOSITION >>> Combining several objects into a new one. Its a powerful way to separate a problem into smaller and more manageable parts (divide and conquer). Book object can contain (aggregate) one or more Author objects, a Publisher object, several Chapter objects, a TOC (table of contents), and so on.


INHERITANCE > "nasleđivanje" > Inheritance is an elegan way to reuse existing code. For example, you can have a generic object, Person, which has properties such as name and dateOfBirth, and which also implements the functionality walk, talk, sleep, and eat.

"B inherits from A and "B extends A"

Redefining how an inherited method works is known as OVERRIDING.

POLYMORPHISM is ability to call the same method on different objects and have each of them respond in their own way. From the same template we can make a lot of different entities how the product of that template will look like.


*/