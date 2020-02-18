export const validateEmail = (str) => {
  const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!regexp.test(str)) {
    return 'Введите email в корректном формате';
  }

  return true;
};

export const validateDate = (str) => {
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
