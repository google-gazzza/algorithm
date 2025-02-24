// [JS][7kyu] Scaling Squared Strings
// scaling-squared-strings
// https://www.codewars.com/kata/56ed20a2c4e5d69155000301/train/javascript

const scale = (strng, k, n) => {
  if (strng === '') {
    return ''
  }
  const arr = strng.split('\n')
  return arr
    .map((row) =>
      row
        .split('')
        .map((char) => char.repeat(k))
        .join(''),
    )
    .map((item) => Array.from({ length: n }, () => item).join('\n'))
    .join('\n')
}

scale('abcd\nefgh\nijkl\nmnop', 2, 3)
