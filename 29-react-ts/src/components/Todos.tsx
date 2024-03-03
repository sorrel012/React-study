import Todo from '../models/todo.ts';
import TodoItem from './TodoItem.tsx';
import '../asset/css/main.css';

interface TodosProps {
  items: Todo[];
}

const Todos: React.FC<TodosProps> = (props) => {
  return (
    <ul className="todo-list">
      {props.items.map((item) => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </ul>
  );
};

export default Todos;
