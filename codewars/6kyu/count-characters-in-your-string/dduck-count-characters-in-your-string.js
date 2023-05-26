// count-characters-in-your-string
// https://www.codewars.com/kata/52efefcbcdf57161d4000091/

const count = (string) => {
  const map = {};
  string.split('').forEach((v) => map[v] = (map[v] || 0) + 1);
  return map;
};

console.log(count("aba"), { a: 2, b: 1 });
