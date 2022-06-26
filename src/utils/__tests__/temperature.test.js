import {
  covertCelciusToFarenheit,
  covertFarenheitToCelcius,
} from '../temperature';

describe('Test temperature function', () => {
  test('convert celcius to farenheit', () => {
    expect(covertCelciusToFarenheit(23.45)).toBe(74.21);
  });

  test('convert farenheit to celcius', () => {
    expect(covertFarenheitToCelcius(-21.47)).toBe(-29.71);
  });
});
