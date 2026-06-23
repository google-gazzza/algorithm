// [JS][7kyu] Broken sequence
// broken-sequence
// https://www.codewars.com/kata/5512e5662b34d88e44000060/train/javascript

const containsOnlyNumbersAndSpaces = (value) => /^[\d\s]+$/.test(value)

const findMissingNumber = (sequence) => {
  if (sequence === '') {
    return 0
  }
  if (!containsOnlyNumbersAndSpaces(sequence)) {
    return 1
  }
  const arr = sequence
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b)
  const arrLen = arr.length
  const min = arr[0]
  if (min > 1) {
    return 1
  }
  let target = min
  for (let i = 0; i < arrLen; i += 1 || 0) {
    const item = arr[i]
    if (target !== item) {
      return target
    }
    target += 1
  }

  return 0
}

findMissingNumber('1 2 3 5') === 4
findMissingNumber('1 3') === 2
findMissingNumber('1 5') === 2
findMissingNumber('') === 0
findMissingNumber('1 2 3 4 5') === 0
findMissingNumber('2 3 4 5') === 1
findMissingNumber('2 6 4 5 3') === 1
findMissingNumber('2 1 4 3 a') === 1
