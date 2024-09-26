// [JS][7kyu] Between Extremes
// between-extremes
// https://www.codewars.com/kata/56d19b2ac05aed1a20000430/train/javascript

const betweenExtremes = (numbers) => Math.max(...numbers) - Math.min(...numbers)

betweenExtremes([21, 34, 54, 43, 26, 12]) === 42
betweenExtremes([-1, -41, -77, -100]) === 99
