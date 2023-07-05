// leetcode/easy/2723. Add Two Promises
// 2723-add-two-promises
// URL: https://leetcode.com/problems/add-two-promises/description/
//
// NOTE: Description
// NOTE: Constraints
// NOTE: Explanatin
// NOTE: Reference

async function addTwoPromises(promise1: Promise<number>, promise2: Promise<number>): Promise<number> {
  const result1 = await promise1;
  const result2 = await promise2;

  return new Promise((resolve, reject) => resolve(result1 + result2));
};
/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
