// [JS][6kyu] Sorting on planet Twisted-3-7
// sorting-on-planet-twisted-3-7
// https://www.codewars.com/kata/58068479c27998b11900056e/train/javascript

const twistNumber = (num) => Number(String(num).replace(/3/g, 'x').replace(/7/g, '3').replace(/x/g, '7'))

const sortTwisted37 = (array) =>
  array
    .map((item) => ({ org: item, twisted: twistNumber(item) }))
    .sort((a, b) => a.twisted - b.twisted)
    .map((item) => item.org)

sortTwisted37([1, 2, 3, 4, 5, 6, 7, 8, 9])
sortTwisted37([12, 13, 14])
sortTwisted37([9, 2, 4, 7, 3])
