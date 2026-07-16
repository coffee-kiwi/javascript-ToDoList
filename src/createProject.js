// Export to ...
// Import functions from addToDoProperties

// Create new object 

export default class Project {
    constructor(title) {
        this.title = title;
        this.toDos = [];
        this.id = crypto.randomUUID();
    }
}

// export { Project };