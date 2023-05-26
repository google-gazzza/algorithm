// simple-fun-265-the-janitor-and-his-mop
// Simple Fun #265: The Janitor And His Mop
// https://www.codewars.com/kata/59128363e5bc24091a00006f
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/6kyu/simple-fun-265-the-janitor-and-his-mop

const theJanitor = (word) => new Array(26).fill(0).map((v, i) => {
  let targetCharacter = String.fromCharCode(97 + i);
  let firstIndex = word.indexOf(targetCharacter);
  let lastIndex = word.lastIndexOf(targetCharacter);
  
  return firstIndex === -1 ? 0 : lastIndex - firstIndex + 1;
});


console.log(theJanitor("abacaba"), [7, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
console.log(theJanitor("likemm"), [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
console.log(theJanitor("rkuhsxtflzvytbtwxyarsglibmhfmmikyolfmopbtkzxezjahq"), [30, 27, 0, 0, 1, 29, 1, 46, 8, 1, 41, 27, 12, 0, 5, 1, 1, 20, 17, 35, 1, 1, 1, 39, 22, 37]);
console.log(theJanitor("ommnommnomm"), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 5, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
