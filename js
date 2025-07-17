const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    createTask(taskText);
    taskInput.value = '';
  }
});

function createTask(text) {
  const li = document.createElement('li');
  li.textContent = text;

  const btnGroup = document.createElement('div');
  btnGroup.className = 'action-buttons';

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.className = 'edit';
  editBtn.onclick = () => {
    const newText = prompt('Edit task:', text);
    if (newText) {
      li.firstChild.textContent = newText;
    }
  };

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✓';
  completeBtn.className = 'complete';
  completeBtn.onclick = () => {
    li.classList.toggle('completed');
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.onclick = () => {
    taskList.removeChild(li);
  };

  btnGroup.append(editBtn, completeBtn, deleteBtn);
  li.appendChild(btnGroup);
  taskList.appendChild(li);
}
