import React from 'react';
import classes from './Input.module.scss';

export default function Input({ inputData, onChange }) {
  return (
    <label htmlFor={inputData.name} className={classes.label}>
      {inputData.label}

      {inputData.type === 'text' ? (
        <input
          id={inputData.name}
          className={classes.input}
          placeholder={inputData.placeholder}
          type="text"
          value={inputData.value}
          onChange={onChange}
        />
      ) : (
        <select
          value={inputData.value}
          onChange={onChange}
          className={classes.input}
        >
          {inputData.values.map(optionValue => (
            <option key={optionValue} value={optionValue}>
              {optionValue}
            </option>
          ))}
        </select>
      )}
    </label>
  );
}
