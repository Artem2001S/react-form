import { CHANGE_INPUT_VALUE, VALIDATE_INPUTS } from '../actions/actionTypes';
import {
  validatePhoneNumber,
  validateCreditCardFormat,
  validateDate,
  validateEmail
} from 'utils/validation';

const initialState = {
  inputs: [
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
  ],
  validationStatus: ''
};

export const formInputs = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputs: state.inputs.map(inputData =>
          inputData.name === payload.inputName
            ? { ...inputData, value: payload.newValue }
            : { ...inputData }
        )
      };
    case VALIDATE_INPUTS:
      for (let i = 0; i < state.inputs.length; i++) {
        const inputData = state.inputs[i];

        if (!inputData.value.trim()) {
          return {
            ...state,
            validationStatus: `Заполните поле ${inputData.label}`
          };
        }

        if (inputData.validator !== undefined) {
          const validationResult = inputData.validator(inputData.value.trim());
          if (validationResult !== true) {
            return { ...state, validationStatus: validationResult };
          }
        }
      }
      return { ...state, validationStatus: true };
    default:
      return state;
  }
};
