// [JS][7kyu] Javascript filter - 1
// javascript-filter-1
// https://www.codewars.com/kata/525d9b1a037b7a9da7000905/train/javascript

const searchNames = (logins) => logins.filter((login) => login[0].endsWith('_'))

searchNames([
  ['foo', 'foo@foo.com'],
  ['bar_', 'bar@bar.com'],
])
