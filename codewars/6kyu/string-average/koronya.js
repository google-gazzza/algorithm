// [JS][6kyu] String average
// string-average
// https://www.codewars.com/kata/5966847f4025872c7d00015b/train/javascript

const getNumber = (str) => {
  switch (str) {
    case 'zero':
      return 0
    case 'one':
      return 1
    case 'two':
      return 2
    case 'three':
      return 3
    case 'four':
      return 4
    case 'five':
      return 5
    case 'six':
      return 6
    case 'seven':
      return 7
    case 'eight':
      return 8
    case 'nine':
      return 9
    default:
      return null
  }
}

const getString = (num) => {
  switch (num) {
    default:
    case 0:
      return 'zero'
    case 1:
      return 'one'
    case 2:
      return 'two'
    case 3:
      return 'three'
    case 4:
      return 'four'
    case 5:
      return 'five'
    case 6:
      return 'six'
    case 7:
      return 'seven'
    case 8:
      return 'eight'
    case 9:
      return 'nine'
  }
}

const averageString = (str) => {
  const strArr = str.split(' ')
  if (strArr.some((str) => getNumber(str) === null) || str === '') {
    return 'n/a'
  } else if (strArr.length === 1) {
    return str
  }
  return getString(Math.floor(strArr.reduce((acc, cur) => acc + getNumber(cur), 0) / strArr.length))
}

// averageString('zero nine five two') === 'four'
// averageString('four six two three') === 'three'
// averageString('one two three four five') === 'three'
// averageString('five four') === 'four'
// averageString('zero zero zero zero zero') === 'zero'
// averageString('one one eight one') === 'two'
// averageString('') === 'n/a'

averageString('five ddd aaa')
averageString('two ddd aaa')
