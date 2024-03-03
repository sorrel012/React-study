import './App.css';
import Todos from './components/Todos.tsx';
import Todo from './models/todo.ts';
import NewTodo from './components/NewTodo.tsx';

function App() {
  const todos = [new Todo('Learn React'), new Todo('Learn TypeScript')];

  return (
    <div>
      <NewTodo />
      <Todos items={todos} />
    </div>
  );
}

export default App;
