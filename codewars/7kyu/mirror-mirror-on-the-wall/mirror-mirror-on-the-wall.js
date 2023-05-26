/*
mirror-mirror-on-the-wall

# mirror, mirror, on the wall...
difficulty: 7kyu
url: https://www.codewars.com/kata/5f55ecd770692e001484af7d

<br>

## approach

### en

1. deep copy trough slice(0) and sort by acending
2.
  2-1 deep copy process-1 and slice 0 to length-1 and reverse
  2-2 return concat process-1, process-2-1

### kr

1. slice(0)_를 통해 deep copy를 한 후 sort by acending을 합니다.
2.
  2-1 process-1을 딥카피 한후 0 -> length-1만큼 slice하고, reverse로 뒤집습니다.
  2-2 process-1, process-2-1을 concat하여 리턴합니다.
 
 */

function mirror(data) {
  const sortedarray = data.slice(0).sort((a, b) => a - b);
  return sortedarray.concat(sortedarray.slice(0, -1).reverse());
}

const fixed_tests = [
  { input: [], expected: [] },
  { input: [1], expected: [1] },
  { input: [2, 1], expected: [1, 2, 1] },
  { input: [2, 3, 1], expected: [1, 2, 3, 2, 1] },
  { input: [-8, 42, 18, 0, -16], expected: [-16, -8, 0, 18, 42, 18, 0, -8, -16] },
];

for (const testcase of fixed_tests) {
  const { input, expected } = testcase;
  console.log(mirror(input), expected);
}
