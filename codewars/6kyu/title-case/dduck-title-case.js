// title case
// https://www.codewars.com/kata/5202ef17a402dd033c000009

const titleCase = (title = '', minorWords = '') => {
  const exceptions = minorWords.toLowerCase().split(' ');
  const result = title.toLowerCase().split(' ').map((v) => {
    return exceptions.some((exceptionWord) => v === exceptionWord) ? v : v[0].toUpperCase() + v.slice(1);
  }).join(' ');
  return result ? result[0].toUpperCase() + result.slice(1) : '';
};

console.log(titleCase(''), '');
console.log(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings');
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows');
console.log(titleCase('the quick brown fox'), 'The Quick Brown Fox');
