import Todos from './pages/Todos.tsx';
import NewTodo from './pages/NewTodo.tsx';
import { useSelector } from 'react-redux';
import Todo from './models/todo.ts';
import './asset/css/main.css';

function App() {
  const todos = useSelector((state: { todos: Todo[] }) => state.todos);

  return (
    <main id="main-todos">
      <header>Todo List</header>
      <Todos items={todos} />
      <NewTodo />
    </main>
  );
}

export default App;
