import { getProjects, findProject, saveProjects } from "./state.js"
import { ToDos } from "./createToDo.js";
import * as addToDoProperties from "./addToDoProperties.js";
import { format } from 'date-fns';
import { addToDoToProject } from "./addToDoToProject.js";
import { showToDoList } from "./showToDoList.js";
// import { format, parse } from 'date-fns';

export default function newToDoForm(project) {

    const formContainer = document.getElementById("form-display");
    const contentTitle = document.getElementById("main-content-title")
    const formTitle = document.getElementById("form-title");
    const display = document.getElementById("display");
    formContainer.textContent = "";
    formTitle.textContent = "Add a new activity, task, or event:";
    formTitle.classList.add("text-2xl", "font-bold", "text-white");
    
    const titleAndMessage = document.createElement("div");
    titleAndMessage.classList.add("flex", "flex-col")
    const dateAndPriorityRow = document.createElement("div");
    dateAndPriorityRow.classList.add("flex", "gap-4", "mt-4", "mb-4");

    const toDoForm = document.createElement("form");
    toDoForm.classList.add("border", "border-gray-300", "rounded", "p-6", "flex", "flex-col", "gap-4");

    const titleLabel = document.createElement("label");
    titleLabel.htmlFor = "title"; 
    titleLabel.textContent = "New To Do: ";
    titleLabel.classList.add("text-white");
    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("placeholder", "Thinking time");
    titleInput.setAttribute("required", "");
    titleInput.classList.add("bg-gray-100", "border-gray-100", "rounded", "px-1", "py-1", "w-[40%]");

    const message = document.createElement("p");
    message.textContent = "* required"
    message.classList.add("text-sm", "text-white");

    const descriptionLabel = document.createElement("label");
    descriptionLabel.htmlFor = "description"; 
    descriptionLabel.textContent = "Description: ";
    descriptionLabel.classList.add("text-white");
    const descriptionInput = document.createElement("textarea");
    descriptionInput.setAttribute("rows", "2");
    descriptionInput.setAttribute("name", "description");
    descriptionInput.setAttribute("placeholder", "Short description..");
    descriptionInput.classList.add("bg-gray-100", "border-gray-100", "rounded", "px-1", "py-1");

    const dateLabel = document.createElement("label");
    dateLabel.htmlFor = "due"; 
    dateLabel.textContent = "Due: ";
    dateLabel.classList.add("text-white");
    const dueInput = document.createElement("input");
    dueInput.setAttribute("type", "date");
    dueInput.setAttribute("name", "due");
    dueInput.classList.add("bg-gray-100", "border-gray-100", "rounded", "px-1", "py-1", "flex-1");

    const priorityLabel = document.createElement("label");
    priorityLabel.htmlFor = "title"; 
    priorityLabel.textContent = "Priority: ";
    priorityLabel.classList.add("text-white");
    const choices = ['Urgent', 'High', 'Medium', 'Low'];
    const selectPriority = document.createElement('select');
    selectPriority.setAttribute("name", "priority");
    selectPriority.classList.add("bg-gray-100", "border-gray-100", "rounded", "px-1", "py-1", "flex-1");

    choices.forEach(choice => {
        const option = new Option(choice, choice);
        selectPriority.add(option); 
    });

    const submitBtn = document.createElement("button");
    submitBtn.classList.add("form-button", "bg-blue-500", "hover:bg-blue-600", "text-white", "rounded-lg", "px-4", "py-2", "transition-colors");
    submitBtn.textContent = "Create New Task/Activity";

    titleAndMessage.appendChild(titleLabel);
    titleAndMessage.appendChild(message);
    toDoForm.appendChild(titleAndMessage);
    toDoForm.appendChild(titleInput);
    toDoForm.appendChild(descriptionLabel);
    toDoForm.appendChild(descriptionInput);
    dateAndPriorityRow.appendChild(dateLabel);
    dateAndPriorityRow.appendChild(dueInput);

    dateAndPriorityRow.appendChild(priorityLabel);
    dateAndPriorityRow.appendChild(selectPriority);
    toDoForm.appendChild(dateAndPriorityRow);
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
            addToDoProperties.addDue(newToDo, save["due"]);
            addToDoProperties.addPriority(newToDo, save["priority"]);
            addToDoToProject(project, newToDo);
            showToDoList(project, display);
            saveProjects();
        } else {
            message.textContent = "Ensure to write a title for this new to do :)"
        } 
    });
}