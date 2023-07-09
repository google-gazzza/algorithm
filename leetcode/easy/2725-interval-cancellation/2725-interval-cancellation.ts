// leetcode/easy/2725. Interval Cancellation
// 2725-interval-cancellation
// URL: https://leetcode.com/problems/interval-cancellation/description/
//
// NOTE: Description
// NOTE: Constraints
// NOTE: Explanatin
// NOTE: Reference

function cancellable(fn: Function, args: any[], t: number): Function {
  fn(...args);
  const intervalId = setInterval(() => fn(...args), t);

  return () => clearInterval(intervalId);
}

/**
 *  const result = []
 *
 *  const fn = (x) => x * 5
 *  const args = [2], t = 20, cancelT = 50
 *
 *  const log = (...argsArr) => {
 *      result.push(fn(...argsArr))
 *  }
 *
 *  const cancel = cancellable(fn, args, t);
 *
 *  setTimeout(() => {
 *     cancel()
 *     console.log(result) // [{"time":20,"returned":10}]
 *  }, cancelT)
 */
