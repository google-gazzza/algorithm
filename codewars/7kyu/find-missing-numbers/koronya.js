// [JS][7kyu] Find missing numbers
// find-missing-numbers
// https://www.codewars.com/kata/56d02e6cc6c8b49c510005bb/train/javascript

const findMissingNumbers = (arr) => {
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  const fullRange = Array.from({ length: max - min + 1 }, (_, i) => i + min)
  return fullRange.filter((num) => !arr.includes(num))
}

findMissingNumbers([-3, -2, 1, 4])
findMissingNumbers([-1, 0, 1, 2, 3, 4])
findMissingNumbers([])
