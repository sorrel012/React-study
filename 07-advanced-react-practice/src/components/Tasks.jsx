import React from 'react';
import NewTask from './NewTasks.jsx';

function Tasks({ onAdd, onDelete }) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-stone-700">Tasks</h2>
      <NewTask onAdd={onAdd} onDelete={onDelete} />
      <p className="my-4 text-stone-800">
        This project does not have any tasks yet.
      </p>
      <ul></ul>
    </section>
  );
}

export default Tasks;
