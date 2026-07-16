// Need to export to ...

// Todos need the following properties for now:
// Title, description, dueDate, priority, checklist

function addTitle(todo, title) {
    todo.title = title;
}

function addDescription(todo, description) {
    todo.description = description;
}

function addDueDate(todo, dueDate) {
    todo.dueDate = dueDate;
}

function addPriority(todo, priority) {
    todo.priority = priority;

}function addChecklist(todo, checklist) {
    todo.checkList = checklist;
}

export { addTitle, addDescription, addDueDate, addPriority, addChecklist };