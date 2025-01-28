document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    
    if (taskInput.value.trim() === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');
    
    li.textContent = taskInput.value;

    // Mark task as complete on click
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // Remove task on double click
    li.addEventListener('dblclick', function() {
        li.remove();
    });

    document.getElementById('taskList').appendChild(li);
    
    // Clear input field
    taskInput.value = '';
});
