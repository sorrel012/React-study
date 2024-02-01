import React, { forwardRef } from 'react';

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes =
    'w-full p-1 border-b-2 rounded-md border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';

  return (
    <p className="my-4 flex flex-col gap-1">
      <label className="text-sm font-bold uppercase text-stone-600">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={`${classes} resize-none`} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
});

export default Input;
