// [JS][6kyu] Decipher this!
// decipher-this
// https://www.codewars.com/kata/581e014b55f2c52bb00000f8/train/javascript

const decipherThis = (str) => {
  return str
    .split(' ')
    .map((word) => {
      const code = word.match(/\d+/)[0]
      const rest = word.substring(code.length)
      const restLen = rest.length
      const first = String.fromCharCode(code)
      if (restLen === 0) {
        return first
      }
      if (restLen === 1) {
        return first + rest
      }
      const second = rest[rest.length - 1]
      const last = rest[0]
      if (restLen === 2) {
        return first + second + last
      }
      const mid = rest.substring(1, rest.length - 1)

      return first + second + mid + last
    })
    .join(' ')
}

decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o') === 'Have a go at this and see how you do'
