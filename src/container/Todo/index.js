import React, { useState } from 'react';

import { Header, TodoForm, TodoList, Layout } from '../../components';

import './style.scss';

const Todo = () => {
  const [tasks, setTasks] = useState([]);

  const saveTask = (value) => {
    setTasks((prevTasks) => {
      const tasksLength = prevTasks.length - 1;
      const newTaskID = (prevTasks[tasksLength]?.id ?? 0) + 1;
      return [...prevTasks, { id: newTaskID, isComplated: false, ...value }];
    });
  };

  const clearTask = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.isComplated === false));
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
    <Layout>
      <Header />
      <TodoList tasks={tasks} toggleTask={toggleTask} />
      <div className="todo-action">
        <button className="todo-complated-clear" onClick={clearTask}>
          Clear Completed
        </button>
        <TodoForm saveTask={saveTask} />
      </div>
    </Layout>
  );
};

export default Todo;
