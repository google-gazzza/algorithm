// adjacent-repeated-words-in-a-string
// https://www.codewars.com/kata/5245a9138ca049e9a10007b8

const countAdjacentPairs = (searchString) => {
  searchString = searchString.toLowerCase().split(' ');
  let count = 0;
  let word;
  
  while (searchString.length) {
    word = searchString.shift();
    
    if (word === searchString[0] && word !== searchString[1]) {
      count += 1;
    }
  }
  
  return count;
};

