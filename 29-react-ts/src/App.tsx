import './App.css';
import Todos from './components/Todos.tsx';
import NewTodo from './components/NewTodo.tsx';
import { useSelector } from 'react-redux';

function App() {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <NewTodo />
      <Todos items={todos} />
    </div>
  );
}

export default App;
