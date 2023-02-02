"use strict";

var studentName = "Suzy";

function printStudent(studentName) {
    studentName2 = studentName.toUpperCase();
    console.log(studentName2);
}

printStudent("Frank");
// FRANK

printStudent(studentName);
// SUZY

console.log(studentName);
// Suzy

console.log(studentName2);