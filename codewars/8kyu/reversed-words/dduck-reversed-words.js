// reversed-words
// Reversed Words
// difficulty: 8kyu
// https://www.codewars.com/kata/51c8991dee245d7ddf00000e/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/reversed-words

const reverseWords = (str) => str.split(' ').reverse().join(' ');



console.log(reverseWords("hello world!"), "world! hello");
console.log(reverseWords("yoda doesn't speak like this"), "this like speak doesn't yoda");
console.log(reverseWords("foobar"), "foobar");
console.log(reverseWords("kata editor"), "editor kata");
console.log(reverseWords("row row row your boat"), "boat your row row row");
