"use strict";

function Exam(subject, student, grade) {
    this.student = student;
    this.subject = subject;
    this.grade = grade;
}

Exam.prototype.getExamInfo = function () {
    return this.subject + ", " + this.student;
}

Exam.prototype.hasPassed = function () {
    if (grade > 5) {
        return "passed";
    } else {
        return "failed";
    }
}

