module.exports = (str, count) => {
  if (count === 0) {
    return "";
  }
  if (count === 1) {
    return str;
  }
  if (count < 0) {
    throw new Error("Count must be a non-negative integer");
  }
  return str.repeat(count);
};
