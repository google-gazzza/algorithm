// leetcode/medium/2636. Promise Pool
// 2636-promise-pool
// URL: https://leetcode.com/problems/promise-pool/description/

type F = () => Promise<any>;

async function promisePool(functions: F[], n: number): Promise<any> {

  return new Promise((resolve) => {
    let poolRemaining = n;
    const startTimer = Date.now();
    const result = [];

    if (functions.length === 0) {
      resolve([result, 0]);
    }

    async function run() {
      if (poolRemaining === 0 || functions.length === 0) {
        return;
      }
      poolRemaining -= 1;

      await functions.shift()()
        .then(() => {
          result.push(Date.now() - startTimer);
          poolRemaining += 1;
          run();

          if (poolRemaining === n && functions.length === 0) {
            resolve([result, Date.now() - startTimer]);
          }
        });
    }

    for (let i = 0; i < n; i += 1) {
      run();
    }
  });
}

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */
