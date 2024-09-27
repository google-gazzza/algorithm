/*
all-inclusive

# codewars/7kyu/All Inclusive?
Difficulty: 7kyu
URL: https://www.codewars.com/kata/5700c9acc1555755be00027e/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function containAllRots(str, arr) {
  const strArr = [...str];
  
  for (let i = 0; i < str.length; i += 1) {
    strArr.push(strArr.shift());
    
    if (arr.indexOf(strArr.join('')) === -1) {
      return false;
    }
  }
  
  return true;
}

// test
console.log(containAllRots('', []), true);
console.log(containAllRots('', ['bsjq', 'qbsj']), true);
console.log(containAllRots('bsjq', ['bsjq', 'qbsj', 'sjqb', 'twZNsslC', 'jqbs']), true);
console.log(containAllRots('XjYABhR', ['TzYxlgfnhf', 'yqVAuoLjMLy', 'BhRXjYA', 'YABhRXj', 'hRXjYAB', 'jYABhRX', 'XjYABhR', 'ABhRXjY']), false);
