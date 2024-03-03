import { useRef } from 'react';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { todoActions } from '../store';
import Todo from '../models/todo.ts';

const NewTodo = () => {
  const dispatch = useDispatch();
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      Swal.fire('내용을 입력해 주세요.');
      return;
    }

    dispatch(todoActions.addTodo(new Todo(enteredText)));
    todoTextInputRef.current!.value = '';
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="todo-input">할 일</label>
      <input id="todo-input" ref={todoTextInputRef} type="text" />
      <button>+</button>
    </form>
  );
};

export default NewTodo;
