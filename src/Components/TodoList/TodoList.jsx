import React, { useState } from "react";
import { BiCalendar, BiX } from "react-icons/bi";
import { PiFlagPennantFill, PiCircleDuotone } from "react-icons/pi";
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
      <div className="toDo">
        <h1>To-do </h1>
        <ul className="taskList">
          {tasks.map((task) => (
            <li key={task.id}>
              {/* <input
                type="text"
                value={task.text}
                onChange={(e) => handleEditTask(task.id, e.target.value)}
              /> */}
              <div className="toDoItems1">
                <div className="taskName">
                  <PiCircleDuotone style={{ color: "red" }} />
                  <b>{task.text}</b>
                </div>
                <p>Description</p>
                <div className="datePriority">
                  <button className="date">
                    <BiCalendar />
                    <b>{date} </b>
                  </button>
                  <button className="priority">
                    <PiFlagPennantFill style={{ color: "red" }} />
                    <b>Urgent</b>
                  </button>
                </div>
              </div>
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <div className="taskInpuModal">
          <BiX fontSize="2rem" />
          <div className="taskInput">
            <textarea
              name=""
              id=""
              cols="180"
              rows="10"
              type="text"
              placeholder="Task Name"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            ></textarea>
            <div className="flexBtn">
              <div className="setDatePriority">
                <button className="date">
                  <BiCalendar />
                  <b>Add Due Date </b>
                </button>
                <button className="priority">
                  <PiFlagPennantFill
                    style={{ borderColor: "2px solid black" }}
                  />
                  <b>Set Priority</b>
                </button>
              </div>
              <button className="createTask" onClick={handleAddTask}>
                Create Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
