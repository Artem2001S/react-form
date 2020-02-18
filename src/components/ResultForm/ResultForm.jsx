import React from 'react';
import classes from './ResultForm.module.scss';

export default function ResultForm({ inputs }) {
  return (
    <div className={classes.ResultForm}>
      {inputs.map(input => (
        <div>
          <span className={classes.label}>{`${input.label}: `}</span>
          <label htmlFor={input.name} className={classes.userValue}>
            {input.value}
          </label>
        </div>
      ))}
    </div>
  );
}
