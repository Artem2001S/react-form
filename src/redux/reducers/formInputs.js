import { CHANGE_INPUT_VALUE, VALIDATE_INPUTS } from '../actions/actionTypes';

const initialState = {
  inputs: [
    {
      name: 'name',
      label: 'ФИО',
      placeholder: 'Иван Иванов',
      value: ''
    },
    {
      name: 'phone',
      label: 'Номер телефона',
      placeholder: '+7 (961) 112-31-45',
      value: ''
    },
    {
      name: 'card',
      label: 'Номер банковской карты',
      placeholder: '0000 0000 0000 0000',
      value: ''
    },
    {
      name: 'date-of-birth',
      label: 'Дата рождения',
      placeholder: '01-01-1990',
      value: ''
    },
    {
      name: 'email',
      label: 'Email',
      placeholder: 'email@gmail.com',
      value: ''
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
      return { ...state, validationStatus: payload.validationStatus };
    default:
      return state;
  }
};
