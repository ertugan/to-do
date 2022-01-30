import React from 'react';

import './style.scss';

const TodoForm = (props) => {
  const { saveTask } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newContent = Object.fromEntries(formData);
    saveTask(newContent);
    event.target.reset();
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input name="content" type="text" placeholder="Enter task..." required autoFocus />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoForm;
