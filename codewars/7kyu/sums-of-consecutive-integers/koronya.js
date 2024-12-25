// [JS][7kyu] Sums of consecutive integers
// sums-of-consecutive-integers
// https://www.codewars.com/kata/55b54be931e9ce28bc0000d6/train/javascript

/**
 * Given the number of consecutive integers and the total of the integers,
 * return the consecutive integer at the requested position.
 *
 * @param {int} x number of consecutive integers
 * @param {int} y sum of consecutive integers
 * @param {int} n position of requested integer
 * @return {int} consecutive integer at requested position
 */
const position = (x, y, n) => {
  const a = (y - (x * (x - 1)) / 2) / x
  return a + n
}

position(4, 14, 3) === 5
position(2, 25, 0) === 12
position(7, 749, 5) === 109
position(3, -9, 1) === -3
position(5, 0, 0) === -2
