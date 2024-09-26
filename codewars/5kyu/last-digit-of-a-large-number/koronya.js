// [JS][5kyu] Last digit of a large number
// last-digit-of-a-large-number
// https://www.codewars.com/kata/5511b2f550906349a70004e1/train/javascript

const arr1 = [1, 5, 6, 0]
const arr2 = [4, 9]

const lastDigit = (str1, str2) => {
  if (str2 === '0') {
    return 1
  }
  const last1 = str1.slice(-1)
  const last2 = str2.slice(-2)
  if (arr1.includes(last1) === true) {
    return last1
  }
  if (arr2.includes(last1) === true) {
    return last2 % 2 === 1 ? last1 : last1 ** 2 % 10
  }
  const index = last2 % 4

  return last1 ** (index === 0 ? 4 : index) % 10
}

// lastDigit('4', '1') === 4
// lastDigit('4', '2') === 6
// lastDigit('9', '7') === 9
// lastDigit('10', '10000000000') === 0

// lastDigit(
//   '1606938044258990275541962092341162602522202993782792835301376',
//   '2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376',
// ) === 6

// lastDigit('3715290469715693021198967285016729344580685479654510946723', '68819615221552997273737174557165657483427362207517952651') === 7
// lastDigit('3715290469715693021198967285016729344580685479654510946723', '68819615221552997273737174557165657483427362207517952651')
// lastDigit('13', '11') === 7
// lastDigit('13', '11')

// 1 / 1
// 2 / 2, 4, 8, 6
// 3 / 3, 9, 7, 1
// 4 / 4, 6
// 5 / 5
// 6 / 6
// 7 / 7, 9, 3, 1
// 8 / 8, 4, 2, 6
// 9 / 9, 1
// 0 / 0
