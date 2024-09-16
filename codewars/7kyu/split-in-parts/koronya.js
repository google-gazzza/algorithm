// [JS][7kyu] Split In Parts
// split-in-parts
// https://www.codewars.com/kata/5650ab06d11d675371000003/train/javascript

const splitInParts = (s, partLength) => {
  const result = []
  let start = 0
  while (start < s.length) {
    result.push(s.substring(start, start + partLength))
    start += partLength
  }

  return result.join(' ')
}

splitInParts('supercalif', 3)
splitInParts('supercalifragilisticexpialidocious', 3) === 'sup erc ali fra gil ist ice xpi ali doc iou s'
splitInParts('HelloKata', 1) === 'H e l l o K a t a'
splitInParts('HelloKata', 9) === 'HelloKata'
