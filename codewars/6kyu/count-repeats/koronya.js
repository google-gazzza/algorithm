// [JS][6kyu] Count Repeats
// count-repeats
// https://www.codewars.com/kata/598ee7b6ec6cb90dd6000061/train/javascript

const countRepeats = (str) => {
    let prev = ''
    let count = 0
    str.split('').forEach((char, index) => {
      if (index === 0 || prev !== char) {
        prev = char
      } else {
        count += 1
      }
    })
    return count
  }
  
  countRepeats('AABCCD') === 2
  countRepeats('AABCCDA') === 2
  countRepeats('AaBBCCC') === 3
  