// [JS][7kyu] String to list of integers.
// string-to-list-of-integers
// https://www.codewars.com/kata/5727868888095bdf5c001d3d/train/javascript

const stringToIntArray = (s) =>
  s
    .split(',')
    .filter(Boolean)
    .map((item) => Number(item))

stringToIntArray('1,2,3,4,5')
stringToIntArray('21,12,23,34,45')
stringToIntArray('-1,-2,3,-4,-5')
stringToIntArray('1,2,3,,,4,,5,,,')
stringToIntArray(',,,,,1,2,3,,,4,,5,,,')
stringToIntArray('')
stringToIntArray(',,,,,,,')
