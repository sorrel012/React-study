import { useRef } from 'react';
import Swal from 'sweetalert2';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      Swal.fire('내용을 입력해 주세요.');
      return;
    }

    props.onAddTodo(enteredText);
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
