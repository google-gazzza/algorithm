// uniq-unix-style
// https://www.codewars.com/kata/52249faee9abb9cefa0001ee

const uniq = (a, result = []) => {
  const arr = a.slice();
  while (arr.length) {
    const target = arr.shift();
    result.push(target);
    
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] === target) {
        arr.shift();
        i -= 1;
      } else {
        break;
      }
    }
  }
  
  return result;
};

uniq(['a', 'a', 'a', 'b', 'b', 'b', 'c', 'c', 'c']);
// ?
// input array should return the ['a','b','c'] output array - Expected: ['a', 'b', 'c'], instead got: ['a', 'b', 'c', 'c']

const input = ['a', 'a', 'b', 'b', 'c', 'a', 'b', 'c', 'c'];
const x = uniq(input);
// ?
console.log(x, ['a', 'b', 'c', 'a', 'b', 'c']);
// "the ['a','a','b','b','c','a','b','c','c'] input array should return the ['a','b','c','a','b','c'] output array");
