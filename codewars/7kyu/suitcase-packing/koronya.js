// [JS][7kyu] Suitcase packing
// suitcase-packing
// https://www.codewars.com/kata/5c556845d7e0334c74698706/train/javascript

const fit_in = (a, b, m, n) => {
  const width = Math.min(m, n)
  const height = Math.max(m, n)
  const maxOfAandB = Math.max(a, b)
  if (a + b <= width && maxOfAandB <= height) {
    return true
  }
  if (a + b <= height && maxOfAandB <= width) {
    return true
  }

  return false
}

// fit_in(7, 2, 8, 7) === false
// fit_in(1, 2, 9, 1) === false

// fit_in(1, 2, 3, 2) === true
// fit_in(1, 2, 2, 1) === false
// fit_in(3, 2, 3, 2) === false
// fit_in(1, 2, 1, 2) === false
// fit_in(6, 5, 8, 7) === false
