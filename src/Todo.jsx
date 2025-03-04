import React, { useState, useEffect } from "react";
import { Todoform } from "./TodoForm";
import { TodoList } from "./TodoList";
import "./todo.css";
import { getLocalStorageTodoData, setLocalStorageTodoData } from "./TodoLocalStorage";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState(() => getLocalStorageTodoData());

  const handleFormSubmit = (inputValue) => {
    const { content, checked } = inputValue;
    if (!content) return;

    const ifTodoContentMatched = task.find((curTask) => curTask.content === content);
    if (ifTodoContentMatched) return;

    const newTask = { id: Date.now(), content, checked: checked || false };
    setTask((prevTask) => [...prevTask, newTask]);
  };

  // Sync with local storage when 'task' changes
  useEffect(() => {
    setLocalStorageTodoData(task);
  }, [task]);

  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((currTask) => currTask.content !== value);
    setTask(updatedTask);
  };

  const handleClearBtn = () => {
    setTask([]);
  };

  const handleCheckedTodo = (content) => {
    const updatedTask = task.map((curTask) =>
      curTask.content === content ? { ...curTask, checked: !curTask.checked } : curTask
    );
    setTask(updatedTask);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
      </header>
      <Todoform onAddTodo={handleFormSubmit} />
      <section className="myUnorderedList">
        <ul>
          {task.map((currTask) => (
            <TodoList
              key={currTask.id}
              data={currTask.content}
              checked={currTask.checked}
              onHandleDeleteTodo={handleDeleteTodo}
              onHandleCheckedTodo={handleCheckedTodo}
            />
          ))}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearBtn}>
          Clear All
        </button>
      </section>
    </section>
  );
};
