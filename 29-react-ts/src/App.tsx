import './App.css';
import Todos from './components/Todos.tsx';
import NewTodo from './components/NewTodo.tsx';
import { useState } from 'react';
import Todo from './models/todo.ts';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);

    setTodos((prevTodos) => prevTodos.concat(newTodo));
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
