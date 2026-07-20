import newToDoForm from "./newToDoForm.js";
import newToDo from "./newToDoForm.js"

function showToDoList(project, container) {

    container.textContent = "";
    project.toDos.forEach((item) => {
        const newItem = document.createElement("article"); 

        Object.entries(item).forEach(([key, val]) => {
            if (key === "title") {
                const entry = document.createElement("h2");
                entry.textContent = `${val}.`
                newItem.appendChild(entry);
            } else if ((key != "checkList")  && (key != "id")) {
                const entry = document.createElement("p");
                entry.textContent = `${key}: ${val}.`
                newItem.appendChild(entry);
            }
        });
        container.appendChild(newItem);
    }); 
    const newToDoButton = document.createElement("button");
    newToDoButton.textContent = "Add a new task or activity";
    newToDoButton.addEventListener("click", newToDoForm(project));
}

export { showToDoList };