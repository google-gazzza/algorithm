/*
833-find-and-replace-in-string
leetcode/medium/833. Find And Replace in String
URL: https://leetcode.com/problems/find-and-replace-in-string/

NOTE: Description
NOTE: Constraints
  - 1 <= s.length <= 1000
  - k == indices.length == sources.length == targets.length
  - 1 <= k <= 100
  - 0 <= indexes[i] < s.length
  - 1 <= sources[i].length, targets[i].length <= 50
  - s consists of only lowercase English letters.
  - sources[i] and targets[i] consist of only lowercase English letters. 

NOTE: Explanation
NOTE: Reference
*/

function findReplaceString(s: string, indices: number[], sources: string[], targets: string[]): string {
  const aggregate: { source: string, target: string, index: number }[] = [];

  while (sources.length > 0) {
    const source = sources.shift();
    const target = targets.shift();
    const index = indices.shift();

    aggregate.push({
      source,
      target,
      index,
    });
  }

  aggregate.sort((a, b) => a.index - b.index);

  const result = [];

  while (aggregate.length > 0) {
    const { index, source, target }: { index: number, source: string, target: string } = aggregate.pop();
    const left = s.substring(0, index);
    const right = s.substring(index);
    if (right.startsWith(source)) {
      result.unshift(right.replace(source, target));
      s = left;
    }
  }
  result.unshift(s);

  return result.join('');
}

let s = 'abcd';
let indices = [0, 2];
let sources = ['a', 'cd'];
let targets = ['eee', 'ffff'];
console.log(findReplaceString(s, indices, sources, targets));
// Output: "eeebffff"

s = 'abcd';
indices = [0, 2];
sources = ['ab', 'ec'];
targets = ['eee', 'ffff'];
console.log(findReplaceString(s, indices, sources, targets));
// Output: "eeecd"

s = 'vmokgggqzp';
indices = [3, 5, 1];
sources = ['kg', 'ggq', 'mo'];
targets = ['s', 'so', 'bfr'];
console.log(findReplaceString(s, indices, sources, targets));
// "vbfrssozp"
