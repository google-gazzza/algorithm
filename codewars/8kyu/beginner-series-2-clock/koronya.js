// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a
const SEC = 1000;
const MIN = SEC * 60;
const HOUR = MIN * 60;

const past = (h, m, s) => h * HOUR + m * MIN + s * SEC;

past(0, 1, 1) === 61000;
past(1, 1, 1) === 3661000;
past(0, 0, 0) === 0;
past(1, 0, 1) === 3601000;
past(1, 0, 0) === 3600000;
