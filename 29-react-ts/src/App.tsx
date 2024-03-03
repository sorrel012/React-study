import './App.css';
import Todos from './components/Todos.tsx';
import NewTodo from './components/NewTodo.tsx';
import { useSelector } from 'react-redux';
import Todo from './models/todo.ts';

function App() {
  const todos = useSelector((state: { todos: Todo[] }) => state.todos);

  return (
    <div>
      <NewTodo />
      <Todos items={todos} />
    </div>
  );
}

export default App;
