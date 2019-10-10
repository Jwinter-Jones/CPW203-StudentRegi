/**
 * Represents a college student
 */
class Student{
    firstName:string;
    lastName:string;
    dateOfBirth:Date;

    /**
     * The full address of the sstudent.
     * Street, City, State & Zip
     */
    address:string;

    /**
     * The program of study
     */
    program:string;

    /*
    constructor(fName, lName){
        this.firstName = fName;
        this.lastName = lName;    
    }
    */
}

// This is test code
let stu:Student = new Student();
stu.firstName = "Joe"; // SET
let fName = stu.firstName; // GET
stu.address = "123 Fake street";

window.onload = main;

function main(){
    let regBtn = document.querySelector("button");
    regBtn.onclick = processForm;
}

function processForm(){
    let nextStu:Student = getStudentFromForm();
    displayStudent(nextStu);
    clearForm();
}

function getStudentFromForm():Student{
    let tempStu = new Student();
    tempStu.firstName = getInputValue("first-name");
    tempStu.lastName = getInputValue("last-name");
    tempStu.dateOfBirth = new Date(getInputValue("dob"));
    tempStu.address = getInputValue("address");
    tempStu.program = getInputValue("program");
    console.log(tempStu);
    return tempStu;
}

function getInputValue(id:string):string{
    let elem = <HTMLInputElement> document.getElementById(id);
    return elem.value;
    // return (<HTMLInputElement> document.getElementById(id)).value; works too
}

function displayStudent(s:Student):void{
    let newItem = document.createElement("li");
    newItem.innerText = s.firstName + " " + s.lastName;
    let displaySection = document.querySelector("#student-list>ul");
    displaySection.appendChild(newItem);
}