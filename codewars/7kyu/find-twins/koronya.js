// [JS][7kyu] Find twins
// find-twins
// https://www.codewars.com/kata/5834315e06f227a6ac000099/train/javascript

const elimination = (arr) => {
  let twins = arr.filter((item, _, array) => array.indexOf(item) !== array.lastIndexOf(item))
  return twins.length ? Math.min(...twins) : null
}

elimination([2, 5, 34, 1, 22, 1]) === 1
elimination([2, 2, 34, 1, 22]) === 2
elimination([2, 5, 34, 1, 22]) === null
