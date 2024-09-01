// src/controllers/taskController.js
const API_URL = '/api/tasks';

// Fetch all tasks
export const fetchTasks = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return [];
  }
};

// Create a new task
export const createTask = async (task) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating task:', error);
    return null;
  }
};

// Update an existing task
export const updateTask = async (task) => {
  try {
    const response = await fetch(`${API_URL}/${task._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating task:', error);
    return null;
  }
};

// Delete a task
export const deleteTask = async (taskId) => {
  try {
    const response = await fetch(`${API_URL}/${taskId}`, {
      method: 'DELETE',
    });
    if (response.ok) return true;
  } catch (error) {
    console.error('Error deleting task:', error);
  }
  return false;
};
