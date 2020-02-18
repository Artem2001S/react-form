import React from 'react';
import Input from './components/Input/Input';
import Button from './components/Button/Button';

function App() {
  return (
    <div>
      <Input labelTitle="ФИО" name="name" placeholder="pla" />
      <Input labelTitle="ФИО" name="name2" />
      <Button disabled>Print</Button>
    </div>
  );
}

export default App;
