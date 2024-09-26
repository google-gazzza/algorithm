/*
937-reorder-data-in-log-files

# leetcode/easy/937. Reorder Data in Log Files
Difficulty: easy
URL: https://leetcode.com/problems/reorder-data-in-log-files/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  let stringLogs = [];
  let numberLogs = [];
  
  logs.forEach((e) => {
    if (Number.isInteger(Number(e.split(' ')[1]))) {
      numberLogs.push(e);
    } else {
      stringLogs.push(e);
    }
  });
  
  stringLogs.sort((next, cur) => {
    const nextArr = next.split(' ');
    const curArr = cur.split(' ');
    
    for (let i = 1; i < curArr.length; i += 1) {
      if (!nextArr[i]) {
        return -1;
      }
      if (nextArr[i] !== curArr[i]) {
        return nextArr[i].localeCompare(curArr[i]);
      }
    }
    
    return nextArr[0].localeCompare(curArr[0]);
  });
  
  
  return stringLogs.concat(numberLogs);
};

test('reorderLogFiles', () => {
  expect(reorderLogFiles(["dig1 8 1 5 1", "let1 art can", "dig2 3 6", "let2 own kit dig", "let3 art zero"]))
    .toEqual(["let1 art can", "let3 art zero", "let2 own kit dig", "dig1 8 1 5 1", "dig2 3 6"]);
});
