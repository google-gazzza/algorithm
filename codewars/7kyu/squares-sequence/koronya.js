// [JS][7kyu] Squares sequence
// squares-sequence
// https://www.codewars.com/kata/5546180ca783b6d2d5000062/train/javascript

const squares = (x, n) => {
  if (n <= 0) {
    return []
  }
  const result = [x]
  for (let i = 1; i < n; i += 1 || 0) {
    result.push(result[i - 1] ** 2)
  }

  return result
}

squares(2, 5)
squares(3, 3)
squares(5, 3)
squares(10, 4)
squares(2, 0)
squares(2, -5)
