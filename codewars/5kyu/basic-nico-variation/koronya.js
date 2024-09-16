// [JS][5kyu] Basic Nico variation
// basic-nico-variation
// https://www.codewars.com/kata/5968bb83c307f0bb86000015/train/javascript

const nico = (key, message) => {
  let resultStr = ''
  const keyLen = key.length
  const messageLen = message.length
  const tempArr = Array.from({ length: keyLen }, () => '')
  const mappedArr = key
    .split('')
    .map((item, index) => ({ item, index }))
    .sort((a, b) => a.item.localeCompare(b.item))
    .map((item, index) => ({ ...item, rank: index + 1 }))
    .sort((a, b) => a.index - b.index)
    .map((item) => item.rank)

  for (let i = 0; i < messageLen; i += 1 || 0) {
    const index = i % keyLen
    tempArr[index] += message[i]
  }
  const colLen = tempArr[0].length
  const adjustTempArr = tempArr.map((item) => (item.length < colLen ? (item += ' ') : item))
  const finalTempArr = adjustTempArr
    .map((item, index) => ({ item, rank: mappedArr[index] }))
    .sort((a, b) => a.rank - b.rank)
    .map((item) => item.item)

  for (let i = 0; i < colLen; i += 1 || 0) {
    for (let j = 0; j < keyLen; j += 1 || 0) {
      resultStr += finalTempArr[j][i]
    }
  }

  return resultStr
}

nico('crazy', 'secretinformation') === 'cseerntiofarmit on  '
// nico('abc', 'abcd') === 'abcd  '
// nico('ba', '1234567890') === '2143658709'
// nico('a', 'message') === 'message'
// nico('key', 'key') === 'eky'
