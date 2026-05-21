// [JS][6kyu] Simple Fun #56: Beautiful Text
// simple-fun-56-beautiful-text
// https://www.codewars.com/kata/58899b0c97630e0b70000089/train/javascript

// str을 입력 받아서, num만큼의 길이로 여러토막 만들어서 리턴하는 함수
const getValidCount = (str, num) => {
  const resultArr = []
  for (let i = 0, strLength = str.length; i < strLength; i += num + 1) {
    resultArr.push(str.slice(i, i + num).length)
  }
  return resultArr.every((count) => count === resultArr[0])
}

const beautifulText = (s, l, r) => {
  const sLength = s.length
  for (let i = l; i <= r; i++) {
    let isAllSpace = true
    for (let j = i; j < sLength; j += i + 1) {
      if (s[j] !== ' ') {
        isAllSpace = false
        break
      }
    }
    if (isAllSpace && getValidCount(s, i)) {
      return true
    }
  }
  return false
}

// beautifulText('Look at this example of a correct text', 5, 15) === true
// beautifulText('abc def ghi', 4, 10) === false
// beautifulText('a a a a a a a a', 1, 10) === true
// beautifulText('ab cd fg xyz', 1, 5) === false
// beautifulText('aa aa aaaaa aaaaa aaaaa', 6, 11) === true
