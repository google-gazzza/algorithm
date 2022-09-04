// [JS][8kyu] Expressions Matter
// expressions-matter
// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/javascript

function expressionMatter(a, b, c) {
  if (a === 1 || b === 1 || c === 1) {
    return Math.max(
      ...[a + b + c, (a + b) * c, a + b + c, a * (b + c), a + b * c]
    );
  }
  return a * b * c;
}

expressionMatter(5, 1, 3) === 20;
expressionMatter(5, 4, 3) === 60;

expressionMatter(1, 6, 1) === 8;
expressionMatter(2, 6, 1) === 14;
expressionMatter(6, 7, 1) === 48;
