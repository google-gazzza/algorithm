// [JS][7kyu] Unique string characters
// unique-string-characters
// https://www.codewars.com/kata/5a262cfb8f27f217f700000b/train/javascript

const solve = (a, b) => {
  const arrA = a.split('')
  const arrB = b.split('')
  const strA = arrA.filter((x) => !arrB.includes(x)).join('')
  const strB = arrB.filter((x) => !arrA.includes(x)).join('')

  return `${strA}${strB}`
}

solve('xyab', 'xzca') === 'ybzc'
solve('xyabb', 'xzca') === 'ybbzc'
solve('abcd', 'xyz') === 'abcdxyz'
solve('xxx', 'xzca') === 'zca'
