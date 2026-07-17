
const myProjects = [];

function getProjects() {
    return myProjects;
}

function addProject(project) {
    myProjects.push(project);
}

function findProject(id) {
    return myProjects.find((p) => p.id === id);    
}

export { getProjects, addProject, findProject };