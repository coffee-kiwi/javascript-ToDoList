import { getProjects, findProject, saveProjects } from "./state.js"
import { ToDos } from "./createToDo.js";
import * as addToDoProperties from "./addToDoProperties.js";
import { format } from 'date-fns';
import { addToDoToProject } from "./addToDoToProject.js";
import { showToDoList } from "./showToDoList.js";

export default function newToDoForm(project) {

    const formContainer = document.getElementById("form-display");
    const formTitle = document.getElementById("form-title");
    const display = document.getElementById("display");
    formContainer.textContent = "";
    formTitle.textContent = "Add a new activity, task, or event:"

    const toDoForm = document.createElement("form");

    const titleLabel = document.createElement("label");
    titleLabel.htmlFor = "title"; 
    titleLabel.textContent = "New To Do: ";
    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("placeholder", "Thinking time");
    titleInput.setAttribute("required", "");

    const message = document.createElement("p");
    message.textContent = "* required"
    message.classList.add("small");

    const lineBreak = document.createElement("br")

    const descriptionLabel = document.createElement("label");
    descriptionLabel.htmlFor = "description"; 
    descriptionLabel.textContent = "Description: ";
    const descriptionInput = document.createElement("input");
    descriptionInput.setAttribute("type", "text");
    descriptionInput.setAttribute("name", "description");
    descriptionInput.setAttribute("placeholder", "Short description..");

    const dateLabel = document.createElement("label");
    dateLabel.htmlFor = "dueDate"; 
    dateLabel.textContent = "Due Date: ";
    const dueDateInput = document.createElement("input");
    dueDateInput.setAttribute("type", "text");
    dueDateInput.setAttribute("name", "dueDate");
    dueDateInput.setAttribute("placeholder", "2026/07/20");

    const priorityLabel = document.createElement("label");
    priorityLabel.htmlFor = "title"; 
    priorityLabel.textContent = "Priority: ";
    const priorityInput = document.createElement("input");
    priorityInput.setAttribute("type", "text");
    priorityInput.setAttribute("name", "priority");
    priorityInput.setAttribute("placeholder", "urgent / high / medium / low");

    const submitBtn = document.createElement("button");
    submitBtn.classList.add("form-button");
    submitBtn.textContent = "Create New Project";

    toDoForm.appendChild(titleLabel);
    toDoForm.appendChild(titleInput);
    toDoForm.appendChild(message);
    toDoForm.appendChild(lineBreak);
    toDoForm.appendChild(descriptionLabel);
    toDoForm.appendChild(descriptionInput);
    toDoForm.appendChild(lineBreak);
    toDoForm.appendChild(dateLabel);
    toDoForm.appendChild(dueDateInput);
    toDoForm.appendChild(lineBreak);
    toDoForm.appendChild(priorityLabel);
    toDoForm.appendChild(priorityInput);
    toDoForm.appendChild(lineBreak);
    toDoForm.appendChild(submitBtn);
    formContainer.appendChild(toDoForm);

    submitBtn.addEventListener("click", (e) => {
        console.log(`The validity of this form is: ${toDoForm.checkValidity()}`)
        if (toDoForm.checkValidity()) {
            formContainer.textContent = "";
            formTitle.textContent = "";
            contentTitle.textContent = `${project.title}`;
            const save = Object.fromEntries(new FormData(toDoForm));
            const newToDo = new ToDos(save.title);
            addToDoProperties.addDescription(newToDo, save["description"]);
            addToDoProperties.addDueDate(newToDo, save["dueDate"]);
            addToDoProperties.addPriority(newToDo, save["priority"]);
            addToDoToProject(project, newToDo);
            showToDoList(project, display);
            saveProjects();
        } else {
            message.textContent = "Ensure to write a title for this new to do :)"
        } 
    });
}