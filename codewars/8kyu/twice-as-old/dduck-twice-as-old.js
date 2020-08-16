// twice-as-old
// Twice as old
// difficulty: 8kyu
// https://www.codewars.com/kata/5b853229cfde412a470000d0
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/twice-as-old

const twiceAsOld = (dadYearsOld, sonYearsOld) => Math.abs((dadYearsOld - sonYearsOld) - sonYearsOld);



console.log(twiceAsOld(36, 7), 22);
console.log(twiceAsOld(55, 30), 5);
console.log(twiceAsOld(42, 21), 0);
console.log(twiceAsOld(22, 1), 20);
console.log(twiceAsOld(29, 0), 29);
