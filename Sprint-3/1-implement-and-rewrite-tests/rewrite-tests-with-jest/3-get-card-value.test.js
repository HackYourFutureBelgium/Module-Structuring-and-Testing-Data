// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):

test("should return number 2 for 2 of Spades", () => {
  const twoOfSpades = getCardValue("2♠");
  expect(twoOfSpades).toEqual(2);
});
test("should return number 8 for 8 of Spades", () => {
  const eightOfSpades = getCardValue("8♠");
  expect(eightOfSpades).toEqual(8);
});
// Case 3: Handle Face Cards (J, Q, K):

test("should return 10 for Face cards", () => {
  const JackOfSpades = getCardValue("J♠");
  expect(JackOfSpades).toEqual(10);
});
test("should return 10 for Face cards", () => {
  const QueenOfSpades = getCardValue("Q♠");
  expect(QueenOfSpades).toEqual(10);
});
// Case 4: Handle Ace (A):
// Case 5: Handle Invalid Cards:
test("should throw an error for an invalid card", () => {
  expect(() => getCardValue("invalid")).toThrow();
});
