// [JS][7kyu] C.Wars
// c-wars
// https://www.codewars.com/kata/55968ab32cf633c3f8000008/train/javascript

const initials = (n) => {
  const arr = n.split(' ')
  const arrLen = arr.length
  return n
    .split(' ')
    .map((word, index) => (index === arrLen - 1 ? word.charAt(0).toUpperCase() + word.slice(1) : word.charAt(0).toUpperCase() + '.'))
    .join('')
}

initials('code wars') === 'C.Wars'
initials('Barack hussain obama') === 'B.H.Obama'
initials('barack hussain Obama') === 'B.H.Obama'
