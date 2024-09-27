// berlin-clock
// Berlin Clock
// https://www.codewars.com/kata/5a1463678ba9145a670000f9
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/6kyu/berlin-clock

const convertToUnit = (arraySize, value) => new Array(arraySize).fill(0)
  .map((v, i) => i < value);

const berlinClock = (time) => {
  const [hh, mm, ss] = time.split(':').map(Number);
  
  return [
    ss % 2 === 0 ? ['Y'] : ['O'],
    convertToUnit(4, Math.floor(hh / 5))
      .map((v) => v ? 'R' : 'O'),
    convertToUnit(4, hh % 5)
      .map((v) => v ? 'R' : 'O'),
    convertToUnit(11, Math.floor(mm / 5))
      .map((v, i) => v ? (i % 3 !== 2 ? 'Y' : 'R') : 'O'),
    convertToUnit(4, mm % 5)
      .map((v) => v ? 'Y' : 'O'),
  ].map((v) => v.join(''))
    .join('\n');
};


console.log(berlinClock("12:56:01"), "O\nRROO\nRROO\nYYRYYRYYRYY\nYOOO");
console.log(berlinClock("00:00:00"), "Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
console.log(berlinClock("22:32:45"), "O\nRRRR\nRROO\nYYRYYROOOOO\nYYOO");
