import newToDoForm from "./newToDoForm.js";
import newToDo from "./newToDoForm.js"
import { createCheckToggle } from "./checkToggle.js";
import { saveProjects } from "./state.js";

function showToDoList(project, container) {
    const formContainer = document.getElementById("form-display");
    const formTitle  = document.getElementById("form-title");
    formContainer.textContent = "";
    formTitle.textContent = "";
    container.textContent = "";
    project.toDos.forEach((item) => {
        const newItem = document.createElement("article"); 
        newItem.classList.add("to-do-item", "bg-gray-100", "p-4", "rounded-lg", "shadow-sm");

        const leftSide = document.createElement("div");
        leftSide.classList.add("flex", "gap-4", "items-center");

        const summary = document.createElement("div");
        summary.classList.add("flex", "justify-between", "items-center", "cursor-pointer", "flex-grow-1");

        const checkBtn = createCheckToggle(item, () => {
            saveProjects();
            updateTitleStyle();
        });

        const titleEle = document.createElement("h2");
        titleEle.textContent = `${item.title}`;

        function updateTitleStyle() {
            titleEle.classList.toggle("line-through", item.complete);
            titleEle.classList.toggle("text-gray-400", item.complete);
        }
        updateTitleStyle();


        const dueEle = document.createElement("p");
        dueEle.textContent = item.due ? `Due: ${item.due}` : "";

        leftSide.appendChild(checkBtn);
        summary.appendChild(titleEle);
        summary.appendChild(dueEle);
        leftSide.appendChild(summary);

        const detailsWrapper = document.createElement("div");
        detailsWrapper.classList.add("grid", "grid-rows-[0fr]", "transition-[grid-template-rows]", "duration-300");

        const detailsInner = document.createElement("div");
        detailsInner.classList.add("overflow-hidden");

        Object.entries(item).forEach(([key, val]) => {
            if (["title", "due", "complete", "id"].includes(key)) return;
            const detailsEntry = document.createElement("p");
            detailsEntry.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${val}`;
            detailsInner.appendChild(detailsEntry);
        });

        detailsWrapper.appendChild(detailsInner);

        summary.addEventListener("click", () => {
            const expanded = detailsWrapper.classList.contains("grid-rows-[1fr]");
            detailsWrapper.classList.toggle("grid-rows-[0fr]", expanded);
            detailsWrapper.classList.toggle("grid-rows-[1fr]", !expanded);
        });

        newItem.appendChild(leftSide);
        newItem.appendChild(detailsWrapper);
        container.appendChild(newItem);
    }); 
    const newToDoButton = document.createElement("button");
    newToDoButton.classList.add("bg-blue-500", "hover:bg-blue-600", "text-white", "rounded-lg", "px-4", "py-2", "transition-colors")
    newToDoButton.textContent = "Add a new task or activity";
    newToDoButton.addEventListener("click", () => newToDoForm(project));
    container.appendChild(newToDoButton);
}

export { showToDoList };