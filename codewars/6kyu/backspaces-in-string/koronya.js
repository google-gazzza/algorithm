// [JS][6kyu] Backspaces in string
// backspaces-in-string
// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript

const cleanString = (s) => {
  return s
    .split('')
    .reduce((acc, cur) => {
      if (cur === '#') {
        acc.pop()
      } else {
        acc.push(cur)
      }
      return acc
    }, [])
    .join('')
}

cleanString('abc#d##c')

// cleanString('abc#d##c') === 'ac'
// cleanString('abc####d##c#') === ''
