// Function to save a note
function saveNote() {
  const noteText = document.getElementById('note-input').value;
  const priority = document.getElementById('priority').value;
  const deadline = document.getElementById('deadline').value;
  
  if (noteText.trim() === "") {
    alert("Please write something before saving the note!");
    return;
  }

  const taskList = document.getElementById('task-list');
  const taskItem = document.createElement('li');
  
  // Adding task content
  taskItem.textContent = noteText;

  // Adding priority and deadline to the task
  taskItem.classList.add(priority);

  // Append a delete button to the task
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = function() {
    taskItem.remove();
  };
  taskItem.appendChild(deleteButton);

  // Add task to the list
  taskList.appendChild(taskItem);

  // Clear input fields after saving
  document.getElementById('note-input').value = '';
  document.getElementById('priority').value = 'low';
  document.getElementById('deadline').value = '';
}

// Function to clear the note input
function clearNote() {
  document.getElementById('note-input').value = '';
  document.getElementById('priority').value = 'low';
  document.getElementById('deadline').value = '';
}

// Function to toggle bold text style
function toggleBold() {
  const noteInput = document.getElementById('note-input');
  noteInput.style.fontWeight = noteInput.style.fontWeight === 'bold' ? 'normal' : 'bold';
}

// Function to change text color
function changeTextColor(event) {
  const noteInput = document.getElementById('note-input');
  noteInput.style.color = event.target.value;
}

