// [JS][7kyu] Sort by binary ones
// sort-by-binary-ones
// https://www.codewars.com/kata/59eb28fb0a2bffafbb0000d6/train/javascript

const getOneLength = (str) => str.split('').filter((item) => item === '1').length

const sortByBinaryOnes = (list) =>
  list
    .map((num) => ({ num, str: num.toString(2) }))
    .sort((a, b) => getOneLength(b.str) - getOneLength(a.str) || a.str.length - b.str.length || a.num - b.num)
    .map((item) => item.num)

// sortByBinaryOnes([1, 3])
// sortByBinaryOnes([1, 2, 3, 4])
// sortByBinaryOnes([1, 15, 7, 3, 5])
// sortByBinaryOnes([1, 15, 5, 7, 3])

