// [JS][6kyu] Simple Fun #310: Array Conversion
// simple-fun-310-array-conversion
// https://www.codewars.com/kata/5927aabdf3a75890a10000ee/train/javascript

const CHAR_CODE_OF_LOWER_A = 'a'.charCodeAt(0)
const getLowerAlphabet = (num) => String.fromCharCode(CHAR_CODE_OF_LOWER_A + num)

const convertNum = (num) => {
  const rest = []
  let target = num
  while (target >= 26) {
    const quota = Math.floor(target / 26)
    const remainder = target % 26
    rest.push(remainder)
    target = quota
  }
  return [target, ...rest.reverse()].map((num) => getLowerAlphabet(num)).join('')
}

// convertNum(28)
// convertNum(7)
// convertNum(55)
// convertNum(9546)
// convertNum(882525)

const conversion = (arr) => {
  const stringList = arr.map((num) => convertNum(num))
  const maxLen = Math.max(...stringList.map((str) => str.length))
  const first = String.fromCharCode(CHAR_CODE_OF_LOWER_A + maxLen - 1)
  const connectedStr = stringList.map((str) => str.padStart(maxLen, 'a')).join('')

  return first + connectedStr
}

conversion([1, 28, 55]) === 'babbccd'

// conversion([9546]) === 'code'

// conversion([22, 48, 50, 40, 77, 48, 82, 14, 73, 58]) === 'bawbwbyboczbwdeaocvcg'

// conversion([882525, 145823, 205315, 441459, 235155, 160110, 543353, 888807, 117216, 63762]) === 'ebyfnhaihspalrstazdbfanjwlajcwcbexufbyouxagrkiadqik'
