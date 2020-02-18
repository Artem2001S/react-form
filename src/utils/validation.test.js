import * as validation from './validation';

const validEmails = ['email@mail.ru', 'email@gmail.com', 'petrov19@mail.ru', '123@gmail.com', 'dsa_ds@yahoo.com', 'p@mail.ru', 'ivan190@yandex.ru'];
const invalidEmails = ['@mail.ru', 'emailgmail.com', 'petrov19@mailru', 'email@mail.', '!/email.ru', '@email@mail.ru', 'email@.ru'];

const validDates = ['12-12-2001', '03-05-1998', '12-11-1990'];
const invalidDates = ['12/12/2001', '03-15-1998', '00-11-1990', '4-11-1990', '12-11-194'];

const validCardsFormat = ['1342 0931 0322 1235', '4276 3212 3200 4121', '5161 0147 7841 0931'];
const invalidCards = ['1342 0931 0322 123', '1342 0931  0322 1235', '1x42 0931 0322 1235', '1342 0931 0322 12354', '1342 0931 0322 '];

const validPhoneNumbers = ['+7 (999) 999-99-99'];
const invalidPhoneNumbers = ['+7 999 999-99-99', '8 999 999-99-99', '+79999999999', '+7 999 9999999', '8 (999) 999-99-99'];

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


describe.each(validCardsFormat)('test credit-card format', (card) => {
  test(`testing card format: ${card}`, () => {
    expect(validation.validateCreditCardFormat(card)).toBe(true);
  });
});

describe.each(invalidCards)('test credit-card format', (card) => {
  test(`testing card format: ${card}`, () => {
    expect(validation.validateCreditCardFormat(card)).not.toBe(true);
  });
});

describe.each(validPhoneNumbers)('test phone number format', (phoneNumber) => {
  test(`testing phone number format: ${phoneNumber}`, () => {
    expect(validation.validatePhoneNumber(phoneNumber)).toBe(true);
  });
});

describe.each(invalidPhoneNumbers)('test phone number format', (phoneNumber) => {
  test(`testing phone number format: ${phoneNumber}`, () => {
    expect(validation.validatePhoneNumber(phoneNumber)).not.toBe(true);
  });
});
