// [JS][8kyu] Contamination #1 -String-
// contamination-1-string
// https://www.codewars.com/kata/596fba44963025c878000039/train/javascript

const contamination = (text, char) => {
  if (text === '' || char === '') {
    return ''
  }
  return char.repeat(text.length)
}

contamination('abc', 'z') === 'zzz'
contamination('', 'z') === ''
contamination('abc', '') === ''
contamination('_3ebzgh4', '&') === '&&&&&&&&'
contamination('//case', ' ') === '      '
