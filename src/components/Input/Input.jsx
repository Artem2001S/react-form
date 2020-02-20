import React from 'react';
import classes from './Input.module.scss';

export default function Input({
  name,
  labelTitle,
  placeholder,
  value,
  onChange
}) {
  return (
    <label htmlFor={name} className={classes.label}>
      {labelTitle}
      <input
        id={name}
        className={classes.input}
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
