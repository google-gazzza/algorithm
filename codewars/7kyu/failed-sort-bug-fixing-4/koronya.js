// [JS][7kyu] Failed Sort - Bug Fixing #4
// failed-sort-bug-fixing-4
// https://www.codewars.com/kata/55c7f90ac8025ebee1000062/train/javascript

const sortArray = (value) => {
  return value
    .split('')
    .sort((a, b) => a - b)
    .join('')
}

sortArray('12345') === '12345'
sortArray('54321') === '12345'
sortArray('34251') === '12345'
