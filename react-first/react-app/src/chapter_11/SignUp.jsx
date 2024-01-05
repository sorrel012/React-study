import React, { useState } from 'react';

function SignUp(props) {
  const [name, setName] = useState('');

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`이름: ${name}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: 20, display: 'flex' }}>
      <label style={{ marginRight: 5 }}>
        <span style={{ marginRight: 5 }}>이름: </span>
        <input type='text' value={name} onChange={handleChangeName} />
      </label>
      <button type='submit' style={{ marginTop: 2, paddingTop: 2 }}>
        제출
      </button>
    </form>
  );
}

export default SignUp;
