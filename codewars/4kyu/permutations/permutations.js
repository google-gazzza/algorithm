// permutations
// Permutations
// difficulty: 4kyu
// https://www.codewars.com/kata/5254ca2719453dcc0b00027d/

function getPermutations(string, prefix = []) {
  if (string.length <= 1) {
    return [...prefix, ...string];
  }
  
  let result = [...string].map((e, i) => {
    const str = [...string];
    const temp = [...prefix, str[i]];
    str.splice(i, 1);
    
    return getPermutations(str, temp).map((e2) => {
      return e2;
    });
  });
  
  if (Array.isArray(result[0][0])) {
    result = result.reduce((acc, cur) => acc.concat(cur), []);
  }
  
  return result;
}

function permutations(string) {
  if (string.length <= 1) {
    return [string];
  }
  
  const permutation = getPermutations(string).map((e) => e.join(''));
  
  return [...(new Set(permutation).values())];
}

console.log(permutations('a'), ['a']);
console.log(permutations('ab').sort(), ['ab', 'ba'].sort());
console.log(permutations('acc'));
console.log(permutations('aabb').sort(), ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort());
