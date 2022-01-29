import React from 'react';

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
    <form onSubmit={handleSubmit}>
      <input name="content" type="text" placeholder="Enter task..." required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoForm;
