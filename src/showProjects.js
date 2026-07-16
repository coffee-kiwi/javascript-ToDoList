
function showProject(project, container) {
    const projectCard = document.createElement("article");
    projectCard.textContent = project.title;
    projectCard.classList.add("card")

    container.appendChild(projectCard);
}

export { showProject };