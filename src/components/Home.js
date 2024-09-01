// Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Home.css' // Import the CSS file for styling

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');

  // Fetch tasks from the backend on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  // Function to fetch tasks
  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/tasks'); // Adjust URL if needed
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  // Function to add a new task
  const addTask = async (e) => {
    e.preventDefault();
    if (!taskName.trim()) return; // Prevent adding empty tasks

    try {
      const response = await axios.post('http://localhost:3000/api/tasks', { name: taskName });
      setTasks([...tasks, response.data]); // Add the new task to the list
      setTaskName(''); // Clear input
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <div className="home-container">
      <h1>Task Manager</h1>
      <form className="task-form" onSubmit={addTask}>
        <input
          type="text"
          placeholder="Enter task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="task-input"
          required
        />
        <button type="submit" className="task-button">Add Task</button>
      </form>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task._id} className="task-item">
            {task.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

