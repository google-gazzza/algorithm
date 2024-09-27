// leetcode/medium/2757. Generate Circular Array Values
// 2757-generate-circular-array-values
// URL: https://leetcode.com/problems/generate-circular-array-values/description/


function* cycleGenerator(arr: number[], startIndex: number): Generator<number, void, number> {
  let nextIndex = startIndex + arr.length;
  let indexDistance = 0;

  while (true) {
    indexDistance = yield arr[nextIndex % arr.length];

    if (indexDistance === undefined) {
      indexDistance = 0;
    }

    if (indexDistance >= 0) {
      nextIndex = nextIndex + indexDistance;
    } else {
      const convertedValue = (Math.abs(indexDistance) % arr.length);
      nextIndex = (nextIndex - convertedValue + arr.length) % arr.length;
    }
  }
}


let arr = [245, 141];
let startIndex = 1;

const gen = cycleGenerator(arr, startIndex);
gen.next().value;   // 11, index = 1
// 141
gen.next(-1).value;  // 12, index = 2
// 245
gen.next(-1).value;  // 12, index = 2
// 141
gen.next(-1).value;  // 12, index = 2
// 245
gen.next(-1).value;  // 12, index = 2
// 141
gen.next(-1).value;  // 12, index = 2
// 245
gen.next(0).value;  // 10, index = 0
// 245
gen.next(1).value; // 15, index = 5
// 141
gen.next(1).value; // 12, index = 2
// 24
