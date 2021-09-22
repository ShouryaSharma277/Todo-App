import React, { useState, useEffect } from "react";
import "../../scss/todo.scss";
import { AddTodos } from "./AddTodos";
import { TodoList } from "./TodoList"

export const Todo = () => {
  const initialTodos: Array<Todo> = [];
  let [todos, setTodos] = useState(initialTodos);
  const toggleTodos = (selectedTodos: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodos) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo = (text: string, id: number) => {
    const newTodo = { id, text, complete: false };
    setTodos([...todos, newTodo]);
  };

  useEffect(() => {
    const data = localStorage.getItem("todos");
    if (data) {
      setTodos(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  return (
    <div className="container">
      <div className="title">
        <div className="h1 bruh my-3">Todos</div>
      </div>
      <div className="todo my-5 mx-5">
        <AddTodos addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggletodo={toggleTodos}
          setTodo={setTodos}
        />
      </div>
    </div>
  );
};