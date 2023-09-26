// [JS][6kyu] Row of the odd triangle
// row-of-the-odd-triangle
// https://www.codewars.com/kata/5d5a7525207a674b71aa25b5/train/javascript

const getFirstNumber = (n) => {
  return n * (n - 1) + 1
}

const oddRow = (n) => {
  const result = []
  let count = 0
  let value = getFirstNumber(n)

  while (count < n) {
    result.push(value)
    value += 2
    count += 1
  }

  return result
}

oddRow(1)
oddRow(2)
oddRow(3)
oddRow(4)
