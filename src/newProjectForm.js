import { addProject } from "./state.js";
import Project from "./createProject.js";
import { showProject } from "./showProjects.js";


export default function newProjectForm() {

    const formContainer = document.getElementById("form-display");
    const formContainerTitle = document.getElementById("main-content-title");
    const projectDisplay = document.getElementById("project-display");
    projectDisplay.textContent = "";
    formContainerTitle.textContent = "Add a new Project:"

    const projectForm = document.createElement("form");
    // projectForm.setAttribute("method", "post");
    // What method should I actually set it too..?
    // projectForm.setAttribute("action", "/submit-data")
    // Does it need to submit data? Maybe not..

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("placeholder", "Home");
    titleInput.setAttribute("minlength", "1");

    const message = document.createElement("p");
    message.textContent = "* required"
    message.classList.add("small");

    const lineBreak = document.createElement("br")

    const submitBtn = document.createElement("button");
    submitBtn.classList.add("form-button");
    submitBtn.type = "button";
    submitBtn.textContent = "Create New Project";

    // projectForm.appendChild(projectForm);
    projectForm.appendChild(titleInput);
    projectForm.appendChild(message);
    projectForm.appendChild(lineBreak);
    projectForm.appendChild(submitBtn);
    // projectDisplay.appendChild(projectForm);
    formContainer.appendChild(projectForm);

    // Add event listener to process data and create+display project
    submitBtn.addEventListener("click", (e) => {
        // e.preventDefault();
        formContainer.textContent = "";
        formContainerTitle.textContent = "";
        const save = Object.fromEntries(new FormData(projectForm));
        const newProject = new Project(save.title);
        addProject(newProject);
        showProject(newProject, document.getElementById("sidebar"));
    });
}