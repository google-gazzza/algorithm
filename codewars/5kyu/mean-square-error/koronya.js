// [JS][5kyu] Mean Square Error
// mean-square-error
// https://www.codewars.com/kata/51edd51599a189fe7f000015/train/javascript

const solution = (firstArray, secondArray) => {
  const sum = firstArray.reduce((acc, cur, i) => acc + (cur - secondArray[i]) ** 2, 0)
  return sum / firstArray.length
}

solution([1, 2, 3], [4, 5, 6]) === 9
solution([10, 20, 10, 2], [10, 25, 5, -2]) === 16.5
solution([0, -1], [-1, 0]) === 1
