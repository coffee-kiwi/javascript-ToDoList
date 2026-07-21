
function createCheckToggle(item, saveOnToggle) {
    const checkBtn = document.createElement("button");
    checkBtn.type = "button";
    checkBtn.classList.add(
        "w-5", "h-5", "flex", "items-center", "justify-center",
        "rounded", "border-2", "transition-colors", "shrink-0"
    );

    function render() {
        if (item.complete) {
            checkBtn.classList.remove("border-gray-400");
            checkBtn.classList.add("bg-green-500", "border-green-500", "text-white");
            checkBtn.textContent = "✓";
        } else {
            checkBtn.classList.remove("bg-green-500", "border-green-500", "text-white");
            checkBtn.classList.add("border-gray-400");
            checkBtn.textContent = "";
        }
    }

    checkBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        item.complete = !item.complete;
        render();
        saveOnToggle();
    });

    render();
    return checkBtn
}

export { createCheckToggle };