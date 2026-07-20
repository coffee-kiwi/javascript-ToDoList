
function addTitle(todo, title) {
    todo.title = title;
}

function addDescription(todo, description) {
    todo.description = description;
}

function addDue(todo, due) {
    todo.due = due;
}

function addPriority(todo, priority) {
    todo.priority = priority;

}function addChecklist(todo, checklist) {
    todo.checkList = checklist;
}

export { addTitle, addDescription, addDue, addPriority, addChecklist };