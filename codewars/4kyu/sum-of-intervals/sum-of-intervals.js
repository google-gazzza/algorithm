/*
sum-of-intervals

# codewars/4kyu/Sum of Intervals
Difficulty: 4kyu
URL: https://www.codewars.com/kata/52b7ed099cdc285c300001cd

## Approach

### en

### kr

## Solution
### JavaScript

*/

function sumIntervals(intervals) {
  let result = [];
  
  for (let i = 0; i < intervals.length; i += 1) {
    let mergeCandidate = [];
    let isMatched = false;
    
    // for overwrap check
    result = result.filter((e) => {
      // is interval value between element
      if (e[0] <= intervals[i][0] && intervals[i][1] <= e[1]) {
        isMatched = true;
        mergeCandidate.push(e);
        return false;
      }
      
      // one side overwrap
      if ((e[0] <= intervals[i][0] && intervals[i][0] <= e[1])
        || (e[0] <= intervals[i][1] && intervals[i][1] <= e[1])) {
        mergeCandidate.push(e);
        isMatched = true;
        return false;
      }
      
      // is element value between interval
      if (intervals[i][0] <= e[0] && e[1] <= intervals[i][1]) {
        mergeCandidate.push(e);
        isMatched = true;
        return false;
      }
      
      return true;
    });
    
    if (!isMatched) {
      result.push(intervals[i]);
    } else {
      mergeCandidate.push(intervals[i]);
      const min = Math.min(...mergeCandidate.map((e) => e[0]));
      const max = Math.max(...mergeCandidate.map((e) => e[1]));
      mergeCandidate = [];
      
      result.push([min, max]);
    }
  }
  
  return result.reduce((acc, cur) => acc + (cur[1] - cur[0]), 0);
}

// test
var test1 = [[1, 5]];
var test2 = [[1, 5], [6, 10]];
console.log(sumIntervals(test1), 4);
console.log(sumIntervals(test2), 8);
var test1 = [[1, 5], [1, 5]];
var test2 = [[1, 4], [7, 10], [3, 5]];
console.log(sumIntervals(test1), 4);
console.log(sumIntervals(test2), 7);

const array1 = [[-11, 11],
  [279, 407],
  [402, 494],
  [-112, -6],
  [127, 265],
  [-422, 246],
  [-348, 178],
  [122, 127],
  [338, 441],
  [-192, 21],
  [176, 254],
  [-310, 462],
  [-398, -153],
  [-457, -428],
  [330, 407],
  [-476, 494],
  [131, 487],
  [-77, -14],
  [362, 476]];
console.log(sumIntervals(array1), 970);

// clever practice
function sumIntervals(intervals){
  var numbers = [];
  intervals.forEach( function(interval) {
    for (var i = interval[0] ; i < interval[1] ; i++) {
      if (numbers.indexOf(i) == -1) numbers.push(i);
    }
  });
  return numbers.length;
}
