// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';

const TaskForm = ({ onAddTask, editingTask, onUpdateTask }) => {
  const [taskName, setTaskName] = useState('');

  useEffect(() => {
    if (editingTask) setTaskName(editingTask.name);
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;

    if (editingTask) {
      onUpdateTask({ ...editingTask, name: taskName });
    } else {
      onAddTask({ name: taskName, completed: false });
    }

    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add or edit task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button type="submit">{editingTask ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
