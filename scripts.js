document.addEventListener("DOMContentLoaded", function() {

    const addBtn = document.getElementById("addBtn");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    addBtn.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            addTask();
        }
    });

    function addTask() {

        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task");
            return;
        }

        const li = document.createElement("li");
        li.textContent = taskText;

        li.addEventListener("click", function() {
            li.classList.toggle("completed");
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.addEventListener("click", function(e) {
            e.stopPropagation();
            li.remove();
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        taskInput.value = "";
    }

});
