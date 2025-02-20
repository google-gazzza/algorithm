// [JS][7kyu] Uglify Word
// uglify-word
// https://www.codewars.com/kata/5ce6cf94cb83dc0020da1929/train/javascript

const uglifyWord = (s) => {
  let flag = 1
  return s
    .split('')
    .map((char) => {
      if (char.match(/[a-z]/i)) {
        if (flag === 1) {
          char = char.toUpperCase()
          flag = 0
        } else {
          char = char.toLowerCase()
          flag = 1
        }
      } else {
        flag = 1
      }
      return char
    })
    .join('')
}

uglifyWord('aaa') === 'AaA'
uglifyWord('AAA') === 'AaA'
uglifyWord('BbB') === 'BbB'
uglifyWord('aaa-bbb-ccc') === 'AaA-BbB-CcC'
uglifyWord('AaA-BbB-CcC') === 'AaA-BbB-CcC'
uglifyWord('eeee-ffff-gggg') === 'EeEe-FfFf-GgGg'
uglifyWord('EeEe-FfFf-GgGg') === 'EeEe-FfFf-GgGg'
uglifyWord('qwe123asdf456zxc') === 'QwE123AsDf456ZxC'
uglifyWord('Hello World') === 'HeLlO WoRlD'
