// [JS][6kyu] ASCII hex converter
// ascii-hex-converter
// https://www.codewars.com/kata/52fea6fd158f0576b8000089/train/javascript

const Converter = {
  toAscii: function (hex) {
    const hexLen = hex.length
    const result = []
    for (let i = 0; i < hexLen; i += 2 || 0) {
      const str = hex.substring(i, i + 2)
      result.push(parseInt(str, 16))
    }
    return result.map((item) => String.fromCharCode(item)).join('')
  },
  toHex: function (ascii) {
    return ascii
      .split('')
      .map((item) => item.charCodeAt(0))
      .map((item) => item.toString(16))
      .join('')
  },
}

// Converter.toAscii('Look')
Converter.toAscii('Look mom, no hands') === '4c6f6f6b206d6f6d2c206e6f2068616e6473'
Converter.toHex('4c6f6f6b206d6f6d2c206e6f2068616e6473')

str = 'Look mom, no hands'
hex = '4c6f6f6b206d6f6d2c206e6f2068616e6473'

Converter.toHex(str) === hex
Converter.toAscii(hex) === str

Converter.toHex(Converter.toAscii(hex)) === hex
Converter.toAscii(Converter.toHex(str)) === str
