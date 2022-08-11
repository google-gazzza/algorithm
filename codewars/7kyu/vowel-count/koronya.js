// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
// [JS][7kyu] Vowel Count
// vowel-count

const VOWEL_ARR = ["a", "e", "i", "o", "u"];

function getCount(str) {
  let count = 0;
  for (const s of str) {
    if (VOWEL_ARR.includes(s) === true) {
      count += 1;
    }
  }
  return count;
}

getCount("abracadabra") === 5;
