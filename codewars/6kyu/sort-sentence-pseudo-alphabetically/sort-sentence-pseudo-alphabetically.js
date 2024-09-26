// sort-sentence-pseudo-alphabetically
// https://www.codewars.com/kata/52dffa05467ee54b93000712/

const sort = (sentence) => {
  const splitedWords = sentence.split(' ');
  const lowerWords = splitedWords.filter((v) => v[0].match(/[a-z]/)).sort();
  const upperWords = splitedWords.filter((v) => v[0].match(/[A-Z]/)).sort().reverse();
  
  return lowerWords.concat(upperWords).map((v) => v.replace(/\W/, '')).join(' ');
};

console.log(sort("I, habitan of the Alleghanies, treating of him as he is in himself in his own rights"));
console.log("as habitan he him himself his in in is of of own rights the treating I Alleghanies");
console.log(sort("take up the task eternal, and the burden and the lesson"));
console.log("and and burden eternal lesson take task the the the up");
console.log(sort("Land of the Old Thirteen! Massachusetts land! land of Vermont and Connecticut!"), "and land land of of the Vermont Thirteen Old Massachusetts Land Connecticut", "sentence may end with a punctuation");
console.log(sort("Pioneers, O Pioneers!"), "Pioneers Pioneers O", "sentence may end with a punctuation");
