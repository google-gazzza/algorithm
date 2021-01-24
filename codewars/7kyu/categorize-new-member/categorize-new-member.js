/*
categorize-new-member

# codears/7kyu/Categorize New Member
Difficulty: 7kyu
URL:https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/

## Approach

### en

### kr

## Solution
### JavaScript

*/

function openOrSenior(data) {
  return data.map((e) => {
    if (55 <= e[0] && (7 < e[1])) {
      return 'Senior';
    }
    return 'Open';
  });
}

console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]), ['Open', 'Senior', 'Open', 'Senior']);
console.log(openOrSenior([[3, 12], [55, 1], [91, -2], [54, 23]]), ['Open', 'Open', 'Open', 'Open']);
console.log(openOrSenior([[59, 12], [55, -1], [12, -2], [12, 12]]), ['Senior', 'Open', 'Open', 'Open']);
