"use strict";

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

        if (exam.grade > 10 || exam.grade < 1) {
            errorMessage.textContent = "Please enter valid grade!"
            return
        }

        errorMessage.textContent = "";

        college.studentGrades[college.studentGrades.length] += exam;
        if (exam.grade > 5) {
            ulPassed.innerHTML += "<li>" + exam.subject + ", " + exam.student + ", " + exam.grade + "</li>";
            college.passedList[college.passedList.length] += exam;
        } else {
            ulFailed.innerHTML += "<li>" + exam.subject + ", " + exam.student + ", " + exam.grade + "</li>";
            college.failedList[college.failedList.length] += exam;
        }
        console.log();
    }
    updateList();


    function updateStatistics() {
        totalStudents.textContent = parseInt(college.studentGrades.length);
        document.querySelector(".passedNumber").textContent = parseInt(college.passedList.length);
        document.querySelector(".failedNumber").textContent = parseInt(college.failedList.length);
        document.querySelector(".failedPercentage").textContent = (parseInt(college.failedList.length) / parseInt(college.studentGrades.length) * 100).toFixed() + "%";
    }
    updateStatistics();
}

addButton.addEventListener("click", buttonAdd);