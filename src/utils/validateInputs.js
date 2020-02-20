import {
  validatePhoneNumber,
  validateCreditCardFormat,
  validateDate,
  validateEmail
} from './validationFunctions';

export function validateInputsArray(inputs) {
  for (let index = 0; index < inputs.length; index++) {
    const input = inputs[index];

    if (!input.value.trim()) {
      return `Заполните поле ${input.label}`;
    }

    const validationResult = validateField(input.name, input.value.trim());

    if (validationResult !== true) {
      return validationResult;
    }
  }
  return true;
}

export function validateField(inputName, value) {
  switch (inputName) {
    case 'phone':
      return validatePhoneNumber(value);
    case 'card':
      return validateCreditCardFormat(value);
    case 'date-of-birth':
      return validateDate(value);
    case 'email':
      return validateEmail(value);
    default:
      return true;
  }
}
