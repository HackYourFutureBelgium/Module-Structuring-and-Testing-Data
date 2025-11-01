const countChar = require('./count');
const getOrdinalNumber=  require('./get-ordinal-number');
const repeat = require('./repeat');

describe('countchar', () => {
    test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});
});


describe(`ordinalNumber`, () =>{
test("should return '1st' for 1", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
});
});

describe('repeat', () => {
   test("should repeat the string count times", () => {
  const str = "hello";
  const count = 3;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("hellohellohello");
}); 
});
