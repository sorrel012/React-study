import React, { useEffect, useState } from 'react';
import Todo from '../models/todo.ts';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence } from 'framer-motion';
import ChoiceAlert from './ChoiceAlert.tsx';
import BasicAlert from './BasicAlert.tsx';
import { todoActions } from '../store';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBasicModalOpen, setIsBasicModalOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isDelete) {
      setTimeout(() => {
        dispatch(todoActions.removeTodo(props.todo.id));
      }, 2000);
      setIsDelete(false);
      setIsBasicModalOpen(true);
    }
  }, [isDelete]);

  function handleDone() {
    setIsModalOpen(false);
  }

  function handleDelete() {
    setIsDelete(true);
    setIsModalOpen(false);
  }

  const removeTodoHandler = () => {
    setIsModalOpen(true);
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
        {isBasicModalOpen && (
          <BasicAlert title="삭제되었습니다." onDone={handleDone} />
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
