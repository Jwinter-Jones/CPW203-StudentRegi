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
//Constants
var programAttr = "data-program";
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
/**
 * Clears all the inputs in the form
 */
function clearForm() {
    var regForm = document.getElementById("reg-form");
    regForm.reset();
    /*
    let allTextBoxes = document.querySelectorAll("input[type=text]");

    for(let i = 0; i < allTextBoxes.length; i++){
        let currBox = <HTMLInputElement> allTextBoxes[i];
        currBox.value = "";
    }
    */
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
function displayStudent(s) {
    var newItem = document.createElement("li");
    newItem.innerText = s.firstName + " " + s.lastName;
    var displaySection = document.querySelector("#student-list>ul");
    displaySection.appendChild(newItem);
    var list = displaySection.querySelector("ul");
    //Embed student data in <li>
    newItem.setAttribute("data-program", s.program);
    newItem.setAttribute("data-address", s.address);
    newItem.setAttribute("data-birthdate", s.dateOfBirth.toString());
    console.log(newItem);
    // Call showStudentData when the <li> is clicked
    newItem.onclick = showStudentData;
    // Add <li> as a child to <ul>
    list.appendChild(newItem);
}
/**
 * Showas individual student data when
 * a student <li> is clicked
 */
function showStudentData() {
    //console.log(this);
    var currListItem = this;
    var name = currListItem.innerText;
    var program = currListItem.getAttribute(programAttr);
    // alert(name + " is studyinng " + program);
    var h2 = document.querySelector("#display h2");
    h2.innerHTML = name;
    var p = document.querySelector("#display > p");
    p.innerHTML = name + " is studying " + program;
}
