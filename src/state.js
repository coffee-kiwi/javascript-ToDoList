
let myProjects = [];

function getProjects() {
    return myProjects;
}

function addProject(project) {
    myProjects.push(project);
}

function findProject(id) {
    return myProjects.find((p) => p.id === id);    
}

function saveProjects() {
    localStorage.setItem("myProjects", JSON.stringify(myProjects));
}

function loadProjects() {
    const loadedProjects = JSON.parse(localStorage.getItem("myProjects"));
    console.log(`myProjects const is now ${loadedProjects}`)
    loadedProjects.forEach(project => {
        console.log(`Project is: ${project.title}`);
        addProject(project);
        console.log(`myProjects is now: ${myProjects}`);
    });

}

export { getProjects, addProject, findProject, saveProjects, loadProjects };