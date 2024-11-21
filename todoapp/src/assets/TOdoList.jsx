import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState(["eat breakfast", "take a shower", "walk the dog"]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => setNewTask(event.target.value);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => setTasks(tasks.filter((_, i) => i !== index));

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      {tasks.length === 0 ? (
        <p>No tasks available. Add one!</p>
      ) : (
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
                title="Delete this task"
              >
                Delete
              </button>
              <button
                className="move-button"
                onClick={() => moveTaskUp(index)}
                title="Move this task up"
              >
                Up
              </button>
              <button
                className="move-button"
                onClick={() => moveTaskDown(index)}
                title="Move this task down"
              >
                Down
              </button>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default TodoList;
