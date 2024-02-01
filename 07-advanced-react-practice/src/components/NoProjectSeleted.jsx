import React from 'react';
import noProjectImage from '../assets/no-projects.png';

function NoProjectSeleted() {
  return (
    <div className="mt-24 w-2/3 text-center">
      <img
        src={noProjectImage}
        alt="An empty task list"
        className="h-16 w-16"
      />
      <h2 className="my-4 text-xl font-bold text-stone-500">
        No Project Selected
      </h2>
      <p>Select a project or get started with a new one</p>
      <p>
        <button>Create new project</button>
      </p>
    </div>
  );
}

export default NoProjectSeleted;
