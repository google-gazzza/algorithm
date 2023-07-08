// leetcode/easy/2715. Execute Cancellable Function With Delay
// 2715-execute-cancellable-function-with-delay
// URL: https://leetcode.com/problems/execute-cancellable-function-with-delay/description/
//
// NOTE: Description
// NOTE: Constraints
// NOTE: Explanatin
// NOTE: Reference

function cancellable(fn: Function, args: any[], t: number): Function {
  this.timeoutInstance = setTimeout(() => {
    fn(...args);
  }, t);

  return () => clearTimeout(this.timeoutInstance);
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
