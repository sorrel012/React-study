import { useRef } from 'react';
import Swal from 'sweetalert2';

const NewTodo = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      Swal.fire('내용을 입력해 주세요.');
      return;
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="todo-input">Todo text</label>
      <input id="todo-input" ref="todoTextInputRef" type="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
