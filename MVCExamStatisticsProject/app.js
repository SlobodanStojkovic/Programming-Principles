"use strict";

var subject = document.getElementById("subject");
var subjectValue = subject.value;

var nameSurname = document.getElementById("nameSurname");
var nameSurnameValue = nameSurname.value;

var grade = document.getElementById("grade");
var gradeValue = grade.value;

var addButton = document.getElementById("addStudent");
var errorMessage = document.getElementById("errorMessage");

var ulPassed = document.getElementById("ulPassed");
var ulFailed = document.getElementById("ulFailed");

var totalStudents = document.getElementById("totalStudents");

var passedNumber = document.getElementsByClassName("passedNumber");
var failedNumber = document.getElementsByClassName("failedNumber");
var failedPercentage = document.getElementsByClassName("failedPercentage");

var college = new College;