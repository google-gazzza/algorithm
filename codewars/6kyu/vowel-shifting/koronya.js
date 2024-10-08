// [JS][6kyu] Vowel Shifting
// vowel-shifting
// https://www.codewars.com/kata/577e277c9fb2a5511c00001d/train/javascript

const VOWEL_LIST = ['a', 'e', 'i', 'o', 'u']
const rotateArray = (arr, n) => {
  const arrLen = arr.length
  const moveCandidate = n % arrLen
  const move = moveCandidate > 0 ? moveCandidate : arrLen + moveCandidate
  const result = []
  arr.forEach((num, index) => {
    result[(index + move) % arr.length] = num
  })
  return result
}
const vowelShift = (text, n) => {
  if (!text || n === 0) {
    return text
  }
  const vowelInfoList = []
  const textArr = text.split('')
  textArr.forEach((char, index) => {
    if (VOWEL_LIST.includes(char.toLowerCase())) {
      vowelInfoList.push({ char, index })
    }
  })
  const rotateArr = rotateArray(
    vowelInfoList.map((vowelInfo) => vowelInfo.char),
    n,
  )
  const result = textArr
  rotateArr.map((char, index) => {
    const changeIndex = vowelInfoList[index].index
    result[changeIndex] = char
  })

  return result.join('')
}

// vowelShift('This is a test!', 0) === 'This is a test!'
// vowelShift('This is a test!', 1) === 'Thes is i tast!'
// vowelShift('This is a test!', 3) === 'This as e tist!'
// vowelShift('This is a test!', -5)
