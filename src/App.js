import React from 'react';
import { Provider } from 'react-redux';
import MainContainer from 'containers/MainContainer.js';
import store from 'redux/store';

function App() {
  // const inputs = [
  //   {
  //     name: 'user-name',
  //     label: 'ФИО',
  //     placeholder: 'Иван Иванов',
  //     value: ''
  //   },
  //   {
  //     name: 'user-phone',
  //     label: 'Номер телефона',
  //     placeholder: '+7 (961) 112-31-45',
  //     value: ''
  //   },
  //   {
  //     name: 'user-card',
  //     label: 'Номер банковской карты',
  //     placeholder: '0000 0000 0000 0000',
  //     value: ''
  //   },
  //   {
  //     name: 'user-date-of-birth',
  //     label: 'Дата рождения',
  //     placeholder: '01-01-1990',
  //     value: ''
  //   },
  //   {
  //     name: 'user-email',
  //     label: 'Email',
  //     placeholder: 'email@gmail.com',
  //     value: ''
  //   },
  // ];

  // const [inputValues, setInputValues] = useState(inputs);

  // const handleChange = (event, inputName) => {
  //   const newInputs = inputValues.map(inputObject => {
  //     return inputObject.name === inputName ? { ...inputObject, value: event.target.value } : inputObject;
  //   });
  //   setInputValues(newInputs);
  // };

  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
}

export default App;
