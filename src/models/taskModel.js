// src/models/taskModel.js
// Model representation for tasks - currently just defining the shape
export class Task {
    constructor(name, completed = false) {
      this.name = name;
      this.completed = completed;
    }
  }
  