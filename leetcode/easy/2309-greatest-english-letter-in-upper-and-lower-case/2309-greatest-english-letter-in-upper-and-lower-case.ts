/*
2309-greatest-english-letter-in-upper-and-lower-case
leetcode/easy/2309. Greatest English Letter in Upper and Lower Case
URL: https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function greatestLetter(s: string): string {
  const lowerChars = s.split('')
    .filter((char) => char.toLowerCase() === char);
  const upperChars = s.split('')
    .filter((char) => char.toUpperCase() === char);
  const lowerSet: Set<string> = new Set(lowerChars);
  const candidate: string[] = [];

  for (let i = 0; i < upperChars.length; i += 1) {
    if (lowerSet.has(upperChars[i].toLowerCase())) {
      candidate.push(upperChars[i]);
    }
  }
  candidate.sort();

  return candidate.length ? candidate.pop() : '';
}

let s = 'lEeTcOdE';
console.log(greatestLetter(s));
// Output: "E"

s = 'arRAzFif';
console.log(greatestLetter(s));
// Output: "R"

s = 'AbCdEfGhIjK';
console.log(greatestLetter(s));
// Output: ""

s = '"nzmguNAEtJHkQaWDVSKxRCUivXpGLBcsjeobYPFwTZqrhlyOIfdM"';
console.log(greatestLetter(s));
// Z
