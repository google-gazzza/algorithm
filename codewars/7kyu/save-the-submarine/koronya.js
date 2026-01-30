// [JS][7kyu] Save the submarine
// save-the-submarine
// https://www.codewars.com/kata/64de4832c734e7036b455536/train/javascript

const getTask = (arr) => {
  const submarineDepth = arr.findIndex((row) => row.includes('('))
  const submarinStartIndex = arr[submarineDepth].indexOf('(')
  const submarineEndIndex = arr[submarineDepth].indexOf(')')
  const submarineWidth = submarineEndIndex - submarinStartIndex + 1
  const isSubmarineOnSurface = submarineDepth === 0
  const isSafeSubmarine = arr[submarineDepth].slice(submarinStartIndex + 1, submarineEndIndex).every((char) => char === 'O')

  if (!isSafeSubmarine) {
    return 'Emergency assistance to victims'
  }

  if (isSubmarineOnSurface) {
    return 'Look for a submarine on the surface'
  }

  if (submarineWidth < submarineDepth) {
    return `Emergency search for a possibly damaged submarine at ${submarineDepth} depth`
  }

  return `Start searching for a submarine at ${submarineDepth} depth`
}

getTask([['~', '(', 'O', ')', '~']])

getTask([
  ['~', '~', '~', '~', '~'],
  ['ˑ', 'ˑ', 'ˑ', 'ˑ', 'ˑ'],
  ['ˑ', '(', 'O', ')', 'ˑ'],
  ['ˑ', 'ˑ', 'ˑ', 'ˑ', 'ˑ'],
])

getTask([
  ['~', '~', '~', '~', '~'],
  ['ˑ', 'ˑ', 'ˑ', 'ˑ', 'ˑ'],
  ['ˑ', 'ˑ', 'ˑ', 'ˑ', 'ˑ'],
  ['ˑ', 'ˑ', 'ˑ', 'ˑ', 'ˑ'],
  ['ˑ', '(', 'O', ')', 'ˑ'],
])

getTask([
  ['~', '~', '~', '~', '~'],
  ['ˑ', '(', 'ˑ', ')', 'ˑ'],
  ['ˑ', 'ˑ', 'ˑ', 'ˑ', 'ˑ'],
  ['ˑ', 'ˑ', 'ˑ', 'ˑ', 'ˑ'],
])

getTask([
  ['~', '(', '~', '~', ')'],
  ['ˑ', 'ˑ', 'ˑ', 'ˑ', 'ˑ'],
])
