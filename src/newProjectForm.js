import { addProject, saveProjects } from "./state.js";
import Project from "./createProject.js";
import { showProject } from "./showProjects.js";


export default function newProjectForm() {

    const formContainer = document.getElementById("form-display");
    const contentTitle = document.getElementById("main-content-title");
    const formTitle = document.getElementById("form-title");
    const display = document.getElementById("display");
    display.textContent = "";
    contentTitle.textContent = "";
    formContainer.textContent = "";
    formTitle.textContent = "Add a new Project:"
    formTitle.classList.add("text-2xl", "font-bold", "text-white");

    const projectForm = document.createElement("form");
    projectForm.classList.add("border", "border-gray-300", "rounded", "px-3", "py-2", "w-full", "focus:outline-none", "focus:ring-2", "focus:ring-blue-400");

    const titleLabel = document.createElement("label");
    titleLabel.htmlFor = "title"; 
    titleLabel.textContent = "New Project: ";
    titleLabel.classList.add("text-white");

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("placeholder", "Home");
    titleInput.setAttribute("required", "");
    titleInput.classList.add("bg-gray-100", "border-gray-100", "rounded", "px-1", "py-1");

    const message = document.createElement("p");
    message.textContent = "* required"
    message.classList.add("small", "text-white");

    const lineBreak = document.createElement("br")

    const submitBtn = document.createElement("button");
    submitBtn.classList.add("form-button", "bg-blue-500", "hover:bg-blue-600", "text-white", "rounded-lg", "px-4", "py-2", "transition-colors");
    submitBtn.textContent = "Create New Project";

    projectForm.appendChild(titleLabel);
    projectForm.appendChild(titleInput);
    projectForm.appendChild(message);
    projectForm.appendChild(lineBreak);
    projectForm.appendChild(submitBtn);
    formContainer.appendChild(projectForm);

    submitBtn.addEventListener("click", (e) => {
        e.preventDefault()
        console.log(`The validity of this form is: ${projectForm.checkValidity()}`)
        if (projectForm.checkValidity()) {
            formContainer.textContent = "";
            formTitle.textContent = "";
            const save = Object.fromEntries(new FormData(projectForm));
            const newProject = new Project(save.title);
            addProject(newProject);
            showProject(newProject, document.getElementById("sidebar"));
            saveProjects();
        } else {
            message.textContent = "Ensure to write a title for this project :)"
        } 
    });
}