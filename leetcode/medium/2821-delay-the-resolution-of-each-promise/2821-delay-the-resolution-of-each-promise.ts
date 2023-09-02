// leetcode/easy/2821. Delay the Resolution of Each Promise
// 2821-delay-the-resolution-of-each-promise
// URL: https://leetcode.com/problems/delay-the-resolution-of-each-promise/

function memLeak(memory1: number, memory2: number): number[] {
  let i = 1;

  while (memory1 >= i || memory2 >= i) {
    if (memory1 >= memory2) {
      memory1 -= i;
    } else {
      memory2 -= i;
    }
    i++;
  }

  return [i, memory1, memory2];
}

let memory1 = 2;
let memory2 = 2;
console.log(memLeak(memory1, memory2));
// Output: [3,1,0]

memory1 = 8;
memory2 = 11;
console.log(memLeak(memory1, memory2));
// Output: [6,0,4]
