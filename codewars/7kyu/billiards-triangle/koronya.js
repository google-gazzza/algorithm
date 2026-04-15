// [JS][7kyu] Billiards triangle
// billiards-triangle
// https://www.codewars.com/kata/5bb3e299484fcd5dbb002912/train/javascript

const pyramid = (balls) => {
  const result = (-1 + Math.sqrt(1 + 8 * balls)) / 2
  return Math.floor(result)
}

pyramid(1) === 1
pyramid(4) === 2
pyramid(20) === 5
pyramid(100) === 13
pyramid(9999) === 140
