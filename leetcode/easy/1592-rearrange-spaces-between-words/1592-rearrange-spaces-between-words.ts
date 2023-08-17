// leetcode/easy/1592. Rearrange Spaces Between Words
// 1592-rearrange-spaces-between-words
// URL: https://leetcode.com/problems/rearrange-spaces-between-words/description/

function emptySpaceCount(text: string): number {
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      count++;
    }
  }

  return count;
}

function reorderSpaces(text: string): string {
  const spaceCount = emptySpaceCount(text);
  const words = text.trim().split(/\s+/);
  const remainder = spaceCount % (words.length - 1);
  const spacePerWords = words.length === 1 ? 0 : Math.floor(spaceCount / (words.length - 1));

  if (words.length === 1) {
    return words[0] + ' '.repeat(spaceCount);
  }

  let result = words.map((word, index) => {
    if (index === words.length - 1) {
      return word;
    }

    return word + ' '.repeat(spacePerWords);
  });

  if (remainder > 0) {
    result[result.length - 1] += ' '.repeat(remainder);
  }

  return result.join('');
}

let text = "  this   is  a sentence ";
let expect = "this   is   a   sentence";
console.log(reorderSpaces(text) === expect);

text = " practice   makes   perfect";
expect = "practice   makes   perfect ";
console.log(reorderSpaces(text) === expect);

text = "  hello";
expect = "hello  ";
console.log(reorderSpaces(text) === expect);
