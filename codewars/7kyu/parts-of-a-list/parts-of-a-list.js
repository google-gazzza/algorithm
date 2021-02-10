/*
parts-of-a-list

# codewars/7kyu/Parts of a list
Difficulty: 7kyu
URL: https://www.codewars.com/kata/56f3a1e899b386da78000732
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

const partlist = (arr) => {
  const result = [];
  const prefix = [];
  
  while (arr.length > 1) {
    prefix.push(arr.shift());
    result.push([prefix.join(' '), arr.join(' ')]);
  }
  
  return result;
};

// test
console.log(partlist(["I", "wish", "I", "hadn't", "come"]),
  [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]]);
console.log(partlist(["cdIw", "tzIy", "xDu", "rThG"]),
  [["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]]);
console.log(partlist(["vJQ", "anj", "mQDq", "sOZ"]),
  [["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]]);
