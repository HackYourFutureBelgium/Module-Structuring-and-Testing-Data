const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// 1. Line 1: movieLength
// 2. Line 3: remainingSeconds
// 3. Line 4: totalMinutes
// 4. Line 6: remainingMinutes
// 5. Line 7: totalHours
// 6. Line 9: result    

// b) How many function calls are there?
// 1. Line 9: console.log

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// The expression movieLength % 60 is using the modulus operator (%) to calculate the remainder when movieLength is divided by 60. In this context, it is used to determine how many seconds are left after accounting for the full minutes in the movie length. Since there are 60 seconds in a minute, this expression gives us the number of seconds that do not make up a full minute in the total movie length.
// / For example, if movieLength is 8784 seconds, then 8784 % 60 would give us the remaining seconds after dividing 8784 by 60, which is 24 seconds.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The expression assigned to totalMinutes is calculating the total number of minutes in the movie length. It does this by first subtracting the remaining seconds (which are not part of a full minute) from the total movie length in seconds, and then dividing the result by 60 (the number of seconds in a minute). This gives us the total number of full minutes in the movie length. For example, if movieLength is 8784 seconds and remainingSeconds is 24 seconds, then totalMinutes would be calculated as (8784 - 24) / 60, which equals 146 minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result represents the formatted string that shows the movie length in hours, minutes, and seconds. A better name for this variable could be formattedMovieLength or movieDurationFormatted, as it more clearly indicates that it contains a formatted representation of the movie length.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// This code will work for all non-negative integer values of movieLength, as it is designed to calculate the hours, minutes, and seconds based on the total number of seconds. However, if movieLength is a negative value, the calculations may not make sense in the context of a movie length, and the output may not be meaningful. Additionally, if movieLength is not an integer (e.g., a floating-point number), the calculations may still work but could lead to unexpected results due to the way the modulus operator and division handle non-integer values. Therefore, it is best to ensure that movieLength is a non-negative integer for this code to function as intended.

