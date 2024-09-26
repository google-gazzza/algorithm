// [JS][6kyu] Multi-tap Keypad Text Entry on an Old Mobile Phone
// multi-tap-keypad-text-entry-on-an-old-mobile-phone
// https://www.codewars.com/kata/54a2e93b22d236498400134b/train/javascript

const set1 = new Set(['A', 'D', 'G', 'J', 'M', 'P', 'T', 'W', ' ', '1'])
const set2 = new Set(['B', 'E', 'H', 'K', 'N', 'Q', 'U', 'X', '0'])
const set3 = new Set(['C', 'F', 'I', 'L', 'O', 'R', 'V', 'Y'])
const set4 = new Set(['S', 'Z', '2', '3', '4', '5', '6', '8'])

const presses = (phrase) => {
  return phrase
    .split('')
    .map((char) => char.toUpperCase())
    .reduce((acc, cur) => {
      if (set1.has(cur)) {
        return acc + 1
      } else if (set2.has(cur)) {
        return acc + 2
      } else if (set3.has(cur)) {
        return acc + 3
      } else if (set4.has(cur)) {
        return acc + 4
      } else {
        return acc + 5
      }
    }, 0)
}

presses('LOL') === 9
presses('HOW R U') === 13
presses('WHERE DO U WANT 2 MEET L8R') === 47
