// [JS][7kyu] String doubles
// string-doubles
// https://www.codewars.com/kata/5a145ab08ba9148dd6000094/train/javascript

const doubles = (s) => {
  const sLen = s.length
  if (sLen === 0) {
    return ''
  }

  const stack = []
  for (const now of s) {
    if (stack.length > 0 && stack[stack.length - 1] === now) {
      stack.pop()
    } else {
      stack.push(now)
    }
  }
  return stack.join('')
}

// doubles('abba') === ''
// doubles('abbbzz') === 'ab'
// doubles('zzzzykkkd') === 'ykd'
// doubles('abbcccdddda') === 'aca'
// doubles('vvvvvoiiiiin') === 'voin'
// doubles('rrrmooomqqqqj') === 'rmomj'
// doubles('xxbnnnnnyaaaaam') === 'bnyam'
