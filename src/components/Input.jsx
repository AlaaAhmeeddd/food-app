import React from 'react';

export default function Input({ labelTitle, inputName, handleChange, inputValue, error, type = "text" }) {
  return (
    <div className='flex flex-col gap-3'>
      <label htmlFor={inputName} className='text-slate-600 font-semibold'>
        {labelTitle}
      </label>
      <input
        type={type}
        value={inputValue}
        name={inputName}
        className='border rounded-full border-slate-300 p-2'
        onChange={handleChange}
      />
      {error && <p className='text-red-500 text-sm'>{error}</p>}
    </div>
  );
}
