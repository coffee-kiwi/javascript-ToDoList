// Can use the below line to import functions then 
// add them as a prototype to the ToDos class. 
// However original project idea was to try to not use
// prototype in order to practice composition instead and improve scalability
// import * as addToDoProperties from "./addToDoProperties.js";

// Create new object 

class ToDos {
    constructor(title) {
        this.title = title;
        this.checkList = false;
    }
}
// Object.assign(ToDos.prototype, addToDoProperties);

export { ToDos };