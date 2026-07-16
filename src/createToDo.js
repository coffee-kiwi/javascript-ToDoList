// Can use the below line to import functions then 
// add them as a prototype to the ToDos class. 
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