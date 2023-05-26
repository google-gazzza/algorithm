// where-my-anagrams-at
// Where my anagrams at?
// difficulty: 5kyu
// https://www.codewars.com/kata/523a86aa4230ebb5420001e1

const countCharacters = (word) => Object.entries([...word].reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {}))
  .sort();

const anagrams = (word, words) => {
  const target = countCharacters(word);
  return words.filter((e) => JSON.stringify(countCharacters(e)) === JSON.stringify(target));
};


anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
//?
// => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']);
//?
// => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy', 'lacer']);
//?
// => [];
