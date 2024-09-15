// [JS][7kyu] Find the middle element
// find-the-middle-element
// https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript

const gimme = (triplet) =>
  triplet
    .map((item, index) => ({
      item,
      index,
    }))
    .sort((a, b) => a.item - b.item)[1].index

gimme([2, 3, 1])
gimme([5, 10, 14])
