import React from "react";
import { TodoListItem } from "./TodoListItem";

interface props {
  todos: Todo[];
  toggletodo: ToggleTodo;
  setTodo: SetTodo;
}

export const TodoList: React.FC<props> = ({
  todos,
  toggletodo,
  setTodo
}) => {
  return (
    <div>
      {todos.map((todo) => {
        const deleteTodo = () => {
          todos.filter((el) => el.id !== todo.id)
        }
        return (
          <TodoListItem
            key={todo.text}
            todo={todo}
            toggletodo={toggletodo}
            setTodos={setTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
};
