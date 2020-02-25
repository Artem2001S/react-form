import React from 'react';
import classes from './ResultForm.module.scss';

export default function ResultForm({ inputs }) {
  return (
    <div className={classes.ResultForm}>
      {inputs.map(input => (
        <div key={input.name}>
          <span className={classes.label}>{`${input.label}: `}</span>
          <span className={classes.userValue}>{input.value}</span>
        </div>
      ))}
    </div>
  );
}
