import React from 'react';
import Todo from '../models/todo.ts';
import TodoItem from './TodoItem.tsx';

interface TodosProps {
  items: Todo[];
}

const Todos: React.FC<TodosProps> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </ul>
  );
};

export default Todos;
