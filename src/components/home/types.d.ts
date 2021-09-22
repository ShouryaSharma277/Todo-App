type Todo = {
  id: number;
  text: string;
  complete: boolean;
};

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (text: string, id: number) => void;

type SetTodo = (todo) => void;

type DeleteTodo = () => void;