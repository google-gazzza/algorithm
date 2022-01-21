// [Easy] 2129. Capitalize the Title
// 2129_capitalize_the_title

// https://leetcode.com/problems/capitalize-the-title
// Runtime: 107 ms, faster than 51.22% of TypeScript online submissions for Capitalize the Title.
// Memory Usage: 40 MB, less than 92.68% of TypeScript online submissions for Capitalize the Title.

function capitalizeTitle(title: string): string {
  const words = title.split(' ')
  return words
    .reduce((acc, cur) => {
      let result = cur.length < 3 ? cur.toLowerCase() : cur.substring(0, 1).toUpperCase() + cur.substring(1).toLowerCase()
      return acc + ' ' + result
    }, '')
    .substring(1)
}

capitalizeTitle('capiTalIze tHe titLe') //?
capitalizeTitle('First leTTeR of EACH Word') //?
