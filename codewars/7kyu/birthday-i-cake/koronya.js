// [JS][7kyu] Birthday I - Cake
// birthday-i-cake
// https://www.codewars.com/kata/5805ed25c2799821cb000005/train/javascript

const KEYCODE_OF_LOWER_A = 'a'.charCodeAt(0)
const indexOfChar = (char) => char.charCodeAt(0) - KEYCODE_OF_LOWER_A + 1
const getScore = (char, index) => (index % 2 === 0 ? char.charCodeAt(0) : indexOfChar(char))

const cake = (x, y) => {
  const total = y.split('').reduce((acc, curr, index) => acc + getScore(curr, index), 0)
  return total > x * 0.7 ? 'Fire!' : 'That was close!'
}

// cake(900, 'abcdef') === 'That was close!'
// cake(56, 'ifkhchlhfd') === 'Fire!'
// cake(256, 'aaaaaddddr') === 'Fire!'
