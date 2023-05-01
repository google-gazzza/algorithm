/*
# leetcode/easy/2621. Sleep
# 2621-sleep
# URL: https://leetcode.com/problems/sleep/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanatin
NOTE: Reference

*/

async function sleep(millis: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, millis);
  });
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
