// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

const duplicateCount = (text) => {
  const lowerCaseText = text.toLowerCase();
  const map = new Map([...new Set(lowerCaseText)].map((v) => [v, 0]));
  lowerCaseText.split('').forEach((v) => {
    map.set(v, map.get(v) + 1);
  });
  return [...map.values()].filter((v) => v > 1).length;
};

console.log(duplicateCount(''), 0);
console.log(duplicateCount('abcde'), 0);
console.log(duplicateCount('aabbcde'), 2);
console.log(duplicateCount('aabBcde'), 2, 'should ignore case');
console.log(duplicateCount('Indivisibility'), 1);
console.log(duplicateCount('Indivisibilities'), 2, 'characters may not be adjacent');
