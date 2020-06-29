// function-composition
// Function Composition
// https://www.codewars.com/kata/5421c6a2dda52688f6000af8
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/6kyu/function-composition


const compose = (...functions) => (...args) => {
  return functions.reduceRight((acc, cur) => {
    if (Array.isArray(acc)) {
      return cur(...acc);
    }
    return cur(acc);
  }, args);
};


// test code
add1 = function (a) {
  return a + 1;
};
id = function (a) {
  return a;
};
console.log(compose(add1, id)(0) == 1);

compose(
  function (a) {
    return a + 1;
  }, function (a, b, c, d, e) {
    return a + b + c + d + e;
  })(1, 2, 3, 4, 5);
// ? - 16


// best practice on codewars
function compose(f, g) {
  return function () {
    return f(g.apply(this, arguments));
  };
}
