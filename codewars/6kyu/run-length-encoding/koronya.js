// [JS][6kyu] Run-length encoding
// run-length-encoding
// https://www.codewars.com/kata/546dba39fa8da224e8000467/train/javascript

const runLengthEncoding = (str) => {
  const strLen = str.length
  if (strLen === 0) {
    return []
  }
  const resultArr = []
  let prev = str[0]
  let count = 1
  for (let i = 1; i < strLen; i += 1) {
    const curr = str[i]
    if (prev !== curr) {
      resultArr.push([count, prev])
      prev = curr
      count = 1
    } else {
      count += 1
    }
  }
  resultArr.push([count, prev])

  return resultArr
}

runLengthEncoding('hello world!')

runLengthEncoding('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb')
