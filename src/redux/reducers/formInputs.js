import { CHANGE_INPUT_VALUE } from '../actions/actionTypes';
import {
  validatePhoneNumber,
  validateCreditCardFormat,
  validateDate,
  validateEmail
} from 'utils/validation';

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
    value: '',
    validator: validatePhoneNumber
  },
  {
    name: 'user-card',
    label: 'Номер банковской карты',
    placeholder: '0000 0000 0000 0000',
    value: '',
    validator: validateCreditCardFormat
  },
  {
    name: 'user-date-of-birth',
    label: 'Дата рождения',
    placeholder: '01-01-1990',
    value: '',
    validator: validateDate
  },
  {
    name: 'user-email',
    label: 'Email',
    placeholder: 'email@gmail.com',
    value: '',
    validator: validateEmail
  }
];

export const formInputs = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return state.map(inputData =>
        inputData.name === payload.inputName
          ? { ...inputData, value: payload.newValue }
          : { ...inputData }
      );
    default:
      return state;
  }
};
