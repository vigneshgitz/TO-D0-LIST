// Function to add task
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="complete-btn" onclick="markComplete(this)">Complete</button>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;
    document.getElementById('task-list').appendChild(li);

    // Clear input field
    taskInput.value = '';
}

// Function to delete task
function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}

// Function to mark task as complete
function markComplete(button) {
    const taskText = button.parentElement.querySelector('.task-text');
    taskText.classList.toggle('completed');
}
