/*
Employees and Managers
1. Create constructor functions with properties representing the following:
○ Person: name, surname
○ Employee: inherits Person and has job and salary
○ Developer: inherits from Employee and has specialization
○ Manager: inherits from Employee and has department
2. All developers should inherit method:
○ getSpecialization which prints out the name of the specialization
3. All managers should inherit methods:
○ getDepartment which prints out the name of the department
○ changeDepartment which sets the department value on the given value
4. All employees should inherit methods:
○ getData which returns the name, surname and salary
○ getSalary which prints out the salary
○ increaseSalary which increases the salary by 10%
*/

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}



function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getData = function () {
    return this.name + ", " + this.surname + ", " + this.salary;
}
Employee.prototype.getSalary = function () {
    console.log(this.salary);
}
Employee.prototype.increaseSalary = function () {
    this.salary += (this.salary / 100) * 10;
}



function Developer(name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}
Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.getSpecialization = function () {
    console.log(this.specialization);
}



function Manager(name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary);
    this.department = department;
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.getDepartment = function () {
    console.log(this.department);
}

Manager.prototype.changeDepartment = function (newDepartment) {
    this.department = newDepartment;
}



var employee1 = new Employee("Pera", "Peric", "Programmer", 1000);
employee1.increaseSalary();

var manager1 = new Manager("Marko", "Markovic", "manager1", "2000", "finances")
manager1.changeDepartment("accounting");

console.log(manager1);








//newer way of writing the code from above is vvv


class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}



class Employee extends Person {
    constructor(name, surname, job, salary) {
        super(name, surname);

        this.job = job;
        this.salary = salary;
    }
    getData() {
        return this.name + ", " + this.surname + ", " + this.salary;
    }

    getSalary() {
        console.log(this.salary);
    }

    increaseSalary() {
        this.salary += (this.salary / 100) * 10;
    }

}





class Developer extends Employee {
    constructor(name, surname, job, salary, specialization) {
        super(name, surname, job, salary);

        this.specialization = specialization;
    }

    getSpecialization() {
        console.log(this.specialization);
    }
}




class Manager extends Employee {
    constructor(name, surname, job, salary,  department) {
        super(name, surname, job, salary);

        this.department = department;
    }

    getDepartment() {
        console.log(this.department);
    }

    changeDepartment(newDepartment) {
        this.department = newDepartment;
    }
}


var employee1 = new Employee("Pera", "Peric", "Programmer", 1000);
employee1.increaseSalary();
console.log(employee1);