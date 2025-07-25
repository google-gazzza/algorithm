// [JS][7kyu] String Scramble
// string-scramble
// https://www.codewars.com/kata/5822d89270ca28c85c0000f3/train/javascript

const scramble = (str, arr) => {
  const result = Array.from({ length: arr.length })
  arr.forEach((item, i) => (result[item] = str[i]))
  return result.join('')
}

scramble('abcd', [0, 3, 1, 2]) === 'acdb'
scramble('sc301s', [4, 0, 3, 1, 5, 2]) === 'c0s3s1'
scramble('bskl5', [2, 1, 4, 3, 0]) === '5sblk'
