# ACMW-task-frontend![Screenshot 2023-06-08 211051](https://github.com/xstuti/ACMW-task-frontend/assets/127834817/129a8765-9d10-4ed6-a2c5-944589cbdeaa)
![Screenshot 2023-06-08 212211](https://github.com/xstuti/ACMW-task-frontend/assets/127834817/207e6024-87dd-47e5-859f-eb2e70ba8f81)
![Screenshot 2023-06-08 213626](https://github.com/xstuti/ACMW-task-frontend/assets/127834817/b1aa33b5-1ffc-4658-a44f-7b67ba3294d7)
![Screenshot 2023-06-08 213811](https://github.com/xstuti/ACMW-task-frontend/assets/127834817/07484bd4-4b68-4a4a-a976-423ca4ecfd9b)
![Screenshot 2023-06-08 220221](https://github.com/xstuti/ACMW-task-frontend/assets/127834817/fd3f62d3-e026-4533-94e0-56d52c22bf1b)
![s1](https://github.com/xstuti/ACMW-task-frontend/assets/127834817/3e9eb453-6e8f-4e8a-8356-7393191e1aa8)
![s2](https://github.com/xstuti/ACMW-task-frontend/assets/127834817/a5e09f75-6778-4485-849b-bf14446cb7df)
![s3](https://github.com/xstuti/ACMW-task-frontend/assets/127834817/0ac10356-fdaa-449b-a126-3194cc7aa676)


I started this project out by learning basics about git and github from the given resources. I moved onto learning basic HTML, few properties of CSS and Javascript.
The project given was to construct a to-do list using HTML, CSS and JS where the user could add, delete, group and strikethrough tasks upon completion, along with a note-taking space.
I started off with writing the basic html syntax for the skeleton of a to-do list, including the heading, space to enter new tasks and a button. Next I tried to construct the logic for addition of new tasks using appendchild method. I added the textarea for taking notes right after that, making sure the notes were saved in the local storage. I added a new button with the creation of every new task with the purpose of deleting the task by using remove (). After addition of all this, I worked on allowing the user to mark the items as completed by clicking on them (toggling), by using the CSS styling called line-through.
I fixed the alignment of the delete buttons, and added a lot more CSS styling to the container such as changing background colours, fonts, fixing the alignment of text and notebox, padding, margins.
I worked on allowing the user to create groups to be stored into a dropdown box (by using select) while creating new tasks using appendchild and tried to ensure that the groups once create would permanently stay in the drop down list by storing them in an array. I added a button to create the groups by using addeventlistener, in a process similar to the creation of new tasks. In the end, I added some final touches to the CSS styling.

Some confusing areas I encountered were: 
1. Confusion regarding where to use queryselector and getelementbyID
2. Whether to use a form that would be taking in the input from the buttons or not
3. Initially confused about how to take in user input; learnt to use input.value
4. Whether including return in a function was necessary
5. A complication I faced was that all of the tasks were getting struck off instead of just the desired one by using parent node. Resolved by using event.target property.
6. Delete button for each task was appearing somewhere in the middle of the span, not at the absolute right. Fixed by learning about absolute and relative positions.
7. Struggled with adding the grouping feature
8. Confused where to use appendchild vs push
