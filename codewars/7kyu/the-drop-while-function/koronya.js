// [JS][7kyu] The dropWhile Function
// the-drop-while-function
// https://www.codewars.com/kata/54f9c37106098647f400080a/train/javascript

const dropWhile = (array, predicate) => {
  let leftSize = 0
  let index = 0
  const arrayLength = array.length
  while (index < arrayLength) {
    if (predicate(array[index])) {
      leftSize += 1
      index += 1
    } else {
      break
    }
  }

  return array.slice(leftSize)
}

const isEven = (num) => {
  return num % 2 === 0
}
const seq = [2, 4, 6, 8, 1, 2, 5, 4, 3, 2]
dropWhile(seq, isEven) // -> [1,2,5,4,3,2]
dropWhile([72, -45, -5, -41, 86, 75, -83, -45, 48, -91, 81, -5, -61, 97, 78, 18, 83, 0, -1], (num) => num % 2 !== 0)
