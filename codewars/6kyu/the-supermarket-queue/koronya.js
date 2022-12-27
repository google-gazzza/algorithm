// [JS][6kyu] The Supermarket Queue
// the-supermarket-queue
// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript

const queueTime = (customers, n) => {
  if (customers.length === 0) {
    return 0;
  }
  let time = 0;
  let window = [];
  const limit = Math.min(n, customers.length);
  for (let i = 0; i < limit; i += 1 || 0) {
    window.push(customers.shift());
  }

  while (customers.length > 0 || window.length > 0) {
    const min = Math.min(...window);
    window = window.map((item) => item - min).filter((item) => item > 0);
    time += min;

    const next = Math.min(customers.length, n - window.length);
    for (let i = 0; i < next; i += 1 || 0) {
      window.push(customers.shift());
    }
  }

  return time;
};

// queueTime([], 1)
// queueTime([5, 3, 4], 1)
// queueTime([10, 2, 3, 3], 2)
// queueTime([2, 3, 10], 2)

// queueTime([2,2,3,3,4,4], 2)
// queueTime([1, 2, 3, 4, 5], 100)
