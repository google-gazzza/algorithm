// [JS][7kyu] Clothes size number converter
// clothes-size-number-converter
// https://www.codewars.com/kata/667dfbaa4570b2db26aedc8c/train/javascript

const sizeToNumber = (size) => {
  switch (size) {
    case 's':
      return 36
    case 'm':
      return 38
    case 'l':
      return 40
    default:
      const lastChar = size.slice(-1)
      const xCount = size.split('').filter((x) => x === 'x').length
      const onlyX = xCount === size.length - 1
      if (!onlyX) {
        return null
      }
      if (lastChar === 's') {
        return 36 - xCount * 2
      } else if (lastChar === 'l') {
        return 40 + xCount * 2
      }
      return null
  }
}

sizeToNumber('s') === 36
sizeToNumber('m') === 38
sizeToNumber('l') === 40
sizeToNumber('xl') === 42
sizeToNumber('xs') === 34
sizeToNumber('xxxs') === 30
sizeToNumber('xxxl') === 46
sizeToNumber('')
sizeToNumber('xm')
sizeToNumber('xxxm')
sizeToNumber('xxxx')
sizeToNumber('ssss')
sizeToNumber('hello world')
sizeToNumber('sm')
sizeToNumber('ml')
sizeToNumber('lm')
