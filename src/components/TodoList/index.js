import React from 'react';

const TodoList = (props) => {
  const { tasks, toggleTask } = props;
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li onClick={toggleTask(task.id)} key={task.id}>
            <span style={task.isComplated ? styles.taskComplated : {}}>{task.content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  taskComplated: {
    textDecorationLine: 'line-through',
  },
};

export default TodoList;
