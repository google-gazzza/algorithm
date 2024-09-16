// leetcode/easy/2796. Repeat String
// 2796-repeat-string
// URL: https://leetcode.com/problems/repeat-string/description/
//
// NOTE: Description
// NOTE: Constraints
// NOTE: Explanatin

declare global {
  interface String {
    replicate(times: number): string;
  }
}

String.prototype.replicate = function (times: number) {
  return Array(times).fill(this).join('');
};
