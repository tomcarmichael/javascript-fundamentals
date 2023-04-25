const fizzBuzz = require('./fizzbuzz')

describe('fizzbuzz', () => {
  it('returns Fizz when given 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  })
  it('returns Buzz when given 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  })
  it('returns 8 when given 8', () => {
    expect(fizzBuzz(8)).toBe(8);
  })
  it('returns FizzBuzz when given 15', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  })
})