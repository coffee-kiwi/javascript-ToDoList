import newToDoForm from "./newToDoForm.js";
import newToDo from "./newToDoForm.js"

function showToDoList(project, container) {

    container.textContent = "";
    project.toDos.forEach((item) => {
        const newItem = document.createElement("article"); 
        newItem.classList.add("to-do-item", "bg-gray-100", "p-4", "rounded-lg", "shadow-sm");

        // Summary
        const summary = document.createElement("div");
        summary.classList.add("flex", "justify-between", "items-center", "cursor-pointer");

        const titleEle = document.createElement("h2");
        titleEle.textContent = `${item.title}`;

        const dueEle = document.createElement("p");
        dueEle.textContent = item.due ? `Due: ${item.due}` : "";

        summary.appendChild(titleEle);
        summary.appendChild(dueEle);

        // Details
        const detailsWrapper = document.createElement("div");
        detailsWrapper.classList.add("grid", "grid-rows-[0fr]", "transition-[grid-template-rows]", "duration-300");

        const detailsInner = document.createElement("div");
        detailsInner.classList.add("overflow-hidden");

        Object.entries(item).forEach(([key, val]) => {
            if (["title", "due", "checklist", "id"].includes(key)) return;
            const detailsEntry = document.createElement("p");
            detailsEntry.textContent = `${key}: ${val}`;
            detailsInner.appendChild(detailsEntry);
        });

        detailsWrapper.appendChild(detailsInner);

        summary.addEventListener("click", () => {
            const expanded = detailsWrapper.classList.contains("grid-rows-[1fr]");
            detailsWrapper.classList.toggle("grid-rows-[0fr]", expanded);
            detailsWrapper.classList.toggle("grid-rows-[1fr]", !expanded);
        });

        newItem.appendChild(summary);
        newItem.appendChild(detailsWrapper);
        container.appendChild(newItem);
    }); 
    const newToDoButton = document.createElement("button");
    newToDoButton.textContent = "Add a new task or activity";
    newToDoButton.addEventListener("click", () => newToDoForm(project));
    container.appendChild(newToDoButton);
}

export { showToDoList };