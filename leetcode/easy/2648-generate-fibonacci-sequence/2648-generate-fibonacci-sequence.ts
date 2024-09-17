// leetcode/easy/2648. Generate Fibonacci Sequence
// 2648-generate-fibonacci-sequence
// URL: https://leetcode.com/problems/generate-fibonacci-sequence/description/
//
// NOTE: Description
// NOTE: Constraints
// NOTE: Explanatin
// NOTE: Reference

function* fibGenerator(): Generator<number, any, number> {
  let previous = 0;
  let cur = 1;

  while (true) {
    yield previous;
    [cur, previous] = [previous, cur + previous];
  }
}

const gen = fibGenerator();
gen.next().value; // 0
gen.next().value; // 1
gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3
/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
