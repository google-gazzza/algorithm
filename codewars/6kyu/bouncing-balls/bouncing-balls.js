/*
bouncing-balls

# codewars/6kyu/Bouncing Balls
Difficulty: 6kyu
URL: https://www.codewars.com/kata/566be96bb3174e155300001b
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

const bouncingBall = (h, bounce, window) => {
  if (h < 0) {
    return -1;
  }
  if (bounce < 0 || 1 < bounce) {
    return -1;
  }
  if (h < window) {
    return -1;
  }
  
  if ((Math.log(window / h) / Math.log(bounce)) === 1) {
    return 1;
  }
  if ((Math.log(window / h) / Math.log(bounce)) < 1) {
    return -1;
  }
  
  return Math.floor(Math.log(window / h) / Math.log(bounce)) * 2 + 1;
};

// test
console.log(bouncingBall(3.0, 0.66, 1.5), 3);
console.log(bouncingBall(30.0, 0.66, 1.5), 15);
console.log(bouncingBall(2, 0.5, 1), 1);
console.log(bouncingBall(10, 0.6, 10), -1);
console.log(bouncingBall(40, 1, 10), -1);
