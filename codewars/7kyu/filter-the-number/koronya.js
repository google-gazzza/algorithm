// [JS][7kyu] Filter the number
// filter-the-number
// https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript

const filterString = (value) =>
  Number(
    value
      .split('')
      .filter((str) => str.match(/[0-9]/))
      .join(''),
  )

filterString('123') === 123
filterString('a1b2c3') === 123
filterString('aa1bb2cc3dd') === 123
