import React from 'react';
import classes from './Input.module.scss';

export default function Input({ onChange, name, labelTitle, placeholder }) {
  return (
    <label htmlFor={name} className={classes.label}>
      {labelTitle}
      <input
        id={name}
        className={classes.input}
        placeholder={placeholder}
        type="text"
        onChange={onChange}
      />
    </label>
  );
}
