// leetcode/medium/2805. Custom Interval
// 2805-custom-interval
// URL: https://leetcode.com/problems/custom-interval/

const map = new Map();

function customInterval(
  fn: Function,
  delay: number,
  period: number,
  id?: number,
  weight = 0,
): number {
  let randomKey = id || Math.random();

  if (!id) {
    while (map.has(randomKey)) {
      randomKey = Math.random();
    }
  }

  const intervalId = setTimeout(() => {
    fn();
    customInterval(fn, delay, period, randomKey, weight + 1);
  }, delay + (period * weight));

  map.set(randomKey, intervalId);

  return randomKey;
}

function customClearInterval(id: number) {
  clearInterval(map.get(id));
}
