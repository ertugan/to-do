import React, { useState } from 'react';

import Modal from '../Modal';

import './style.scss';

const TodoList = (props) => {
  const { tasks, toggleTask } = props;
  const [isShow, setIsShow] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const showModal = (content) => () => {
    setIsShow(true);
    setModalContent(content);
  };
  const hideModal = () => {
    setIsShow(false);
    setModalContent('');
  };

  return (
    <div className="todo-list-wrapper">
      <ul className="todo-list">
        {tasks.map((task) => (
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
            <button onClick={showModal(task.content)}>Open</button>
          </li>
        ))}
      </ul>
      <Modal show={isShow} handleClose={hideModal}>
        {modalContent}
      </Modal>
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
