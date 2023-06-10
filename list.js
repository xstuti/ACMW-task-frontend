function addnewtask() {
    let input = document.getElementById("enterbar");
    let newtask = input.value;

    if (newtask == "") {
        alert("Please enter a task");
        return;
    }

    let tasklist = document.getElementById("mylist");
    let listitemnew = document.createElement("li");

    let taskspan = document.createElement("span");
    let optiondelete = document.createElement("button");

    taskspan.innerText = newtask;
    optiondelete.innerText = "Delete";
    optiondelete.addEventListener("click", function () {
        listitemnew.remove();
    });

    listitemnew.appendChild(taskspan);
    listitemnew.appendChild(optiondelete);
    tasklist.appendChild(listitemnew);
    localStorage.setItem("newtask", newtask);

    input.value = "";
}

function toggledone(event) {
    let listitemnew = event.target;
    listitemnew.classList.toggle("completed");
}

function takenotes() {
    let notepad = document.getElementById("notepad");
    let notes = notepad.value;
    localStorage.setItem("notes", notes);
}

let addButton = document.getElementById("addbtn");
addButton.addEventListener("click", addnewtask);

let taskList = document.getElementById("mylist");
taskList.addEventListener("click", toggledone);

let notepad = document.getElementById("notepad");
notepad.addEventListener("input", takenotes);

let notesdisplay = localStorage.getItem("notes");
if (notesdisplay != 0) {
    notepad.value = notesdisplay;
}

let groupsnames = [];

function updategroups() {
    let dropdowngrp = document.getElementById("dropdowngrp");

    let i = 0;
    for (i; i < groupsnames.length; i++) {
        let groupname = groupsnames[i];
        let option = document.createElement("option");
        option.textContent = groupname;
        option.value = groupname;
        dropdowngrp.appendChild(option);
    }
}

function addgroup() {
    let groupnameinput = document.getElementById("groupname");
    let groupname = groupnameinput.value;

    if (groupnamevalue == "") {
        alert("Please enter a group name");
        return;
    }

    groupsnames.push(groupname);
    groupnameinput.value = "";
    updategroups();
}

let newgrpbtn = document.getElementById("newgrpbtn");
newgrpbtn.addEventListener("click", addgroup);