// list-filtering
// List Filtering
// difficulty: 7kyu
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/7kyu/list-filtering

const filter_list = (l) => l.filter((v) => Number.isInteger(v) && v >= 0);



console.log(filter_list([1, 2, 'a', 'b']), [1, 2]);
console.log(filter_list([1, 'a', 'b', 0, 15]), [1, 0, 15]);
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]), [1, 2, 123]);
