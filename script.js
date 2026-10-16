
const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    const item = document.createElement("li");
    item.textContent = task;

    item.addEventListener("click", function() {
        item.classList.toggle("completed");
    });

    taskList.appendChild(item);
    input.value = "";
});
