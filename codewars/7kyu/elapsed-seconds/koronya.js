// [JS][7kyu] Elapsed Seconds
// elapsed-seconds
// https://www.codewars.com/kata/517b25a48557c200b800000c/train/javascript

const elapsedSeconds = (startDate, endDate) => (endDate - startDate) / 1000

const start = new Date(2013, 1, 1, 0, 0, 1)
const end = new Date(2013, 1, 1, 0, 0, 2)
const end2 = new Date(2013, 1, 1, 0, 0, 20)
const end3 = new Date(2013, 1, 1, 0, 1, 20)

elapsedSeconds(start, end) === 1
elapsedSeconds(end, end2) === 18
elapsedSeconds(start, end2) === 19
elapsedSeconds(start, end3) === 79
elapsedSeconds(end, end3) === 78
