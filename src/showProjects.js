
function showProject(project, container) {
    const projectBtn = document.createElement("button");
    projectBtn.classList.add("projectBtn", "bg-gray-300", "hover:bg-gray-400", "rounded-lg", "p-2");
    projectBtn.type = "button";
    projectBtn.textContent = project.title;
    // projectBtn.classList.add("projectBtn")
    projectBtn.dataset.id = project.id;

    container.appendChild(projectBtn);
}

export { showProject };