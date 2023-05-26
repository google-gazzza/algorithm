// evil-autocorrect-prank
// Evil Autocorrect Prank
// difficulty: 6kyu
// https://www.codewars.com/kata/538ae2eb7a4ba8c99b000439

const autocorrect = (input) => input.split(' ')
  .map((e) => e.replace(/(^|\s)(you+|u)([^a-z]|\s|$)/gi, '$1your sister$3'))
  .join(' ')
  .trim();

autocorrect(' you know U me ');
//?
autocorrect('I miss you!');
//?
// Expected: 'I miss your sister!', instead got: 'I miss you!'


