import React, { useState } from 'react';

import { Header, TodoForm, TodoList } from '../../components';

const Todo = () => {
  const [tasks, setTasks] = useState([{ id: 1, content: 'Hello', isComplated: false }]);

  const saveTask = (value) => {
    setTasks((prevTasks) => {
      const tasksLength = prevTasks.length - 1;
      const newTaskID = (prevTasks[tasksLength]?.id ?? 0) + 1;
      return [...prevTasks, { id: newTaskID, isComplated: false, ...value }];
    });
  };

  const clearTask = () => {
    setTasks([]);
  };

  const toggleTask = (taskID) => () => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === taskID) {
          return { ...task, isComplated: !task.isComplated };
        }
        return task;
      });
    });
  };

  return (
    <>
      <Header />
      <TodoList tasks={tasks} toggleTask={toggleTask} />
      <button onClick={clearTask} style={{ margin: '14px' }}>
        Clear Completed
      </button>
      <TodoForm saveTask={saveTask} />
    </>
  );
};

export default Todo;
