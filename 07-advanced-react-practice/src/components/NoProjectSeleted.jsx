import React from 'react';

function NoProjectSeleted() {
  return (
    <div>
      <img src="../assets/no-projects.png" alt="Image that has no project" />
      <h2>No Project Selected</h2>
      <p>Select a project or get started with a new one</p>
      <p>
        <button>Create new project</button>
      </p>
    </div>
  );
}

export default NoProjectSeleted;
