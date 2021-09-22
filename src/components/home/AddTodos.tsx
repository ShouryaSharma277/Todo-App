import React, {useState} from "react";

interface Props {
    addTodo: AddTodo,
}

export const AddTodos: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState('');
  const random_Number = Math.floor(Math.random() * 10000);
  return (
    <div className="container">
      <form className="form my-3">
        <input placeholder="Add Todo" value={text} className="input" type="text" onChange={(e) => {
            setText(e.target.value);
        }} />
        <button
          className="btn btn-info"
          onClick={(e) => {
            e.preventDefault();
            addTodo(text, random_Number)
            setText('')
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
