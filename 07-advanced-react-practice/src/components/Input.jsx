import React from 'react';

function Input({ label, isTextarea, ...props }) {
  return (
    <p>
      <label>{label}</label>
      {isTextarea ? <textarea {...props} /> : <input {...props} />}
    </p>
  );
}

export default Input;
