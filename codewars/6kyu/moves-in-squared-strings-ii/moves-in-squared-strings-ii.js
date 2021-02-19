/*
moves-in-squared-strings-ii

# codewars/6kyu/Moves in squared strings (II)
Difficulty: 6kyu
URL: https://www.codewars.com/kata/56dbe7f113c2f63570000b86/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/
function rot(strng) {
  return strng.split('\n')
    .map((e) => e.split('').reverse().join(''))
    .reverse()
    .join('\n');
}

function selfieAndRot(strng) {
  const dotSize = strng.split('\n')[0].length;
  const dot = '.'.repeat(dotSize);
  const left = strng.split('\n').join(`${dot}\n`);
  const right = rot(strng).split('\n').join(`\n${dot}`);
  
  return `${left}${dot}\n${dot}${right}`;
}

const oper = (func, s) => func(s);

// test
console.log(oper(rot, "fijuoo\nCqYVct\nDrPmMJ\nerfpBA\nkWjFUG\nCVUfyL"), "LyfUVC\nGUFjWk\nABpfre\nJMmPrD\ntcVYqC\nooujif");
console.log(oper(rot, "rkKv\ncofM\nzXkh\nflCB"), "BClf\nhkXz\nMfoc\nvKkr");
console.log(oper(selfieAndRot, "xZBV\njsbS\nJcpN\nfVnP"),
  "xZBV....\njsbS....\nJcpN....\nfVnP....\n....PnVf\n....NpcJ\n....Sbsj\n....VBZx");
console.log(oper(selfieAndRot, "uLcq\nJkuL\nYirX\nnwMB"),
  "uLcq....\nJkuL....\nYirX....\nnwMB....\n....BMwn\n....XriY\n....LukJ\n....qcLu");
