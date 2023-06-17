// leetcode/easy/2665. Counter II
// 2665-counter-ii
// URL: https://leetcode.com/problems/counter-ii/description/
//
// NOTE: Description
// NOTE: Constraints
// NOTE: Explanatin
// NOTE: Reference

type ReturnObj = {
  increment: () => number,
  decrement: () => number,
  reset: () => number,
};

function createCounter(init: number): ReturnObj {
  this.value = init;

  return {
    increment: () => this.value += 1,
    decrement: () => this.value -= 1,
    reset: () => this.value = init,
  };
};

const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
