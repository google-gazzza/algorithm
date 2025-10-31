// [JS][7kyu] Coding 3min : A*B=C
// coding-3min-a-b-c
// https://www.codewars.com/kata/5714803d2817ffce17000a35/train/javascript

const findAB = (numbers, c) => {
  const numbersLen = numbers.length
  for (let i = 0; i < numbersLen; i += 1 || 0) {
    const numA = numbers[i]
    for (let j = i + 1; j < numbersLen; j += 1) {
      const numB = numbers[j]
      if (numA * numB === c) {
        console.log([numA, numB])
        return [numA, numB]
      }
    }
  }
  return null
}

findAB([1, 2, 3], 3)
findAB([1, 2, 3], 6)
findAB([1, 2, 3], 7, null)
findAB([1, 2, 3, 6], 6)
findAB([1, 2, 3, 4, 5, 6], 15)
findAB([0, 0, 2], 4, null)
findAB([0, 0, 2, 2], 4)
findAB([-3, -2, -2, -1, 0, 1, 2, 3, 4], 4)
findAB([-3, -2, -2, -1, 0, 1, 2, 3, 4], 0)
findAB([-3, -2, -1, 0, 1, 2, 3, 4], 4)
findAB([0, 1, 2, 3], 0)
findAB([0, 0, 2, 3], 0)
