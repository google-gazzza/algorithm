// https://leetcode.com/problems/unique-morse-code-words/

// Runtime: 52 ms, faster than 96.85% of JavaScript online submissions for Unique Morse Code Words.
//   Memory Usage: 35.9 MB, less than 33.33% of JavaScript online submissions for Unique Morse Code Words.
// Runtime: 60 ms, faster than 70.58% of JavaScript online submissions for Unique Morse Code Words.
//   Memory Usage: 36.2 MB, less than 27.78% of JavaScript online submissions for Unique Morse Code Words.
// Runtime: 64 ms, faster than 52.71% of JavaScript online submissions for Unique Morse Code Words.
//   Memory Usage: 35.9 MB, less than 33.33% of JavaScript online submissions for Unique Morse Code Words.

const morseMap = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  x: '-..-',
  y: '-.--',
  z: '--..',
};

const uniqueMorseRepresentations = (words) => {
  const set = new Set();
  words.forEach((word) => set.add(word.split('').map((char) => morseMap[char]).join('')));
  return set.size;
};


uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg']);
//?

// Input: words = ['gin', 'zen', 'gig', 'msg']
// Output: 2
// 'gin' -> '--...-.'
// 'zen' -> '--...-.'
// 'gig' -> '--...--.'
// 'msg' -> '--...--.'
