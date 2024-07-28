document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    const filters = document.querySelectorAll('.filters button');
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    const renderTasks = (filter = 'all') => {
      taskList.innerHTML = '';
      const filteredTasks = tasks.filter(task => filter === 'all' ? true : task.status === filter);
      filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.classList.add(task.status === 'completed' ? 'completed' : '');
        li.innerHTML = `
          ${task.title}
          <div>
            <button onclick="toggleStatus(${task.id})">${task.status === 'completed' ? 'Undo' : 'Complete'}</button>
            <button onclick="deleteTask(${task.id})">Delete</button>
          </div>
        `;
        taskList.appendChild(li);
      });
    };
  
    const addTask = () => {
      const taskTitle = taskInput.value.trim();
      if (taskTitle) {
        tasks.push({ id: Date.now(), title: taskTitle, status: 'pending' });
        taskInput.value = '';
        saveTasks();
        renderTasks();
      }
    };
  
    const toggleStatus = (id) => {
      tasks = tasks.map(task => task.id === id ? { ...task, status: task.status === 'completed' ? 'pending' : 'completed' } : task);
      saveTasks();
      renderTasks();
    };
  
    const deleteTask = (id) => {
      tasks = tasks.filter(task => task.id !== id);
      saveTasks();
      renderTasks();
    };
  
    const saveTasks = () => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    };
  
    addTaskButton.addEventListener('click', addTask);
    filters.forEach(button => button.addEventListener('click', () => renderTasks(button.dataset.filter)));
    renderTasks();
  });
  