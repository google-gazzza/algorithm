// Bouncing Balls
// https://www.codewars.com/kata/5544c7a5cb454edb3c000047/

const bouncingBall = (h, bounce, window, count = 0) => {
  if (!h || !(bounce < 1 && bounce > 0) || window >= h) {
    return -1;
  }
  return h * bounce > window ? bouncingBall(h * bounce, bounce, window, count + 2) : count + 1;
};

console.log(bouncingBall(2, 0.5, 1), 1);
console.log(bouncingBall(3.0, 0.66, 1.5), 3);
console.log(bouncingBall(30.0, 0.66, 1.5), 15);
