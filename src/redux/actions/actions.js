import { CHANGE_INPUT_VALUE, VALIDATE_INPUTS } from './actionTypes';

export function changeInputValue(newValue, inputName) {
  return {
    type: CHANGE_INPUT_VALUE,
    payload: { inputName, newValue }
  };
}

export function changeValidationStatus(validationStatus) {
  return {
    type: VALIDATE_INPUTS,
    payload: { validationStatus }
  };
}
