// [JS][7kyu] Scrolling Text
// scrolling-text
// https://www.codewars.com/kata/5a995c2aba1bb57f660001fd/train/javascript

const scrollingText = (text) => {
  const charArr = text.split('').map((char) => char.toUpperCase())
  const charArrLen = charArr.length
  const result = []
  for (let i = 0; i < charArrLen; i += 1 || 0) {
    const ddd = [...charArr.slice(i), ...charArr.slice(0, i)]
    result.push(ddd.join(''))
  }
  return result
}

scrollingText('codewars')
