const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should return '1st' for 1", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(21)).toEqual("21st");
});

test("should return '2nd' for 2", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(32)).toEqual("32nd");
});

test("should return '3rd' for 3", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(13)).toEqual("13th");
  expect(getOrdinalNumber(23)).toEqual("23rd");
});

test("should return 'num(th)' for num", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(24)).toEqual("24th");
  expect(getOrdinalNumber(35)).toEqual("35th");
  expect(getOrdinalNumber(46)).toEqual("46th");
  expect(getOrdinalNumber(57)).toEqual("57th");
  expect(getOrdinalNumber(68)).toEqual("68th");
  expect(getOrdinalNumber(79)).toEqual("79th");
  expect(getOrdinalNumber(100)).toEqual("100th");
});
