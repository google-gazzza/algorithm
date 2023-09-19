// [JS][6kyu] Moves in squared strings (II)
// moves-in-squared-strings-ii
// https://www.codewars.com/kata/56dbe7f113c2f63570000b86/train/javascript

const rot = (strng) => {
  return strng
    .split('\n')
    .reverse()
    .map((item) => item.split('').reverse().join(''))
    .join('\n')
}
const selfieAndRot = (strng) => {
  return [
    ...strng.split('\n').map((item) => item + '.'.repeat(item.length)),
    ...strng
      .split('\n')
      .reverse()
      .map((item) => '.'.repeat(item.length) + item.split('').reverse().join('')),
  ].join('\n')
}
const oper = (fct, s) => fct(s)

// oper(rot, 'abcd\nefgh\nijkl\nmnop')
oper(selfieAndRot, 'abcd\nefgh\nijkl\nmnop')

oper(rot, 'fijuoo\nCqYVct\nDrPmMJ\nerfpBA\nkWjFUG\nCVUfyL')

oper(rot, 'fijuoo\nCqYVct\nDrPmMJ\nerfpBA\nkWjFUG\nCVUfyL') === 'LyfUVC\nGUFjWk\nABpfre\nJMmPrD\ntcVYqC\nooujif'
oper(rot, 'rkKv\ncofM\nzXkh\nflCB') === 'BClf\nhkXz\nMfoc\nvKkr'

oper(selfieAndRot, 'xZBV\njsbS\nJcpN\nfVnP') === 'xZBV....\njsbS....\nJcpN....\nfVnP....\n....PnVf\n....NpcJ\n....Sbsj\n....VBZx'
oper(selfieAndRot, 'uLcq\nJkuL\nYirX\nnwMB') === 'uLcq....\nJkuL....\nYirX....\nnwMB....\n....BMwn\n....XriY\n....LukJ\n....qcLu'
