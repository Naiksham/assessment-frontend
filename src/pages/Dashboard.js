// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import {
  fetchTasks,
  createTask,
  updateTask,
  deleteTask,
} from '../controllers/taskController';
import './Dashboard.css'; // Add your styling

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const loadTasks = async () => {
      const fetchedTasks = await fetchTasks();
      setTasks(fetchedTasks);
    };
    loadTasks();
  }, []);

  const handleAddTask = async (task) => {
    const newTask = await createTask(task);
    if (newTask) setTasks([...tasks, newTask]);
  };

  const handleUpdateTask = async (updatedTask) => {
    const result = await updateTask(updatedTask);
    if (result) {
      setTasks(tasks.map((task) => (task._id === updatedTask._id ? result : task)));
      setEditingTask(null);
    }
  };

  const handleDeleteTask = async (taskId) => {
    const success = await deleteTask(taskId);
    if (success) setTasks(tasks.filter((task) => task._id !== taskId));
  };

  return (
    <div className="dashboard">
      <h1>Task Manager Dashboard</h1>
      <TaskForm onAddTask={handleAddTask} editingTask={editingTask} onUpdateTask={handleUpdateTask} />
      <TaskList tasks={tasks} onEdit={setEditingTask} onDelete={handleDeleteTask} />
    </div>
  );
};

export default Dashboard;
