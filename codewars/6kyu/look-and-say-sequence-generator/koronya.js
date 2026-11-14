// [JS][6kyu] Look and say sequence generator
// look-and-say-sequence-generator
// https://www.codewars.com/kata/592421cb7312c23a990000cf/train/javascript

const getConnectedString = (str) => {
  const result = []
  const strLen = str.length
  let count = 1
  let prev = str[0]
  for (let i = 1; i < strLen; i += 1) {
    const current = str[i]
    if (prev === current) {
      count += 1
    } else {
      result.push({ str: prev, count })
      prev = str[i]
      count = 1
    }
  }
  result.push({ str: prev, count })

  return result.map(({ count, str }) => `${count}${str}`).join('')
}

const lookAndSaySequence = (firstElement, n) => {
  let str = firstElement
  for (let i = 1; i < n; i += 1 || 0) {
    str = getConnectedString(str)
  }
  return str
}

lookAndSaySequence('1', 5)
lookAndSaySequence('1', 1) === '1'
lookAndSaySequence('1', 3) === '21'
lookAndSaySequence('1', 5) === '111221'
lookAndSaySequence('22', 10) === '22'
lookAndSaySequence('14', 2) === '1114'
