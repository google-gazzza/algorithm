// [JS][7kyu] You Complete Me
// you-complete-me
// https://www.codewars.com/kata/63967eb85e54bd00237d2201/train/javascript

const getReverseString = (str) => str.split('').reverse().join('')
const isSameCharString = (str) => new Set(str.split('')).size === 1

const complete = (str) => {
  if (isSameCharString(str)) {
    return str + str[0]
  }
  const strLength = str.length
  const reverseStr = getReverseString(str)

  let sameIndex = 0
  for (let i = 0; i < strLength; i += 1) {
    str.slice(i)
    reverseStr.slice(0, strLength - i)
    if (str.slice(i) === reverseStr.slice(0, strLength - i)) {
      sameIndex = i
      break
    }
  }

  const appendStr = sameIndex === 0 ? str.slice(1) : getReverseString(str.slice(0, sameIndex))
  return str + appendStr
}

// complete('Baa') === 'BaaB'
// complete('aaB') === 'aaBaa'
// complete('x') === 'xx'
// complete('aaBB') === 'aaBBaa'
// complete('aOOa') === 'aOOaOOa'
// complete('xyz') === 'xyzyx'
// complete('AaaaA') === 'AaaaAaaaA'
// complete('abab') === 'ababa'
// complete('bbbbbbbbbbbbb')
