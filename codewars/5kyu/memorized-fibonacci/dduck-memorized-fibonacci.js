// https://www.codewars.com/kata/529adbf7533b761c560004e5

const fibonacci = (n, p = 0, c = 1, s = 0) => (s >= n ? p : fibonacci(n, c, p + c, s + 1));

console.log(fibonacci(2));
console.log(fibonacci(70), 190392490709135);
console.log(fibonacci(60), 1548008755920);
console.log(fibonacci(50), 12586269025);
