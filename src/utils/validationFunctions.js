export const validateEmail = str => {
  // eslint-disable-next-line no-useless-escape
  const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!regexp.test(str)) {
    return 'Введите email в корректном формате';
  }

  return true;
};

export const validateDate = str => {
  const regexp = /^\d{2}([.-])\d{2}\1\d{4}$/;

  if (!regexp.test(str)) {
    return 'Введите дату в формате ДД-ММ-ГГГ';
  }

  const [day, month, year] = str.split('-');

  if (Number(month) > 12 || Number(month) < 1) {
    return 'Номер месяца должен быть от 1 до 12';
  }

  const daysInMonth = new Date(year, month, 0).getDate();

  if (Number(day) < 1 || Number(day) > daysInMonth) {
    return `Нет такого дня в ${month} месяце`;
  }

  return true;
};

export const validateCreditCardFormat = str => {
  const regex = /[0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}$/;

  if (!regex.test(str)) {
    return 'Введите данные карты в формате 0000 0000 0000 0000';
  }

  return true;
};

export const validatePhoneNumber = str => {
  const regex = /^\+\d{1,3}\s?\(\d{3}\)\s?\d{3}(-\d{2}){2}$/;

  if (!regex.test(str)) {
    return 'Введите номер телефона в формате +7 (999) 999-99-99';
  }
  return true;
};
