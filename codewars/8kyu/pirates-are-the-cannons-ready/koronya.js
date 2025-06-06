// [JS][8kyu] Pirates!! Are the Cannons ready!??
// pirates-are-the-cannons-ready
// https://www.codewars.com/kata/5748a883eb737cab000022a6/train/javascript

const cannonsReady = (gunners) => (Object.values(gunners).every((gunner) => gunner === 'aye') ? 'Fire!' : 'Shiver me timbers!')

cannonsReady({ Mike: 'aye', Joe: 'aye', Johnson: 'aye', Peter: 'aye' })
cannonsReady({ Mike: 'aye', Joe: 'nay', Johnson: 'aye', Peter: 'aye' })
