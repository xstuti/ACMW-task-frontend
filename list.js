function addnewtask(){
    let input=document.getElementById("enterbar");
    let newtask=input.value;
    
    if(newtask==" "){
        alert("Please enter a task");
        return;
    }

    let tasklist = document.getElementById("mylist");
            let listitemnew = document.createElement("li");
            // let newcheckbox=document.createElement("input");
            // newcheckbox.style.width="3px";
            // newcheckbox.style.height="5px";
            // newcheckbox.addEventListener("click", toggledone);
            // listitemnew.appendChild(newcheckbox);


            let taskspan = document.createElement("span");
            let optiondelete = document.createElement("button");
            
            taskspan.innerText = newtask;
            optiondelete.innerText = "Delete";
            optiondelete.addEventListener("click", function() {
                listitemnew.remove();
            });
            
            listitemnew.appendChild(taskspan);
            listitemnew.appendChild(optiondelete);
            tasklist.appendChild(listitemnew);
            
            input.value =" ";
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
        if (notesdisplay!=0) {
            notepad.value=notesdisplay;
        }
        



// addtask=addnewtask
//task=newtask
// savenotes=takenotes
//return?
//null??