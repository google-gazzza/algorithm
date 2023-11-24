// [JS][7kyu] Numbers in strings
// numbers-in-strings
// https://www.codewars.com/kata/59dd2c38f703c4ae5e000014/train/javascript

const solve = (s) => {
  const result = s.split(/[a-z]/g).filter((item) => item !== '')
  const max = result.reduce((acc, cur) => {
    const curNum = Number(cur)
    if (acc < curNum) {
      return curNum
    }
    return acc
  }, 0)

  return max
}

solve('gh12cdy695m1') === 695
// solve('2ti9iei7qhr5') === 9
// solve('vih61w8oohj5') === 61
// solve('f7g42g16hcu5') === 42
// solve('lu1j8qbbb85') === 85
