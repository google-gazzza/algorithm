// [JS][7kyu] Left$$ and Right$$
// left-and-right
// https://www.codewars.com/kata/53f211b159c3fcec3d000efa/train/javascript

const left$ = (str, i) => {
  const strLen = str.length
  let index = i
  if (i === undefined) {
    index = 1
  } else if (typeof i === 'string') {
    index = str.indexOf(i)
  } else if (index < 0) {
    index = strLen + i
  }

  return str.substring(0, index)
}

const getReverseString = (str) => str.split('').reverse().join('')

const right$ = (str, i) => {
  if (typeof i === 'string') {
    return getReverseString(left$(getReverseString(str), getReverseString(i)))
  }
  return getReverseString(left$(getReverseString(str), i))
}

text = 'Hello (not so) cruel World!'

// ##== with integer as 2nd argument ==
left$(text, 5)
left$(text, -22)
left$(text, 1)
left$(text)
left$(text, 0)
left$(text, 99)

right$(text, 6)
right$(text)

// #== with string as 2nd argument ==
left$(text, 'o')
right$(text, 'o')
left$(text, ' ')
left$(text, 'xyz')
