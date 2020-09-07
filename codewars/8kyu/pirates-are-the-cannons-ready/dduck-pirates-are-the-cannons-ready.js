// pirates-are-the-cannons-ready
// Pirates!! Are the Cannons ready!??
// difficulty: 8kyu
// https://www.codewars.com/kata/5748a883eb737cab000022a6

const cannonsReady = (gunners) => Object.entries(gunners)
  .some((e) => e[1] === 'nay') ? 'Shiver me timbers!' : 'Fire!';




const a = { 'Mike': 'aye', 'Joe': 'aye', 'Johnson': 'aye', 'Peter': 'aye' };
const b = { 'Mike': 'aye', 'Joe': 'nay', 'Johnson': 'aye', 'Peter': 'aye' };

console.log(cannonsReady(a), 'Fire!');
console.log(cannonsReady(b), 'Shiver me timbers!');
