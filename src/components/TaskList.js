// src/components/TaskList.js
import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>
          {task.name} {task.completed ? '✓' : ''}
          <button onClick={() => onEdit(task)}>Edit</button>
          <button onClick={() => onDelete(task._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
