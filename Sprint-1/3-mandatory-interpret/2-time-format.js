const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const duration = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(duration);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//const movieLength = 8784; // length of movie in seconds
// const remainingSeconds = movieLength % 60;
// const totalMinutes = (movieLength - remainingSeconds) / 60;
// const remainingMinutes = totalMinutes % 60;
// const totalHours = (totalMinutes - remainingMinutes) / 60;
// const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;

// b) How many function calls are there?
// console.log(result);

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// The expression movieLength % 60 calculates the remainder when movieLength is divided by 60.
// which represents the number of seconds which are left after accounting for the
// full minutes in the movie length.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// This expression calculates the total number of minutes in the movie by first
// subtracting the remaining seconds from the total movie length (in seconds) to get
// a value that is a multiple of 60, and then dividing that value by 60 to convert it
// from seconds to minutes. This gives us the total number of full minutes in the movie.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// It represents the duration of movie converted to hours, minutes and seconds

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// It won't work for movie lengths that are negative or zero,
// as it would not make sense to have a movie with a negative or zero length.
// For positive values of movieLength, the code should work correctly and
// calculate the duration in hours, minutes, and seconds.
