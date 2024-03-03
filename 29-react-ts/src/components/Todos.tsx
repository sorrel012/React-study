import React from 'react';
import Todo from '../models/todo.ts';
import TodoItem from './TodoItem.tsx';

const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => {} }> = (
  props,
) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onClick={() => props.onRemoveTodo(item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
