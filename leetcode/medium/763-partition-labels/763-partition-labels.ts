/*
763-partition-labels
leetcode/medium/763. Partition Labels
URL: https://leetcode.com/problems/partition-labels/

NOTE: Description

NOTE: Constraints
  - 1 <= s.length <= 500
  - s consists of lowercase English letters.

NOTE: Explanation
*/

function partitionLabels(s: string): number[] {
  let partition = [[s[0]], s.slice(1).split('')];
  const result = [];

  while (partition[1].length > 0) {
    for (let i = 0; i < partition[0].length; i += 1) {
      const lastIndex = partition[1].lastIndexOf(partition[0][i]);
      if (lastIndex !== -1) {
        partition[0].push(...partition[1].splice(0, lastIndex + 1));
      }
    }
    result.push(partition.shift());

    partition = [[partition[0][0]], partition[0].slice(1)];
  }

  if (partition[0][0]) {
    result.push(partition[0]);
  }

  return result.map((e: string): number => e.length);
}

let s = 'ababcbacadefegdehijhklij';
console.log(partitionLabels(s));
// Output: [9,7,8]

s = 'eccbbbbdec';
console.log(partitionLabels(s));
// Output: [10]

s = 'eaaaabaaec';
console.log(partitionLabels(s));

s = 'qvmwtmzzse';
// s = 'q v mwtm zz s e'
console.log(partitionLabels(s));
