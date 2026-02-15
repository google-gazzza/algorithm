// [JS][6kyu] Perfect Square.
// perfect-square
// https://www.codewars.com/kata/584e93a70f60247eb8000132/train/javascript

const getDotCount = (string) => string.split('').filter((char) => char === '.').length

const perfectSquare = (string) => {
  const arr = string.split('\n')
  let firstLineSquareLength = getDotCount(arr[0])
  return arr.every((line) => getDotCount(line) === firstLineSquareLength) && arr.length === firstLineSquareLength
}

perfectSquare('..\n..') === true
perfectSquare('...\n...\n...') === true
perfectSquare('...\n,..\n...') === false
perfectSquare(',,,\n,,,\n,,,') === false
