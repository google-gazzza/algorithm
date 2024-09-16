// dont-give-me-five
// Don't give me five!
// difficulty: 7kyu
// https://www.codewars.com/kata/5813d19765d81c592200001a/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/7kyu/dont-give-me-five

const dontGiveMeFive = (begin, end) => {
  let count = 0;
  
  while (begin <= end) {
    if (!String(begin).match(/5/)) {
      count += 1;
    }
    begin += 1;
  }
  
  return count;
};



console.log(dontGiveMeFive(1, 9), 8);
//?
console.log(dontGiveMeFive(4, 17), 12);
// 4,6,7,8,9,0,1,2,3,4,5,6,7
