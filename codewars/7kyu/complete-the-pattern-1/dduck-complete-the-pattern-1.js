// https://www.codewars.com/kata/5572f7c346eb58ae9c000047/

const pattern = (n, count = 1, output = '') => {
  if (count <= n) {
    return pattern(n, count + 1, `${output}\n${String(count).repeat(count)}`);
  }
  return output.slice(1);
};

console.log(pattern(1), '1');
console.log(pattern(2), '1\n22');
console.log(pattern(5), '1\n22\n333\n4444\n55555');
