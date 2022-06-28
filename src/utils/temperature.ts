// use reliable math library to prevent javscript math precision problem
import { Decimal } from 'decimal.js';

export const ABSOLUTE_ZERO_IN_CELCIUS = -273.15;
export const ABSOLUTE_ZERO_IN_FARENHEIT = -459.67;

export const TEMPERATURE_REGEX = /^(-)?\d+(\.\d{1,2})?$/;

export const covertCelciusToFarenheit = (cel: number): number => {
  return (Math.round(
    new Decimal(cel).mul(9).div(5).add(32).mul(100).toNumber()
  ) / 100) as number;
};

export const covertFarenheitToCelcius = (far: number): number => {
  return (
    Math.round(new Decimal(far).minus(32).mul(5).div(9).mul(100).toNumber()) /
    100
  );
};
