const baseUrl = 'https://669e3b999a1bda368005ee12.mockapi.io/api/v1/tasks';

export const getTasksList = () => {
  return fetch(baseUrl).then(response => response.json());
};

export const createTasks = taskData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  });
};

export const updateTask = (taskId, updatedTaskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedTaskData),
  });
};

export const deleteTask = taskId => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
};
