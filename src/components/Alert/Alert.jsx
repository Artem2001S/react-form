import React from 'react';
import './Alert.scss';

export default function Alert(props) {
  return <div className={'Alert'}>{props.children}</div>;
}
