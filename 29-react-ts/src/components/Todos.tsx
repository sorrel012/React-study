import React from 'react';
import Todo from '../models/todo.ts';
import TodoItem from './TodoItem.tsx';

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </ul>
  );
};

export default Todos;
