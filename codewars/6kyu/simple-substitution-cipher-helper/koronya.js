// [JS][6kyu] Simple Substitution Cipher Helper
// simple-substitution-cipher-helper
// https://www.codewars.com/kata/52eb114b2d55f0e69800078d/train/javascript

class SubstitutionCipher {
  constructor(abc1, abc2) {
    this.encodeMap = new Map()
    abc1.split('').forEach((item, index) => {
      this.encodeMap.set(item, abc2[index])
    })
    this.decodeMap = new Map()
    abc2.split('').forEach((item, index) => {
      this.decodeMap.set(item, abc1[index])
    })
  }

  encode(str) {
    return str
      .split('')
      .map((item) => this.encodeMap.get(item) || item)
      .join('')
  }
  decode(str) {
    return str
      .split('')
      .map((item) => this.decodeMap.get(item) || item)
      .join('')
  }
}

const abc1 = 'abcdefghijklmnopqrstuvwxyz'
const abc2 = 'etaoinshrdlucmfwypvbgkjqxz'
const sub = new SubstitutionCipher(abc1, abc2)

sub.encode('abc') // => "eta"
sub.encode('xyz') // => "qxz"
sub.encode('aeiou') // => "eirfg"

sub.decode('eta') // => "abc"
sub.decode('qxz') // => "xyz"
sub.decode('eirfg') // => "aeiou"
