// list-to-array
// List to Array
// difficulty: 7kyu
// https://www.codewars.com/kata/557dd2a061f099504a000088/

const listToArray = (list) => (list && list.next) ? [list.value].concat(listToArray(list.next)) : [list.value];


var list1 = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
var list2 = { value: 'foo', next: { value: 'bar', next: null } };

console.log(listToArray(list1), [1, 2, 3]);
console.log(listToArray(list2), ['foo', 'bar']);
