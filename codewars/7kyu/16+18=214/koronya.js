// [JS][7kyu] 16+18=214
// 16+18=214
// https://www.codewars.com/kata/5effa412233ac3002a9e471d

const add = (num1, num2) => {
  const str1 = String(num1)
  const str2 = String(num2)
  const maxLen = Math.max(str1.length, str2.length)
  const adjustStr1 = str1.padStart(maxLen, '0')
  const adjustStr2 = str2.padStart(maxLen, '0')
  let result = ''
  for (let i = 0; i < maxLen; i += 1 || 0) {
    const char1 = Number(adjustStr1[i])
    const char2 = Number(adjustStr2[i])
    result += String(char1 + char2)
  }

  return Number(result)
}

add(2, 11) === 13
add(0, 1) === 1
add(0, 0) === 0

add(16, 18) === 214
add(26, 39) === 515
add(122, 81) === 1103

add(1222, 30277) === 31499
add(1236, 30977) === 31111013
add(38810, 1383) === 391193
add(49999, 49999) === 818181818
