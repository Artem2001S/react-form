import { CHANGE_INPUT_VALUE } from '../actions/actionTypes';

const initialState = [
  {
    name: 'user-name',
    label: 'ФИО',
    placeholder: 'Иван Иванов',
    value: ''
  },
  {
    name: 'user-phone',
    label: 'Номер телефона',
    placeholder: '+7 (961) 112-31-45',
    value: ''
  },
  {
    name: 'user-card',
    label: 'Номер банковской карты',
    placeholder: '0000 0000 0000 0000',
    value: ''
  },
  {
    name: 'user-date-of-birth',
    label: 'Дата рождения',
    placeholder: '01-01-1990',
    value: ''
  },
  {
    name: 'user-email',
    label: 'Email',
    placeholder: 'email@gmail.com',
    value: ''
  },
];

export const formInputs = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return state.map(inputData => (
        inputData.name === payload.inputName ?
          { ...inputData, value: payload.newValue } :
          { ...inputData }
      ));
    default:
      return state;
  }
};
