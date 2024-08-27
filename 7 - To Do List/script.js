const taskList = document.getElementById("to-do-list");
const taskInput = document.getElementById("task-input");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const task = document.createElement("li");
        task.innerHTML = `
            <span>${taskText}</span>
            <button class="edit-button" onClick="editTask(this)">Editar</button>
            <button class="remove-button" onClick="removeTask(this)">Remover</button>
        `;
        taskList.appendChild(task);
        taskInput.value = "";
    }
}

function editTask(button) {
    const task = button.parentElement; 
    const span = task.querySelector("span")
    const newTask = prompt("Editar tarefa: ", span.textContent)
    if (newTask !== null && newTask !== null) {
        span.textContent = newTask.trim()
    }
}

function removeTask(button) {
    const task = button.parentElement;
    taskList.removeChild(task)
}