import React, { useState } from "react";

const AddTodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        data-testid="todo-input"
        type="text"
        value={text}
        placeholder="Add todo..."
        onChange={(e) => setText(e.target.value)}
      />
      <button data-testid="add-btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
