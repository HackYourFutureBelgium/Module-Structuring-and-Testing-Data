const capitalise = require('./1-key-errors/0');
const convertToPercentage = require('./1-key-errors/1');
const square = require('./1-key-errors/2');
const multiply = require('./2-mandatory-debug/0');
const sum = require('./2-mandatory-debug/1');
const getLastDigit = require('./2-mandatory-debug/2');

describe('capitalise', () => {
  test('capitalises first letter', () => {
    expect(capitalise('ok')).toBe('Ok');
  });
});

describe(`convertToPercentage`, () => {
    test(`convert to percentage`, () =>{
        expect(convertToPercentage(`0.5`)).toBe(`50%`);
    })
    
})

describe(`square`, () => {
    test(`square of 3 should be 9`, () =>{
        expect(square(3)).toBe(9);
    })
})


describe('multiply', () => {
    test('the product of two numbers', () => {
        expect(multiply(10,32)).toBe(320);
    });
});   

describe(`sum`, ()=> {
    test(`The sum of 10 and 32`, () => {
        expect(sum(10,32)).toBe(42);
    });
});

describe(`Last digit`, () =>{
    test(`get last digit`, () =>{
        expect(getLastDigit(`42`)).toBe(`2`);
    });     
});

// tests of practice-tdd

