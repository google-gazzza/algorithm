// [JS][6kyu] 1 Two 3 Four 5!
// 1-two-3-four-5
// https://www.codewars.com/kata/59f2746e50c8c2b55d000085/train/javascript

const numMap = new Map([
  ['0', 'zero'],
  ['1', 'one'],
  ['2', 'two'],
  ['3', 'three'],
  ['4', 'four'],
  ['5', 'five'],
  ['6', 'six'],
  ['7', 'seven'],
  ['8', 'eight'],
  ['9', 'nine'],
])

const getMatchedString = (char, index, isEven) => {
  const str = numMap.get(char)
  const sumStr = isEven ? str.toLowerCase() + str.toUpperCase() : str.toUpperCase() + str.toLowerCase()
  const repeatNumber = Math.ceil(index / sumStr.length)
  const repeatedStr = sumStr.repeat(repeatNumber)
  return repeatedStr.substring(0, index)
}

const conv = (num) => {
  const numLength = String(num).length
  const isNumEven = numLength % 2 === 0
  const arr = []
  String(num)
    .split('')
    .map((char, index) => {
      if ((isNumEven && char % 2 === 0) || (!isNumEven && char % 2 !== 0)) {
        arr.push(getMatchedString(char, index + 1, isNumEven))
      } else {
        arr.push(char)
      }
    })
  return arr.join('')
}

conv(11) === '11'
conv(1101) === '11zer1'
conv(54563) === 'F4FIV6THREE'
conv(47309534) === 'f73zero953fourFOUR'
conv(34266262106) === 'T4266262ONEoneONE06'
conv(15795379351687) === '15795379351sixSIXsixSIXeightEIGHTeig7'
conv(157953793516872) === 'OFISEVNINEFIVEfTHREEtSEVENseNINEnineTHREEthreFIVEfiveFIONEoneONEon68SEVENsevenSEVE2'
