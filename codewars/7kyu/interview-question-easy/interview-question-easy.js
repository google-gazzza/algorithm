/*
interview-question-easy

# codewars/7kyu/Interview Question (easy)
Difficulty: 7kyu
URL: https://www.codewars.com/kata/5b358a1e228d316283001892/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function getStrings(city) {
  return Object.entries([...city].reduce((acc, cur) => {
    if (cur !== ' ') {
      acc[cur.toLowerCase()] = (acc[cur.toLowerCase()] || 0) + 1;
    }
    return acc;
  }, {}))
    .map((e) => `${e[0]}:${'*'.repeat(e[1])}`)
    .join(',');
}

// test
console.log(getStrings('Chicago'), 'c:**,h:*,i:*,a:*,g:*,o:*');
console.log(getStrings('Bangkok'), 'b:*,a:*,n:*,g:*,k:**,o:*');
console.log(getStrings('Las Vegas'), 'l:*,a:**,s:**,v:*,e:*,g:*');
