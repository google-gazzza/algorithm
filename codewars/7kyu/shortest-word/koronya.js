// [JS][7kyu] Shortest Word
// shortest-word
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

const findShort = (s) => s.split(' ').reduce((min, cur) => (min > cur.length ? cur.length : min), Number.MAX_SAFE_INTEGER)

findShort('bitcoin take over the world maybe who knows perhaps') === 3
findShort('turns out random test cases are easier than writing out basic ones') === 3
findShort("Let's travel abroad shall we") === 2
