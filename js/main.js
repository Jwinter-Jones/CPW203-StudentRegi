"use strict";
/**
 * Represents a college student
 */
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
// This is test code
var stu = new Student();
stu.firstName = "Joe"; // SET
var fName = stu.firstName; // GET
stu.address = "123 Fake street";
window.onload = main;
function main() {
    var regBtn = document.querySelector("button");
    regBtn.onclick = processForm;
}
function processForm() {
    var nextStu = getStudentFromForm();
    displayStudent(nextStu);
    clearForm();
}
function getStudentFromForm() {
    var tempStu = new Student();
    tempStu.firstName = getInputValue("first-name");
    tempStu.lastName = getInputValue("last-name");
    tempStu.dateOfBirth = new Date(getInputValue("dob"));
    tempStu.address = getInputValue("address");
    tempStu.program = getInputValue("program");
    console.log(tempStu);
    return tempStu;
}
function getInputValue(id) {
    var elem = document.getElementById(id);
    return elem.value;
    // return (<HTMLInputElement> document.getElementById(id)).value; works too
}
