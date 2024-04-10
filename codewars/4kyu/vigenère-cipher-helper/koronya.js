// [JS][4kyu] Vigenère Cipher Helper
// vigenère-cipher-helper
// https://www.codewars.com/kata/52d1bd3694d26f8d6e0000d3/train/javascript

class VigenèreCipher {
  constructor(key, abc) {
    this.key = key
    this.keyLen = key.length
    this.abc = abc
    this.abcLen = abc.length
    this.modifyKeyArr = key.split('').map((char) => abc.indexOf(char))
  }

  encode(str) {
    return str
      .split('')
      .map((char, index) => {
        const idx = this.abc.indexOf(char)
        if (idx === -1) {
          return char
        }
        const adjustIndex = index % this.keyLen
        const modifyKeyIndex = this.modifyKeyArr[adjustIndex]
        const newIdx = (idx + modifyKeyIndex) % this.abcLen
        return this.abc[newIdx]
      })
      .join('')
  }
  decode(str) {
    return str
      .split('')
      .map((char, index) => {
        const idx = this.abc.indexOf(char)
        if (idx === -1) {
          return char
        }
        const adjustIndex = index % this.keyLen
        const modifyKeyIndex = this.modifyKeyArr[adjustIndex]
        const beforeIdx = idx - modifyKeyIndex
        const newIdx = beforeIdx >= 0 ? beforeIdx : this.abcLen + beforeIdx
        return this.abc[newIdx]
      })
      .join('')
  }
}

const abc = 'abcdefghijklmnopqrstuvwxyz'
const key = 'password'
const c = new VigenèreCipher(key, abc)

c.encode('codewars')
c.decode('rovwsoiv')
c.encode('waffles')
c.decode('laxxhsj')
c.encode('CODEWARS')
c.decode('CODEWARS')
