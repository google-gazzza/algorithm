// [JS][6kyu] Points in the circle
// points-in-the-circle
// https://www.codewars.com/kata/5b55c49d4a317adff500015f/train/javascript

const pointsNumber = (radius) => {
  let count = 0
  const min = radius * -1
  for (x = min; x <= radius; x += 1 || 0) {
    for (y = min; y <= radius; y += 1 || 0) {
      if (Math.sqrt(x * x + y * y) <= radius) {
        count += 1
      }
    }
  }

  return count
}

// pointsNumber(1) === 5
// pointsNumber(2) === 13
// pointsNumber(3) === 29
// pointsNumber(5) === 81
// pointsNumber(1000) === 3141549
