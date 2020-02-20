import React from 'react';
import Input from '../Input/Input';
import classes from './Form.module.scss';
import Button from 'components/Button/Button';

export default function Form({ inputs, inputChangeHandler, submitHandler }) {
  return (
    <form className={classes.Form}>
      {inputs.map(input => (
        <Input
          key={input.name}
          inputData={input}
          onChange={e => {
            inputChangeHandler(e.target.value, input.name);
          }}
        />
      ))}
      <Button onClick={submitHandler}>Print</Button>
    </form>
  );
}
