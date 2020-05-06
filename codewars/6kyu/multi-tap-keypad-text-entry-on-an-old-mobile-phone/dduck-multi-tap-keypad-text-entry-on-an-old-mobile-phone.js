// multi-tap-keypad-text-entry-on-an-old-mobile-phone
// https://www.codewars.com/kata/54a2e93b22d236498400134b/javascript

const keyPressMap = {
  '1': 1, 'A': 1, 'B': 2, 'C': 3, '2': 4, 'D': 1, 'E': 2, 'F': 3, '3': 4, 'G': 1, 'H': 2, 'I': 3, '4': 4,
  'J': 1, 'K': 2, 'L': 3, '5': 4, 'M': 1, 'N': 2, 'O': 3, '6': 4, 'P': 1, 'Q': 2, 'R': 3, 'S': 4, '7': 5,
  'T': 1, 'U': 2, 'V': 3, '8': 4, 'W': 1, 'X': 2, 'Y': 3, 'Z': 4, '9': 5, ' ': 1, '0': 2, '*': 1, '#': 1,
};

const presses = (phrase) => [...phrase.toUpperCase()].reduce((a, c) => a + keyPressMap[c], 0);


console.log(presses("1"), 1);
console.log(presses("IS NE1 OUT THERE"), 31);
console.log(presses("LOL"), 9, "should work for simple examples");
console.log(presses("HOW R U"), 13, "should work for phrases with spaces");
