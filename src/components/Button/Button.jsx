import React from 'react';
import classNames from 'classnames';
import classes from './Button.module.scss';

export default function Button({ children, disabled }) {
  const btnClasses = classNames([
    classes.Button,
    {
      [classes.disabled]: disabled
    }
  ]);

  return (
    <button type="button" className={btnClasses}>
      {children}
    </button>
  );
}
