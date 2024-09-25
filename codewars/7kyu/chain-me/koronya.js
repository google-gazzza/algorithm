// [JS][7kyu] Chain me
// chain-me
// https://www.codewars.com/kata/54fb853b2c8785dd5e000957/train/javascript

const chain = (input, fs) => fs.reduce((acc, fn) => fn(acc), input)

function add(num) {
  return num + 1
}

function mult(num) {
  return num * 30
}

chain(2, [add, mult])
