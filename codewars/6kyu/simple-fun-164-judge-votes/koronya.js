// [JS][6kyu] Simple Fun #164: Judge Votes
// simple-fun-164-judge-votes
// https://www.codewars.com/kata/58afc931c6ffb8906100002d/train/javascript

const getBinaryString = (num) => num.toString(2)

const judge = (votes) => {
  const binaryList = votes.map((vote) => getBinaryString(vote))
  const maxLen = Math.max(...binaryList.map((binary) => binary.length))
  const adjustBinaryList = binaryList.map((binary) => String(binary).padStart(maxLen, '0'))
  const countList = []
  for (let i = 0; i < maxLen; i += 1 || 0) {
    const count = adjustBinaryList.reduce((acc, binary) => acc + Number(binary[i]), 0)
    countList.push(count)
  }
  const max = Math.max(...countList)
  if (max !== votes.length) {
    return 0
  }

  const maxIndex = countList.indexOf(max)
  if (maxIndex !== countList.lastIndexOf(max)) {
    return 0
  }

  return maxLen - maxIndex
}

judge([1, 2, 3]) === 0
judge([1, 3, 3]) === 1
judge([7, 7, 7]) === 0
judge([15, 8]) === 4
judge([1, 2, 3, 4, 5, 6, 7, 8, 9]) === 0
judge([1024]) === 11
judge([7, 15, 4]) === 3
judge([15, 8, 1073741823]) === 4
judge([10384825, 10384825, 10384825]) === 0
judge([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) === 0
