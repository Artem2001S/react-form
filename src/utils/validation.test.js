import * as validation from './validation';

const validEmails = ['email@mail.ru', 'email@gmail.com', 'petrov19@mail.ru', '123@gmail.com', 'dsa_ds@yahoo.com', 'p@mail.ru', 'ivan190@yandex.ru'];
const invalidEmails = ['@mail.ru', 'emailgmail.com', 'petrov19@mailru', 'email@mail.', '!/email.ru', '@email@mail.ru', 'email@.ru'];

describe.each(validEmails)('test email: %i', (email) => {
  test(`testing ${email}`, () => {
    expect(validation.validateEmail(email)).toBe(true);
  });
});

describe.each(invalidEmails)('test email: %i', (email) => {
  test(`testing ${email}`, () => {
    expect(validation.validateEmail(email)).toBe(false);
  });
});
