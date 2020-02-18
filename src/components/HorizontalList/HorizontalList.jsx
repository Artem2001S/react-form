import React from 'react';
import classes from './HorizontalList.module.scss';

export default function HorizontalList({ children, columnsCount = 2 }) {
  const style = {
    'grid-template-columns': `repeat(${columnsCount},1fr)`
  };

  return (
    <div className={classes.HorizontalList} style={style}>
      {children}
    </div>
  );
}
