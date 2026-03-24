function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}
console.log(formatTimeDisplay(61));

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here   (3)

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here  (totalHours = 0, so num is 0 when pad is called for the first time)

// c) What is the return value of pad is called for the first time?
// =============> write your answer here (The return value of pad when it is called for the first time is "00"
// because num is 0 and padStart adds a "0" to the start of the string to make it 2 characters long.)

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here (remainingSeconds is 1, so num is 1 when pad is called for the last time.
// This is because 61 seconds is equal to 1 minute and 1 second, so the remaining seconds
// after calculating the minutes is 1.)

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here (The return value of pad when it is called for the last time is "01"
//  because num is 1 and padStart adds a "0" to the start of the string to make it 2 characters long.)
