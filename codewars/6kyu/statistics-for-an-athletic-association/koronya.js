// [JS][6kyu] Statistics for an Athletic Association
// statistics-for-an-athletic-association
// https://www.codewars.com/kata/55b3425df71c1201a800009c/train/javascript

const convertNumberToTime = (num) => {
  const h = Math.floor(num / 3600)
  const m = Math.floor((num - h * 3600) / 60)
  const s = num - h * 3600 - m * 60
  return `${h.toString().padStart(2, '0')}|${m.toString().padStart(2, '0')}|${s.toString().padStart(2, '0')}`
}

const convertTimeToNumber = (str) => {
  const [h, m, s] = str.split('|').map((item) => Number(item))
  return h * 3600 + m * 60 + s
}

const stat = (strg) => {
  if (strg === '') {
    return ''
  }
  const arr = strg.split(',').map((item) => item.trim())
  const arrLen = arr.length
  const sortedArr = arr.map((item) => convertTimeToNumber(item)).sort((a, b) => a - b)
  const range = convertNumberToTime(sortedArr[arrLen - 1] - sortedArr[0])
  const average = convertNumberToTime(Math.floor(sortedArr.reduce((acc, cur) => acc + cur, 0) / arrLen))
  const median =
    arrLen % 2 === 0
      ? convertNumberToTime(Math.floor((sortedArr[arrLen / 2 - 1] + sortedArr[arrLen / 2]) / 2))
      : convertNumberToTime(sortedArr[Math.floor(arrLen / 2)])

  return `Range: ${range} Average: ${average} Median: ${median}`
}

stat('01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17')
stat('02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41')
stat('')
