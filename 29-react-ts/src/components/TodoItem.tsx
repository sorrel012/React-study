import React from 'react';

const TodoItem: React.FC<{ text: string; onClick: () => any }> = (props) => {
  return <li>{props.text}</li>;
};

export default TodoItem;
