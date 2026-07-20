
let myProjects = [];
const SAVE_NAME = "myProjects";

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
    try { 
        localStorage.setItem(SAVE_NAME, JSON.stringify(myProjects));
    } catch (e) {
        console.warn("Unable to save data in localStorage.")
    }
}

function loadProjects() {
    let loadedProjects;
    try {
        loadedProjects = JSON.parse(localStorage.getItem(SAVE_NAME));    
    } catch (e) {
        console.warn("Saved project data might be corrupted; starting fresh.");
        return null;
    }
    if (!loadedProjects) return null;

    myProjects = loadedProjects;
    return myProjects;

    // Note, if projects or ToDos have classes added, they will
    // not be loaded here, so make sure to add them with 
    // Object.assign or something

}

export { getProjects, addProject, findProject, saveProjects, loadProjects };