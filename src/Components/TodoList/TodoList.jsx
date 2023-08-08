import React, { useState } from "react";
import { BiCalendar } from "react-icons/bi";
import "./TodoList.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const current = new Date();
  const date = `${current.toLocaleString("default", {
    month: "short",
  })} ${current.getDate()}`;
  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleEditTask = (taskId, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };
  return (
    <div>
      <div>
        <b>Task name</b>
        <p>Description</p>
        <div>
          <div>
            <BiCalendar />
            {date}
          </div>
          <div></div>
        </div>
      </div>
      <div className="toDo">
        <h1>To-do </h1>
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id}>
              <input
                type="text"
                value={task.text}
                onChange={(e) => handleEditTask(task.id, e.target.value)}
              />
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <div className="task-input">
          <input
            type="text"
            placeholder="Enter a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
