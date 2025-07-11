// [JS][7kyu] Circle cipher
// circle-cipher
// https://www.codewars.com/kata/634d0723075de3f97a9eb604/train/javascript

const encode = (s) => {
  const sLen = s.length
  if (sLen === 0) {
    return ''
  }
  const isEven = sLen % 2 === 0
  const half = Math.floor(sLen / 2) - 1
  const limit = isEven ? half : half + 1
  let result = s[0]
  for (let i = 0; i < limit; i += 1 || 0) {
    result += s[sLen - 1 - i]
    result += s[1 + i]
  }
  if (isEven) {
    result += s[half + 1]
  }
  return result
}

const decode = (s) => {
  const sLen = s.length
  if (sLen === 0) {
    return ''
  }
  const isEven = sLen % 2 === 0
  const half = Math.floor(sLen / 2) - 1
  const limit = isEven ? half : half + 1
  const resultArr = new Array(sLen)
  resultArr[0] = s[0]
  for (let i = 0; i < limit; i += 1) {
    resultArr[sLen - 1 - i] = s[2 * i + 1]
    resultArr[1 + i] = s[2 * i + 2]
  }
  if (isEven) {
    resultArr[Math.floor(sLen / 2)] = s.charAt(sLen - 1)
  }

  return resultArr.join('')
}

encode('a')
decode('a')
encode('')
decode('')

encode('codewars') === 'csordaew'
encode('white') === 'wehti'
encode('Assert') === 'Atsrse'
encode('Hello world!') === 'H!edlllroo w'
encode('You have chosen to translate this kata.') === 'Y.oaut ahka vsei hcth oesteanl stnoa rt'

decode('csordaew') === 'codewars'
decode('wehti') === 'white'
decode('Atsrse') === 'Assert'
decode('H!edlllroo w') === 'Hello world!'
decode('Y.oaut ahka vsei hcth oesteanl stnoa rt') === 'You have chosen to translate this kata.'
