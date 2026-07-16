
function showProject(project, container) {
    const projectBtn = document.createElement("button");
    projectBtn.type = "button";
    projectBtn.textContent = project.title;
    projectBtn.classList.add("projectBtn")
    projectBtn.dataset.id = project.id;

    container.appendChild(projectBtn);
}

export { showProject };