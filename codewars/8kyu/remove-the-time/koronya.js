// [JS][8kyu] Remove the time
// remove-the-time
// https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e/train/javascript

const shortenToDate = (longDate) => longDate.split(',')[0]

shortenToDate('Friday May 2, 9am')
shortenToDate('Tuesday January 29, 10pm')
shortenToDate('Monday December 25, 10pm')
