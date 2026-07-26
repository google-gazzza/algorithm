// [JS][7kyu] Sum it continuously
// sum-it-continuously
// https://www.codewars.com/kata/59b44d00bf10a439dd00006f/train/javascript

const add = (arr) => {
  let acc = 0
  return arr.map((item) => {
    acc += item
    return acc
  })
}

add([1, 2, 3, 4, 5])
