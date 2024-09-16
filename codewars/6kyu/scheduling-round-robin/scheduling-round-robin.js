/*
scheduling-round-robin

# codewars/6kyu/Scheduling (Round-Robin)
Difficulty: 6kyu
URL: https://www.codewars.com/kata/550cb646b9e7b565d600048a
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

function roundRobin(jobs, quanta, targetIndex, index = 0, sum = 0) {
  if (jobs[index] > quanta) {
    jobs[index] -= quanta;
    sum += quanta;
  } else {
    sum += jobs[index];
    jobs[index] = 0;
  }
  
  if (jobs[targetIndex] <= 0) {
    return sum;
  }
  
  return roundRobin(jobs, quanta, targetIndex, (index + 1) % jobs.length, sum);
}

// test
console.log(roundRobin([10], 4, 0), 10, 'roundRobin([10], 4, 0)');
console.log(roundRobin([10, 20, 1], 5, 0), 16, 'roundRobin([10, 20, 1], 5, 0)');
console.log(roundRobin([10, 20, 1, 2, 3], 4, 2)); // 9
console.log(roundRobin([24, 21, 13, 21], 22, 2)); // 56
