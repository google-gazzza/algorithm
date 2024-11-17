// [JS][6kyu] For whom the Bell tolls
// for-whom-the-bell-tolls
// https://www.codewars.com/kata/62665d43e67fbaf7b37212d2/train/javascript

const bell = (n) => Array.from({ length: n }).map((_, i) => (n - i) * (i + 1))

bell(1)
bell(2)
bell(3)
bell(10)
