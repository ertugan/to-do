import React, { useState } from 'react';

import Modal from '../Modal';

import './style.scss';

const TodoList = (props) => {
  const { tasks, toggleTask } = props;
  const [isShow, setIsShow] = useState(false);

  const showModal = () => {
    setIsShow(true);
  };
  const hideModal = () => {
    setIsShow(false);
  };

  return (
    <div className="todo-list-wrapper">
      <ul className="todo-list">
        {tasks.map((task) => (
          <>
            <li
              className="todo-list-item"
              style={task.isComplated ? styles.taskComplated : {}}
              key={task.id}
            >
              <div
                onClick={toggleTask(task.id)}
                style={task.isComplated ? styles.taskComplatedText : {}}
              >
                {task.content}
              </div>
              <button onClick={showModal}>Open</button>
            </li>
            <Modal show={isShow} handleClose={hideModal}>
              {task.content}
            </Modal>
          </>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  taskComplated: {
    backgroundColor: '#e8f7e3',
  },
  taskComplatedText: {
    textDecorationLine: 'line-through',
  },
};

export default TodoList;
