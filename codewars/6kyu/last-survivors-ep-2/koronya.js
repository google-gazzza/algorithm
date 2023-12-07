// [JS][6kyu] Last Survivors Ep.2
// last-survivors-ep-2
// https://www.codewars.com/kata/60a1aac7d5a5fc0046c89651/train/javascript

const CHARCODE_A = 97
const CHARCODE_Z = 122

const getNextChar = (char) => {
  const charCode = char.charCodeAt(0)
  const nextCharCode = charCode === CHARCODE_Z ? CHARCODE_A : charCode + 1
  return String.fromCharCode(nextCharCode)
}

const getAllValueCountOfMap = (map) => [...map].reduce((acc, [_, value]) => acc + value, 0)

const lastSurvivors = (str) => {
  let strMap = new Map()
  str.split('').forEach((char) => {
    const count = strMap.get(char) || 0
    strMap.set(char, count + 1)
  })
  if (strMap.size === str.length) {
    return str
  }

  while (true) {
    const newMap = new Map()
    const strMapArr = [...strMap]
    strMapArr.forEach(([char, count]) => {
      const value = (newMap.get(char) || 0) + count
      if (value > 1) {
        const nextChar = getNextChar(char)
        newMap.set(nextChar, (newMap.get(nextChar) || 0) + 1)
        if (value > 2) {
          newMap.set(char, value - 2)
        } else {
          newMap.delete(char)
        }
      } else {
        newMap.set(char, (newMap.get(char) || 0) + 1)
      }
    })
    if (newMap.size === getAllValueCountOfMap(newMap)) {
      return [...newMap].reduce((acc, [char, count]) => acc + char.repeat(count), '')
    }
    strMap = newMap
  }
}

// must be ad
lastSurvivors('zzabac')
// lastSurvivors('aabac')
// lastSurvivors('')
// lastSurvivors('zzzab')
// lastSurvivors('abaa')
// lastSurvivors('zzab')
// lastSurvivors('xsdlafqpcmjytoikojsecamgdkehrqqgfknlhoudqygkbxftivfbpxhxtqgpkvsrfflpgrlhkbfnyftwkdebwfidmpauoteahyh')
// lastSurvivors('zzzab') === 'cz'
// lastSurvivors('abaa') === 'ac'
// lastSurvivors('zzab') === 'c'
// lastSurvivors('') === ''
// lastSurvivors('xsdlafqpcmjytoikojsecamgdkehrqqgfknlhoudqygkbxftivfbpxhxtqgpkvsrfflpgrlhkbfnyftwkdebwfidmpauoteahyh') === 'acdeghlmnqrvyz'
