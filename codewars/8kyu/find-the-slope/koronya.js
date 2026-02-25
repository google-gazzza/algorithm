// [JS][8kyu] Find the Slope
// find-the-slope
// https://www.codewars.com/kata/55a75e2d0803fea18f00009d/train/javascript
const slope = (points) => {
  const [x1, y1, x2, y2] = points
  if (x2 - x1 === 0) {
    return 'undefined'
  }

  const result = (y2 - y1) / (x2 - x1)
  return result.toString()
}

slope([19, 3, 20, 3]) === '0'
slope([2, 7, 4, -7]) === '-7'
slope([10, 50, 30, 150]) === '5'
slope([15, 45, 12, 60]) === '-5'
slope([10, 20, 20, 80]) === '6'
slope([-10, 6, -10, 3]) === 'undefined'
