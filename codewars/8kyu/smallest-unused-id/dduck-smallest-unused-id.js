// smallest-unused-id
// Smallest unused ID
// difficulty: 8kyu
// https://www.codewars.com/kata/55eea63119278d571d00006a/

const nextId = (ids) => {
  ids = [...new Set(ids)].sort((a, b) => a - b);
  
  if (ids[0] !== 0) {
    return 0;
  }
  
  while (ids[0] + 1 === ids[1]) {
    ids.shift();
  }
  
  return ids[0] + 1;
};



console.log(nextId([0, 1, 2, 3, 5]), 4);
console.log(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 11);
console.log(nextId([1, 2, 0, 2, 3]));
