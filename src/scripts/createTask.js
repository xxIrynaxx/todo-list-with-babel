import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';
import { createTasks, getTasksList } from './tasksGateway.js';

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');

  const text = taskTitleInputElem.value;

  if (!text) {
    return;
  }

  taskTitleInputElem.value = '';

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  }; // prepare data

  createTasks(newTask) // write data to db
    .then(() => getTasksList()) // Read new data from server
    .then(newTasksList => {
      setItem('tasksList', newTasksList); // Save new data to front-end storage
      renderTasks(); // Update UI based on new Data
    });
};

// 1. Prepare data
// 2. Write data to db
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Update UI based on new Data
