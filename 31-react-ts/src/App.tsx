import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('hello', value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={value}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
