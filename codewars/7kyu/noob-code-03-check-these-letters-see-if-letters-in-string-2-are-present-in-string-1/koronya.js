// [JS][7kyu] noobCode 03: CHECK THESE LETTERS... see if letters in "String 2" are present in "String 1"
// noob-code-03-check-these-letters-see-if-letters-in-string-2-are-present-in-string-1
// https://www.codewars.com/kata/57470efebf81fea166001627/train/javascript

const letterCheck = (arr) => {
  const [str1, str2] = arr
  const set1 = new Set(str1.toLowerCase())
  const set2 = new Set(str2.toLowerCase())
  return [...set2].every((item) => set1.has(item))
}

letterCheck(['trances', 'nectar']) === true
letterCheck(['THE EYES', 'they see']) === true
letterCheck(['assert', 'staring']) === false
letterCheck(['arches', 'later']) === false
letterCheck(['dale', 'caller']) === false
letterCheck(['parses', 'parsecs']) === false
letterCheck(['replays', 'adam']) === false
letterCheck(['mastering', 'streaming']) === true
letterCheck(['drapes', 'compadres']) === false
letterCheck(['deltas', 'slated']) === true
