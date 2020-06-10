// https://leetcode.com/problems/ransom-note
// Runtime: 84 ms, faster than 58.24% of JavaScript online submissions for Ransom Note.
// Memory Usage: 40.7 MB, less than 20.37% of JavaScript online submissions for Ransom Note.
const canConstruct = (ransomNote, magazine) => {
  const ransomNoteLen = ransomNote.length
  const magazineArr = [...magazine]
  for (let i = 0; i < ransomNoteLen; i = i + 1 | 0) {
    const ransom = ransomNote[i]
    const index = magazineArr.indexOf(ransom)
    if (index === -1) {
      return false
    }
    magazineArr.splice(index, 1)
  }
  return true
}
