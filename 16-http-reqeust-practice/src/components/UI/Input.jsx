import React from 'react';

function Input({ label, id, ...props }) {
  return (
    <p className="controll">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} required />
    </p>
  );
}

export default Input;
