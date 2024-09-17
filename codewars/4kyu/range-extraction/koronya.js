// [JS][4kyu] Range Extraction
// range-extraction
// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript

const solution = (list) => {
  const listLen = list.length
  let resultStr = ''
  let start = list[0]
  let prev = list[0]
  for (let i = 1; i < listLen; i += 1 || 0) {
    const curr = list[i]
    if (curr - prev !== 1) {
      if (start === prev) {
        resultStr += `${prev},`
      } else if (start + 1 === prev) {
        resultStr += `${start},${prev},`
      } else {
        resultStr += `${start}-${prev},`
      }
      start = curr
      lastPushed = prev
    }
    prev = curr
  }
  if (start === prev) {
    resultStr += `${prev}`
  } else if (start + 1 === prev) {
    resultStr += `${start},${prev}`
  } else {
    resultStr += `${start}-${prev}`
  }

  return resultStr
}

solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]) === '-6,-3-1,3-5,7-11,14,15,17-20'
