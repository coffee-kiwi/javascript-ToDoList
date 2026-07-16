
function showToDoList(project, container) {

    container.textContent = "";
    project.toDos.forEach((item) => {
        const newItem = document.createElement("article"); 

        Object.entries(item).forEach(([key, val]) => {
            if (key === "title") {
                const entry = document.createElement("h2");
                entry.textContent = `${val}.`
                console.log(`${item}'s ${key} is ${val}.`)
                newItem.appendChild(entry);
            } else if ((key != "checkList")  && (key != "id")) {
                const entry = document.createElement("p");
                entry.textContent = `${key}: ${val}.`
                console.log(`${item}'s ${key} is ${val}.`)
                newItem.appendChild(entry);
            }
        });
        container.appendChild(newItem);
    }); 

}

export { showToDoList };