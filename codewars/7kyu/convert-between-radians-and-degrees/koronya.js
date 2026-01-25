// [JS][7kyu] Convert between radians and degrees
// convert-between-radians-and-degrees
// https://www.codewars.com/kata/544e2c60908f2da03600022a/train/javascript

Math.degrees = function (rad) {
  const degrees = (rad * 180) / Math.PI
  const rounded = Math.round(degrees * 100) / 100
  return `${rounded}deg`
}

Math.radians = function (deg) {
  const radians = (deg * Math.PI) / 180
  const rounded = Math.round(radians * 100) / 100
  return `${rounded}rad`
}

// Math.degrees(Math.PI) === '180deg'
// Math.radians(180) === '3.14rad'
