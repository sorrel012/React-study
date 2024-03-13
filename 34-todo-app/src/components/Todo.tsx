import { IToDo } from './atoms';

function Todo({ text }: IToDo) {
  return (
    <li>
      <span>{text}</span> <button>Todo </button>
      <button>Doing</button>
      <button>Done</button>
    </li>
  );
}

export default Todo;
