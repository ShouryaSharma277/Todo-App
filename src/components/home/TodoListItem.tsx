import React from "react";

interface TodoListItemProps {
  todo: Todo;
  toggletodo: ToggleTodo;
  setTodos: SetTodo;
  deleteTodo: DeleteTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggletodo,
  deleteTodo,
}) => {
  return (
    <div className="container1 my-3 text-light">
      <li>
        <label
          className="ah"
          style={{ textDecoration: todo.complete ? "line-through" : "none" }}
          onClick={() => {
            toggletodo(todo);
          }}
        >
          {todo.text}
        </label>
        <i
          onClick={() => {
            toggletodo(todo);
          }}
          className="far fa-calendar-check complete"
        ></i>
      </li>
    </div>
  );
};
