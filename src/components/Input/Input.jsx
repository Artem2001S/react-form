import React from 'react';
import { v4 as uuidv1 } from 'uuid';
import classes from './Input.module.scss';

export default function Input({ inputData, onChange }) {
  const uniqueId = uuidv1();

  return (
    <label htmlFor={uniqueId} className={classes.label}>
      {inputData.label}

      {inputData.type === 'text' ? (
        <input
          id={uniqueId}
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
