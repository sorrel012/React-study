import Todos from './components/Todos.tsx';
import NewTodo from './components/NewTodo.tsx';
import { useSelector } from 'react-redux';
import Todo from './models/todo.ts';
import './App.css';

function App() {
  const todos = useSelector((state: { todos: Todo[] }) => state.todos);

  return (
    <main id="main-todos">
      <Todos items={todos} />
      <NewTodo />
    </main>
  );
}

export default App;
