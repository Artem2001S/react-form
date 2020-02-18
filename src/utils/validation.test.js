import * as validation from './validation';

const validEmails = ['email@mail.ru', 'email@gmail.com', 'petrov19@mail.ru', '123@gmail.com', 'dsa_ds@yahoo.com', 'p@mail.ru', 'ivan190@yandex.ru'];
const invalidEmails = ['@mail.ru', 'emailgmail.com', 'petrov19@mailru', 'email@mail.', '!/email.ru', '@email@mail.ru', 'email@.ru'];

describe.each(validEmails)('test emails', (email) => {
  test(`testing ${email}`, () => {
    expect(validation.validateEmail(email)).toBe(true);
  });
});

describe.each(invalidEmails)('test emails', (email) => {
  test(`testing email ${email}`, () => {
    expect(validation.validateEmail(email)).not.toBe(true);
  });
});

const validDates = ['12-12-2001', '03-05-1998', '12-11-1990'];
const invalidDates = ['12/12/2001', '03-15-1998', '00-11-1990', '4-11-1990', '12-11-194'];

describe.each(validDates)('test dates', (date) => {
  test(`testing date ${date}`, () => {
    expect(validation.validateDate(date)).toBe(true);
  });
});

describe.each(invalidDates)('test dates', (date) => {
  test(`testing date ${date}`, () => {
    expect(validation.validateDate(date)).not.toBe(true);
  });
});
