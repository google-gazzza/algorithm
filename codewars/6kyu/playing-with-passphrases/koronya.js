// [JS][6kyu] Playing with passphrases
// playing-with-passphrases
// https://www.codewars.com/kata/559536379512a64472000053/train/javascript

const CHAR_CODE_OF_UPPER_Z = 'Z'.charCodeAt(0)

const playPass = (s, n) => {
  return s
    .split('')
    .map((item, index) => {
      if (item.match(/[A-Z]/)) {
        const code = item.charCodeAt(0) + n
        const newCode = code > CHAR_CODE_OF_UPPER_Z ? code - 26 : code
        const newChar = String.fromCharCode(newCode)
        return index % 2 === 0 ? newChar.toUpperCase() : newChar.toLowerCase()
      } else if (item.match(/[0-9]/)) {
        return 9 - item
      } else {
        return item
      }
    })
    .reverse()
    .join('')
}

playPass('I LOVE YOU!!!', 1) === '!!!vPz fWpM J'
playPass('MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015', 2) === '4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO'
