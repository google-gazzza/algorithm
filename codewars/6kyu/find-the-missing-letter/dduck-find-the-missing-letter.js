// find-the-missing-letter
// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript

const findMissingLetter = (array) => array.reduce((acc, cur, i, arr) => {
  if (acc.charCodeAt() + 1 === cur.charCodeAt()) {
    return cur;
  } else {
    const result = acc.charCodeAt() + 1;
    arr.splice(0);
    return String.fromCharCode(result);
  }
}, String.fromCharCode(array[0].charCodeAt() - 1));

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']), 'e');
console.log(findMissingLetter(['O', 'Q', 'R', 'S']), 'P');
