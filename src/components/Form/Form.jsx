import React from 'react';
import Input from '../Input/Input';
import classes from './Form.module.scss';

export default function Form({ inputs, inputChangeHandler }) {
  return (
    <form className={classes.Form}>
      {inputs.map(input => (
        <Input
          key={input.name}
          placeholder={input.placeholder}
          name={input.name}
          labelTitle={input.label}
          onChange={e => {
            inputChangeHandler(e, input.name);
          }}
        />
      ))}
    </form>
  );
}
