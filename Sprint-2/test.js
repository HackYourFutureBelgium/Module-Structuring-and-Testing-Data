const capitalise = require('./1-key-errors/0');
const convertToPercentage = require('./1-key-errors/1');
const square = require('./1-key-errors/2');

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