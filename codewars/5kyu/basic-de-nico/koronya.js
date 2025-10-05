// [JS][5kyu] Basic DeNico
// basic-de-nico
// https://www.codewars.com/kata/596f610441372ee0de00006e/train/javascript

const getModifyStr = (keyArr, str) => Array.from({ length: keyArr.length }, (_, i) => str[keyArr[i]]).join('')

const deNico = (key, m) => {
  const mLen = m.length
  const keyLen = key.length
  const keyArr = key.split('')
  const order = keyArr
    .map((_, i) => [i, key.charCodeAt(i)])
    .sort((a, b) => a[1] - b[1])
    .map((v) => v[0])
  const deNicoKey = Array.from({ length: key.length }, (item, index) => {
    return order.indexOf(index)
  })

  const arr = []
  let startIndex = 0
  while (startIndex < mLen) {
    arr.push(getModifyStr(deNicoKey, m.slice(startIndex, startIndex + keyLen)))
    startIndex += keyLen
  }

  return arr.join('').trim()
}

// deNico('crazy', 'cseerntiofarmit on  ') === 'secretinformation'
// deNico('crazy', 'cseerntiofarmit on') === 'secretinformation'
// deNico('abc', 'abcd') === 'abcd'
// deNico('ba', '2143658709') === '1234567890'
// deNico('a', 'message') === 'message'
// deNico('key', 'eky') === 'key'
