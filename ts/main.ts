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

//Constants
const programAttr = "data-program";


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

/**
 * Clears all the inputs in the form
 */
function clearForm(){
    let regForm = <HTMLFormElement> document.getElementById("reg-form");
    regForm.reset();
    /*
    let allTextBoxes = document.querySelectorAll("input[type=text]");

    for(let i = 0; i < allTextBoxes.length; i++){
        let currBox = <HTMLInputElement> allTextBoxes[i];   
        currBox.value = "";     
    }
    */
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
    let list = displaySection.querySelector("ul");

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
function showStudentData(){
    //console.log(this);
    let currListItem = <HTMLLIElement> this;
    let name = currListItem.innerText;
    let program = currListItem.getAttribute(programAttr);
    // alert(name + " is studyinng " + program);
    let h2 = document.querySelector("#display h2");
    h2.innerHTML = name;

    let p = document.querySelector("#display > p");
    p.innerHTML = name + " is studying " + program;
}