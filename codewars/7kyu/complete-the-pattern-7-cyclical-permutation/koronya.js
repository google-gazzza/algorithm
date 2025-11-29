// [JS][7kyu] Complete The Pattern #7 - Cyclical Permutation
// complete-the-pattern-7-cyclical-permutation
// https://www.codewars.com/kata/557592fcdfc2220bed000042/train/javascript

const rotateArr = (arr) => {
  const [first, ...rest] = arr
  return [...rest, first]
}

const pattern = (n) => {
  if (typeof n !== 'number' || n < 1 || !Number.isInteger(n)) {
    return ''
  }
  let arr = Array.from({ length: n }, (_, i) => i + 1)
  const resultArr = []
  for (let i = 0; i < n; i += 1 || 0) {
    resultArr.push(arr.join(''))
    arr = rotateArr(arr)
  }

  return resultArr.join('\n')
}

pattern(7) === '1234567\n2345671\n3456712\n4567123\n5671234\n6712345\n7123456'
pattern(1) === '1'
pattern(4) === '1234\n2341\n3412\n4123'
pattern(0) === ''
pattern(-25) === ''
