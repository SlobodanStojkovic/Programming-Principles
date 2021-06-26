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

var passedNumber = document.getElementById("passedNumber");
var failedNumer = document.getElementById("failedNumer");
var failedPercentage = document.getElementById("failedPercentage");

var college = new College;

function buttonAdd() {

    function validateData() {
        var subjectValue = subject.value;
        var nameSurnameValue = nameSurname.value;
        var gradeValue = grade.value;

        if (!subjectValue || !nameSurnameValue || !gradeValue) {
            errorMessage.textContent = "Please fill out all fields!"
        }

        errorMessage.textContent = "";
    }
    validateData();


    function updateList(exam) {
        var exam = new Exam(subject.value, nameSurname.value, grade.value);
        console.log(exam);

        college.studentGrades[college.studentGrades.length] += exam;
        if (exam.grade > 5) {
            ulPassed.innerHTML += "<li>" + exam.subject + ", " + exam.student + ", " + exam.grade + "</li>";
            college.passedList[college.passedList.length] += exam;
        } else {
            ulFailed.innerHTML += "<li>" + exam.subject + ", " + exam.student + ", " + exam.grade + "</li>";
            college.failedList[college.passedList.length] += exam;
        }
        console.log(college.passedList);
    }
    updateList();


    function updateStatistics() {
        totalStudents.innerHTML = college.studentGrades.length;
        /* passedNumber.innerHTML = college.passedList.length; */
        failedNumer.innerHTML = college.failedList.length;
        failedPercentage.innerHTML = college.failedList.length / college.studentGrades.length * 100 + "%";
    }
    updateStatistics();
}

addButton.addEventListener("click", buttonAdd);