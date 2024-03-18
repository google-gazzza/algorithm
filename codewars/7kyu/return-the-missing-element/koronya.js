// [JS][7kyu] Return the Missing Element
// return-the-missing-element
// https://www.codewars.com/kata/5299413901337c637e000004/train/javascript

const getMissingElement = (superImportantArray) => {
  const set = new Set(superImportantArray)
  const newArr = Array.from({ length: 10 }, (_, i) => i)
  return newArr.find((item) => !set.has(item))
}

getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]) === 8
getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1]) === 3
