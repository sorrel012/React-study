import React, { useState } from 'react';
import Todo from '../models/todo.ts';
import { useDispatch } from 'react-redux';
import { todoActions } from '../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence } from 'framer-motion';
import ChoiceAlert from './ChoiceAlert.tsx';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const dispatch = useDispatch();

  function handleDone() {
    setIsModalOpen(false);
  }

  function handleDelete() {
    setIsDelete(true);
  }

  const removeTodoHandler = () => {
    setIsModalOpen(true);

    if (isDelete) {
      dispatch(todoActions.removeTodo(props.todo.id));
    }
  };

  return (
    <>
      <AnimatePresence>
        {isModalOpen && (
          <ChoiceAlert
            title="삭제하시겠습니까?"
            onDone={handleDone}
            onDelete={handleDelete}
          />
        )}
      </AnimatePresence>

      <li>
        <div className="checkbox"></div>
        <div className="text">{props.todo.text}</div>
        <button onClick={removeTodoHandler}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </li>
    </>
  );
};

export default TodoItem;
