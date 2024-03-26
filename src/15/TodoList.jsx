import { useState } from "react";
import "./TodoList.css";

export default function TodoList() {
  const [tasks, setTasks] = useState(["밥먹기", "장보기"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addList() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteList(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function moveListUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveListDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>TodoList</h1>
      <div>
        <input
          className="todo-input"
          type="text"
          placeholder="todo"
          onChange={handleInputChange}
          value={newTask}
        />
        <button className="add-button" onClick={addList}>
          Add
        </button>
      </div>
      <ul className="TodoList">
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteList(index)}>
              ❌
            </button>
            <button className="move-button" onClick={() => moveListUp(index)}>
              ⬆️
            </button>
            <button className="move-button" onClick={() => moveListDown(index)}>
              ⬇️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
