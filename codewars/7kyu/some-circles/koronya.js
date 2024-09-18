// [JS][7kyu] Some Circles
// some-circles
// https://www.codewars.com/kata/56143efa9d32b3aa65000016/train/javascript

const sumCircles = (...args) => {
  const circles = [...args].map((r) => Math.PI * (r / 2) ** 2)
  const sum = circles.reduce((acc, cur) => acc + cur, 0)
  return `We have this much circle: ${Math.round(sum)}`
}

sumCircles(2) === 'We have this much circle: 3'
sumCircles(2, 3, 4) === 'We have this much circle: 23'
sumCircles(1, 1, 1) === 'We have this much circle: 2'
sumCircles(13.58, 14.9, 56.99, 107.321) === 'We have this much circle: 11916'
