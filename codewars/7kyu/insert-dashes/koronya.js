// [JS][7kyu] Insert dashes
// insert-dashes
// https://www.codewars.com/kata/55960bbb182094bc4800007b/train/javascript

const insertDash = (num) =>
  String(num)
    .split('')
    .map((char, index, array) => (Number(char) % 2 === 1 && Number(array[index + 1] % 2 === 1) ? `${char}-` : char))
    .join('')

insertDash(454793) === '4547-9-3'
insertDash(123456) === '123456'
insertDash(1003567) === '1003-567'
